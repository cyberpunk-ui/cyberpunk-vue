const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../../src/components/tabs-item/main';



Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsItem', () => {

  it('should tabs-item.', () => {
    expect(TabsItem).to.exist;
  });

  it('should name attr.', () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      }
    }).$mount();
    // expect(vm.$el.getAttribute('data-name')).to.eq('xxx');
  })

  it('should disabled attr.', () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        disabled: true,
      }
    }).$mount();
    expect(vm.$el.classList.contains('disabled')).to.be.true;
    const callback = sinon.fake();
    vm.$on('click', callback);
    vm.$el.click();
    expect(callback).to.have.not.been.called;
  })

});