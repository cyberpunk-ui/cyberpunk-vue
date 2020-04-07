<template>
  <div class="demo">
    <h2>Basic usage</h2>
    <p>If the options have a clear hierarchical structure, Cascader can be used to view and select them.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-cascader
          :source.sync="areaSource"
          :selected.sync="selectedCascader"
        ></c-cascader>
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
    <h2>Dynamic loading</h2>
    <p>Dynamic load its child nodes when checked a node.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-cascader
          :source.sync="areaSource2"
          :selected.sync="selectedCascader2"
          :load-data="loadCascaderData"
        ></c-cascader>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr2) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <c-icon class="icon-down" :type="isShowCode(1, 'icon')"></c-icon>
        <span class="lock-code-word">{{isShowCode(1, 'text')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CCascader from '../../../src/components/cascader/main'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'
  import db from "../../../tests/fixtures/area-db"

  function ajax(parent_id = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        let result = db.filter(item => item.parent_id === parent_id);
        result.forEach(node => {
          node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
        });
        resolve(result)
      }, parent_id && 500)
    })
  }

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CCascader,
      CIcon,
    },
    created() {
      ajax().then((result)=>{
        this.areaSource2 = result
      })
    },
    data() {
      return {
        areaSource: [
          {
            name: "浙江",
            children: [
              {
                name: "杭州",
                children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
              },
              {
                name: "嘉兴",
                children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
              }
            ]
          },
          {
            name: "福建",
            children: [
              {
                name: "福州",
                children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
              }
            ]
          },
          {
            name: "安徽",
            children: [
              {
                name: "合肥",
                children: [
                  {
                    name: "瑶海"
                  },
                  {
                    name: "庐阳"
                  }
                ]
              }
            ]
          }
        ],
        areaSource2: [],
        selectedCascader: [],
        selectedCascader2: [],
        codeStr: `
          <c-cascader
            :source.sync="areaSource"
            :selected.sync="selectedCascader"
          ></c-cascader>
        `,
        codeStr2: `
          <c-cascader
            :source.sync="areaSource2"
            :selected.sync="selectedCascader2"
            :load-data="loadCascaderData"
          ></c-cascader>
        `,
      }
    },
    methods: {
      loadCascaderData(node, updateSource){
        const { id } = node;
        ajax(id).then((result)=>{
          updateSource(result);
        })
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>