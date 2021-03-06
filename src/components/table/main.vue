<template>
  <div class="c-table-wrapper">
    <table class="c-table" :class="classes">
      <thead>
        <tr>
          <th class="th-expend" v-if="expendKey"></th>
          <th v-if="selectedItems" class="th-checkbox">
            <input
              type="checkbox"
              @change="onChangeAllItems"
              :checked="areAllItemsChecked"
              ref="allCheckInput"
            />
          </th>
          <th v-for="column in columns" :key="column.field">
            <div class="c-table-header">
              {{column.text}}
              <span class="c-table-sorter" v-if="column.field in orderBy" @click="changeOrderBy(column.field)">
                <c-icon :class="{active: orderBy[column.field] === 'asc'}" type="arrow-up"></c-icon>
                <c-icon :class="{active: orderBy[column.field] === 'desc'}" type="arrow-down"></c-icon>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in dataSource">
          <tr :key="item[rowKey]" class="tr-data">
            <td class="th-expend" v-if="expendKey">
              <c-icon
                @click="expands.filter(v => v[rowKey] === item[rowKey])[0].expand = !(expands.filter(v => v[rowKey] === item[rowKey])[0].expand)"
                :type="expands.filter(v => v[rowKey] === item[rowKey])[0].expand ? 'sami-select' : 'add-select'"
              ></c-icon>
            </td>
            <td v-if="selectedItems" class="th-checkbox">
              <input
                type="checkbox"
                :checked="inCheckedItems(item)"
                @change="onChangeItem(item, index, $event)"
              />
            </td>
            <template v-for="column in columns">
              <td :key="column.field" :style="{width: column.width + 'px'}">
                <template v-if="column.render">
                  <vnodes :vnodes="column.render({value: item[column.field]})"></vnodes>
                </template>
                <template v-else>
                  {{item[column.field]}}
                </template>
              </td>
            </template>
          </tr>
          <tr :key="`expend-${item[rowKey]}`" v-if="item[expendKey] && expands.filter(v => v[rowKey] === item[rowKey])[0].expand" class="tr-expend">
            <td></td>
            <td :colspan="columns.length + 1" >{{item[expendKey]}}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="c-table-loading" v-if="loading">
      <c-icon type="loading"></c-icon>
    </div>
  </div>
</template>

<script>
  import CIcon from "../../components/icon/icon";

  export default {
    name: "CTable",
    components: {
      CIcon,
      vnodes: {
        functional: true,
        render: (h, context) => context.props.vnodes
      }
    },
    props: {
      dataSource: {
        type: Array,
        required: true,
      },
      orderBy: {
        type: Object,
        default: () => ({}),
      },
      stripe: {
        type: Boolean,
        default: false,
      },
      bordered: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      rowKey: {
        type: String,
        default: 'id',
      },
      expendKey: {
        type: String,
      },
      selectedItems: {
        type: Array,
        default: () => [],
      },
      selectionChange: {
        type: Function,
      },
    },
    data(){
      return {
        expands: [],
        columns: []
      }
    },
    watch:{
      selectedItems(item){
        const { allCheckInput } = this.$refs
        if (this.selectedItems.length === this.dataSource.length) {
          allCheckInput.indeterminate = false
        } else if (item.length === 0) {
          allCheckInput.indeterminate = false
        } else {
          allCheckInput.indeterminate = true
        }
      }
    },
    mounted() {
      this.columns = this.$slots.default.map(node => {
        if (node && node.componentOptions) {
          let {text, field, width} = JSON.parse(JSON.stringify(node.componentOptions.propsData))
          let render = node.data.scopedSlots && node.data.scopedSlots.default
          return {text, field, width, render}
        }
      }).filter(item => item)
    },
    computed:{
      classes(){
        return {
          stripe: this.stripe,
          bordered: this.bordered,
        }
      },
      areAllItemsChecked() {
        const dataSource = this.dataSource.map(item => item[this.rowKey]).sort();
        const selectedItems = this.selectedItems.map(item => item[this.rowKey]).sort();
        if (dataSource.length !== selectedItems.length) {return false}
        let flag = true
        for (let i = 0; i< dataSource.length; i++){
          if (dataSource[i] !== selectedItems[i]) {
            flag = false
            break
          }
        }
        return flag
      }
    },
    created() {
      this.expands = this.dataSource.map(item => {return {[this.rowKey]: item[this.rowKey], expand: false}})
    },
    methods: {
      inCheckedItems(item) {
        return this.selectedItems.filter(i => i[this.rowKey] === item[this.rowKey]).length > 0
      },
      onChangeItem(item, index, e){
        const { checked } = e.target
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (checked) {
          copy.push(item);
        } else {
          // const index = copy.map(v => v[this.rowKey]).indexOf(item[this.rowKey])
          // copy.splice(index, 1);
          copy = copy.filter(v => v.id !== item.id)
        }
        this.$emit('update:selectedItems', copy)
      },
      onChangeAllItems(e){
        const { checked } = e.target
        this.$emit('update:selectedItems', checked ? this.dataSource : [])
      },
      changeOrderBy (key) {
        const copy = JSON.parse(JSON.stringify(this.orderBy))
        let oldValue = copy[key]
        if (oldValue === 'asc') {
          copy[key] = 'desc'
        } else if (oldValue === 'desc') {
          copy[key] = true
        } else {
          copy[key] = 'asc'
        }
        this.$emit('update:orderBy', copy)
      },
      getSortClasses(type) {
        let classes = {}
        if (type === 'descend') {
          classes = {descend: true}
        } else if (type === 'ascend') {
          classes = {ascend: true}
        } else {
          console.warn('[Warning]: sortDirections field only support "descend" or "ascend"')
        }
        return classes
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/var";
  @import "../../style/animation";
  .c-table-wrapper {
    position: relative;
  }
  .c-table {
    color: $white-color;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 14px;
    thead th {
      background-color: darken($grey-color, 5%);
    }
    td, th{
      padding: 12px;
      line-height: 1.4em;
    }
    td {
      border-bottom: 1px solid lighten($grey-color, 10%);
    }
    th {
      text-align: left;
      border-bottom: 1px solid lighten($grey-color, 40%);
    }
    tr {
      background-color: $grey-color;
      transition: all .3s;
    }
    tbody tr:not(.tr-expend):hover {
      background-color: lighten($grey-color, 8%)!important;
    }
    .th-expend,
    .th-checkbox {
      width: 45px;
      text-align: center;
    }

    .th-expend {
      .icon {
        border: 1px solid fade_out($white-color, 0.8);
        cursor: pointer;
      }
    }
    .tr-expend {
    }
    &-footer {
      background-color: darken($grey-color, 6%);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 12px;
      .total-number {
        color: $white-color;
        font-size: 16px;
      }
    }
    &.stripe {
      tbody .tr-data:not(.tr-expend):nth-child(even) {
        background-color: darken($grey-color, 3%);
      }
    }
    &.bordered {
      td, th{
        border: 1px solid lighten($grey-color, 10%);
      }
      th {
        border-bottom: 1px solid lighten($grey-color, 40%);
      }
    }
    &-header {
      display: flex;
      align-items: center;
    }
    &-sorter {
      display: inline-flex;
      flex-direction: column;
      margin-left: 0.2em;
      cursor: pointer;
      svg {
        width: 16px;
        height: 16px;
      }
      svg:first-child {
        margin-bottom: -4px;
      }
      svg:last-child {
        margin-top: -4px;
      }
      & .active {
        fill: $secondary-color;
      }
    }
    &-loading {
      color: $secondary-color;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,.6);
      .icon {
        font-size: 18px;
        animation: spin 1.2s infinite linear;
      }
    }
  }
</style>
