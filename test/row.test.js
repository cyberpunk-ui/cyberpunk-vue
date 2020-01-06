const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/row/row';
import Col from '../src/components/col/col';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
  it('create Row.', function () {
    expect(Row).to.be.ok;
  });
  it('gutter attribute.', () => {
    Vue.component('c-row', Row);
    Vue.component('c-col', Col);
    const div = document.createElement('div');
    document.body.append(div);
    div.innerHTML = `
        <c-row gutter="20">
          <c-col span="12"></c-col>
          <c-col span="12"></c-col>
        </c-row>
      `;
    const vm = new Vue({
      el: div
    });
    setTimeout(() => {
      const row = vm.$el.querySelector('.c-row');
      expect(getComputedStyle(row).marginLeft).to.eq('-10px');
      expect(getComputedStyle(row).marginRight).to.eq('-10px');
      const col = vm.$el.querySelectorAll('.c-col');
      expect(getComputedStyle(col[0]).paddingLeft).to.eq('10px');
      expect(getComputedStyle(col[0]).paddingRight).to.eq('10px');
    });
  });
  it('align attribute.', () => {
    const div = document.createElement('div');
    document.body.append(div);
    const rowConstructor = Vue.extend(Row);
    const row = new rowConstructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div);

    const rowElement = row.$el;
    expect(getComputedStyle(rowElement).justifyContent).to.equal('flex-end');
    div.remove();
    row.$el.remove();
    row.$destroy();
  });
});