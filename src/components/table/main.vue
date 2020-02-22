<template>
  <div class="c-table-wrapper">
    <table class="c-table" :class="classes">
      <thead>
        <tr>
          <th v-if="selectedItems">
            <input
              type="checkbox"
              @change="onChangeAllItems"
              :checked="dataSource.length === selectedItems.length"
              ref="allCheckInput"
            />
          </th>
          <th v-for="item in columns" :key="item.title">{{item.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="item.id">
          <td v-if="selectedItems">
            <input
              type="checkbox"
              :checked="inCheckedItems(item)"
              @change="onChangeItem(item, index, $event)"
            />
          </td>
          <template v-for="column in columns" >
            <td :key="column.id">{{item[column.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "CTable",
    components: {  },
    props: {
      columns: {
        type: Array,
        required: true,
      },
      dataSource: {
        type: Array,
        required: true,
      },
      stripe: {
        type: Boolean,
        required: false,
      },
      bordered: {
        type: Boolean,
        required: false,
      },
      selectedItems: {
        type: Array,
        default: () => [],
      },
      selectionChange: {
        type: Function,
      },
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
    computed:{
      classes(){
        return {
          stripe: this.stripe,
          bordered: this.bordered,
        }
      }
    },
    data(){
      return {

      }
    },
    methods: {
      inCheckedItems(item) {
        return this.selectedItems.filter(i => i.id === item.id).length > 0
      },
      onChangeItem(item, index, e){
        const { checked } = e.target
        const copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (checked) {
          copy.push(item);
        } else {
          copy.splice(copy.indexOf(item), 1);
        }
        this.$emit('update:selectedItems', copy)
      },
      onChangeAllItems(e){
        const { checked } = e.target
        this.$emit('update:selectedItems', checked ? this.dataSource : [])
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/var";

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
    tbody tr:hover {
      background-color: lighten($grey-color, 8%)!important;
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
      tbody tr:nth-child(even) {
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
  }
</style>
