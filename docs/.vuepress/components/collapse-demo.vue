<template>
  <div class="demo">
    <h2>Basic usage</h2>
    <p>You can expand multiple panels.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-collapse :selected.sync="selectedCollapse">
          <c-collapse-item title="Title1" name="1">
            item1
          </c-collapse-item>
          <c-collapse-item title="Title2" name="2">
            item2
          </c-collapse-item>
          <c-collapse-item title="Title3" name="3">
            item3
          </c-collapse-item>
        </c-collapse>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <c-icon class="icon-down" :type="isShowCode(0, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(0, 'text', 'cn')}}</span>
      </div>
    </div>
    <h2>Accordion</h2>
    <p>In accordion mode, only one panel can be expanded at once</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-collapse accordion :selected.sync="selectedCollapse2">
          <c-collapse-item title="Title1" name="1">
            item1
          </c-collapse-item>
          <c-collapse-item title="Title2" name="2">
            item2
          </c-collapse-item>
          <c-collapse-item title="Title3" name="3">
            item3
          </c-collapse-item>
        </c-collapse>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr2) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <c-icon class="icon-down" :type="isShowCode(1, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(1, 'text', 'cn')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CCollapse from '../../../src/components/collapse/main'
  import CCollapseItem from '../../../src/components/collapse-item/main'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CCollapse,
      CCollapseItem,
      CIcon
    },
    data() {
      return {
        selectedCollapse: ["1", "2"],
        selectedCollapse2: ["2"],
        codeStr: `
          <c-collapse :selected.sync="selectedCollapse">
            <c-collapse-item title="Title1" name="1">
              item1
            </c-collapse-item>
            <c-collapse-item title="Title2" name="2">
              item2
            </c-collapse-item>
            <c-collapse-item title="Title3" name="3">
              item3
            </c-collapse-item>
          </c-collapse>
        `,
        codeStr2: `
          <c-collapse accordion :selected.sync="selectedCollapse2">
            <c-collapse-item title="Title1" name="1">
              item1
            </c-collapse-item>
            <c-collapse-item title="Title2" name="2">
              item2
            </c-collapse-item>
            <c-collapse-item title="Title3" name="3">
              item3
            </c-collapse-item>
          </c-collapse>
        `,

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>