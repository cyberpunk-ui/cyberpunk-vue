const expect = chai.expect;
import Vue from 'vue'
import Message from '../../src/components/message/main'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Message', () => {
  it('create Message body.', () => {
    expect(Message).to.be.ok;
  });

  it('autoClose attribute.', (done) => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Message);
    const vm = new Constructor({
      propsData: {
        autoClose: 1,
      }
    }).$mount(div);
    vm.$on('close', () => {
      expect(document.body.contains(vm.$el)).to.eq(false);
      done()
    });
  });

  it('position attribute.', () => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Message);
    const vm = new Constructor({
      propsData: {
        position: 'center',
      }
    }).$mount(div);
    const message = vm.$el;
    expect(message.classList.contains('position-center')).to.equal(true);
    vm.$destroy();
  });

  it('closeButton attribute.', () => {
    const callback = sinon.fake();
    const Constructor = Vue.extend(Message);
    const vm = new Constructor({
      propsData: {
        closeButton: {
          text: '关闭',
          callback,
        },
      }
    }).$mount();
    const closeButton = vm.$el.querySelector('.close');
    expect(closeButton.textContent.trim()).to.eq('关闭');
    closeButton.click();
    expect(callback).to.have.been.called;
    vm.$destroy();
  });

  it('enableHtml attribute.', () => {
    const Constructor = Vue.extend(Message);
    const vm = new Constructor({
      propsData: {
        enableHtml: true,
      }
    });
    vm.$slots.default= ['<i>测试内容</i>'];
    vm.$mount();
    let iTag = vm.$el.querySelector('i')
    expect(iTag).to.exist;
    vm.$destroy();
  });
});