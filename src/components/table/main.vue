<template>
  <div class="c-table-wrapper">
    <table class="c-table" :class="classes">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th v-for="item in columns" :key="item.title">{{item.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataSource" :key="item.id">
          <td><input type="checkbox"></td>
          <template v-for="column in columns" >
            <td :key="column.id">{{item[column.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
    <div class="c-table-footer">
      <CPagination
        v-if="pagination"
        :total="pagination.total"
        :page-size="pagination.pageSize"
        :current.sync="pagination.currentPage"
      ></CPagination>
    </div>
  </div>
</template>

<script>
  import CIcon from "@/components/icon/icon";
  import CPagination from "@/components/pagination";

  export default {
    name: "CTable",
    components: { CPagination },
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
      pagination: {
        type: Object,
      },
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
