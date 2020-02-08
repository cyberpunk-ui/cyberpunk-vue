const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/components/tabs/main';
import TabsHead from '../src/components/tabs-head/main';
import TabsBody from '../src/components/tabs-body/main';
import TabsItem from '../src/components/tabs-item/main';
import TabsPane from '../src/components/tabs-pane/main';

Vue.component('c-tabs', Tabs);
Vue.component('c-tabs-head', TabsHead);
Vue.component('c-tabs-body', TabsBody);
Vue.component('c-tabs-item', TabsItem);
Vue.component('c-tabs-pane', TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {

  it('should tabs.', () => {
    expect(Tabs).to.exist
  });

  it('should selected attr.', (done) => {
    const div = document.createElement('div');
    document.body.append(div);
    div.innerHTML = `
      <c-tabs selected="tabs1">
        <c-tabs-head>
          <c-tabs-item name="tabs1">Tab1</c-tabs-item>
          <c-tabs-item name="tabs2">Tab2</c-tabs-item>
          <c-tabs-item name="tabs3">Tab3</c-tabs-item>
        </c-tabs-head>
        <c-tabs-body>
          <c-tabs-pane name="tabs1">tab1</c-tabs-pane>
          <c-tabs-pane name="tabs2">tab2</c-tabs-pane>
          <c-tabs-pane name="tabs3">tab3</c-tabs-pane>
        </c-tabs-body>
      </c-tabs>
    `;
    const vm = new Vue({
      el: div
    });
    vm.$nextTick(()=> {
      let x = vm.$el.querySelector(`.c-tabs-item[data-name="tabs1"]`);
      expect(x.classList.contains('active')).to.true;
      done();
    })
  })

});