<template>
  <div class="demo">
    <h2>Basic usage</h2>
    <p>Basic, concise tabs.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-tabs :selected.sync="selectedTab" @update:selected="onTabChange">
          <c-tabs-head>
            <template slot="actions">
              <c-button icon="set">Setting</c-button>
            </template>
            <c-tabs-item name="tabs1">
              <c-icon type="editor"></c-icon>Tab1
            </c-tabs-item>
            <c-tabs-item name="tabs2" disabled>
              <c-icon type="data"></c-icon>Tab2
            </c-tabs-item>
            <c-tabs-item name="tabs3">
              <c-icon type="history"></c-icon>Tab3
            </c-tabs-item>
          </c-tabs-head>
          <c-tabs-body>
            <c-tabs-pane name="tabs1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur cumque, deleniti
                doloremque, dolores ea enim eum, facere id impedit labore laboriosam molestiae natus nesciunt numquam
                quam qui vel velit!
              </p>
              <p>Atque blanditiis consequatur dolorem eligendi enim facere fuga fugiat illo incidunt itaque iusto
                magni molestiae nihil nostrum officiis, optio pariatur quam quod quos ratione repellat temporibus
                tenetur totam veritatis voluptatibus.
              </p>
              <p>Aliquam amet dolores ea earum eum fugit in incidunt maiores, maxime modi necessitatibus nostrum odio
                omnis pariatur quasi sed, sunt temporibus voluptatibus! Adipisci aliquam consequatur id illum molestiae
                recusandae rerum.
              </p></c-tabs-pane>
            <c-tabs-pane name="tabs2">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum est explicabo illo incidunt ipsum
                quas quibusdam sequi vero voluptatibus. Dolore dolorum exercitationem in omnis, porro repudiandae?
                Officia, reiciendis, sint.
              </p>
              <p>Accusantium, aliquid amet animi aut deleniti distinctio eum eveniet illo, laborum minus mollitia
                nesciunt nobis non obcaecati pariatur perspiciatis quibusdam quos, reiciendis rem sequi ullam ut
                voluptas voluptatibus! Aliquam, cumque.
              </p>
              <p>Esse, impedit minus molestias provident repudiandae sint? Aliquam autem nisi quas ratione. Architecto
                delectus et expedita illo in laboriosam libero neque officiis optio perferendis porro quaerat quasi
                reiciendis, rerum vel?
              </p></c-tabs-pane>
            <c-tabs-pane name="tabs3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus explicabo hic in iste, modi
                pariatur. Ad minus modi odio reiciendis sed? Deleniti id molestias perferendis qui quo ullam voluptas
                voluptatibus.
              </p>
              <p>Ad dolores ex expedita laboriosam officiis, porro unde? Atque deleniti distinctio error excepturi
                harum impedit ipsum necessitatibus nisi quae, quasi soluta unde voluptate! Animi impedit, iste magni
                sapiente sint soluta.
              </p>
              <p>A accusamus aliquid animi culpa delectus doloribus ducimus error est illum inventore ipsum, iste
                magni modi nihil nobis odit placeat, quis repellendus repudiandae sit soluta tempore vel voluptatibus.
                Dignissimos, libero.
              </p></c-tabs-pane>
          </c-tabs-body>
        </c-tabs>
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
  </div>
</template>

<script>
  import CTabs from '../../../src/components/tabs/main'
  import CTabsHead from '../../../src/components/tabs-head/main'
  import CTabsBody from '../../../src/components/tabs-body/main'
  import CTabsItem from '../../../src/components/tabs-item/main'
  import CTabsPane from '../../../src/components/tabs-pane/main'
  import CButton from '../../../src/components/button/button'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CTabs,
      CTabsHead,
      CTabsBody,
      CTabsItem,
      CTabsPane,
      CButton,
      CIcon,
    },
    data() {
      return {
        selectedTab: 'tabs1',
        codeStr: `
          <c-tabs :selected.sync="selectedTab" @update:selected="onTabChange">
            <c-tabs-head>
              <template slot="actions">
                <c-button icon="set">Setting</c-button>
              </template>
              <c-tabs-item name="tabs1">
                <c-icon type="editor"></c-icon>Tab1
              </c-tabs-item>
              <c-tabs-item name="tabs2" disabled>
                <c-icon type="data"></c-icon>Tab2
              </c-tabs-item>
              <c-tabs-item name="tabs3">
                <c-icon type="history"></c-icon>Tab3
              </c-tabs-item>
            </c-tabs-head>
            <c-tabs-body>
              <c-tabs-pane name="tabs1">...</c-tabs-pane>
              <c-tabs-pane name="tabs2">...</c-tabs-pane>
              <c-tabs-pane name="tabs3">...</c-tabs-pane>
            </c-tabs-body>
          </c-tabs>
        `,

      }
    },
    methods: {
      onTabChange: () => {
        // console.log('123',selected)
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>