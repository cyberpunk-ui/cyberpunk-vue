<template>
  <div class="demo">
    <h2>Basic layout</h2>
    <p>If you have too much data to display in one page, use pagination.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-pagination
          :current.sync="currentPage"
          :total="total"
          :page-size="pageSize"
          :hide-on-single-page="hideOnSinglePage"
          @change="onPaginationChange"
        ></c-pagination>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <c-icon class="icon-down" :type="isShowCode(0, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(0, 'text')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CPagination from '../../../src/components/pagination/main'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CPagination,
      CIcon,
    },
    data() {
      return {
        currentPage: 1,
        total: 1101,
        pageSize: 10,
        hideOnSinglePage: false,
        codeStr: `
          <c-pagination
            :current.sync="currentPage"
            :total="total"
            :page-size="pageSize"
            :hide-on-single-page="hideOnSinglePage"
            @change="onPaginationChange"
          ></c-pagination>
        `,

      }
    },
    methods: {
      onPaginationChange: (page, pageSize) => {
        console.log('page change: ', page, pageSize)
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>