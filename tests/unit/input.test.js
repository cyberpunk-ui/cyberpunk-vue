const expect = chai.expect;
import Vue from 'vue'
import Input from '../../src/components/input/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('[Input]', () => {
  it('create input.', function () {
    expect(Input).to.be.ok;
  });
  describe('[props]', function () {
    let vm = null;
    const Constructor = Vue.extend(Input);
    afterEach(() => {
      vm.$destroy();
    });
    it('value attribute.', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount();
      const inputElement = vm.$el;
      expect(inputElement.value).to.equal('1234');
    });
    it('disabled attribute.', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el;
      expect(inputElement.disabled).to.equal(true);
    });
    it('readonly attribute.', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el;
      expect(inputElement.readOnly).to.equal(true);
    });
  });
  describe('[event]', function () {
    let vm = null;
    const Constructor = Vue.extend(Input);
    afterEach(() => {
      vm.$destroy();
    });
    it('test input & v-model.', function () {
      // 创建input实例并挂载
      vm = new Constructor().$mount();
      // 创建模拟方法
      const callback = sinon.fake();
      // 初始化change的方法
      vm.$on('input', callback);
      // 创建一个input事件对象作为传参
      const event = new Event('input');
      // 使用defineProperty添加value，模拟v-model
      Object.defineProperty(event, 'target', {
        value: {value: 'test v-model & input'},
        enumerable: true,
      });
      // 触发事件
      let inputElement = vm.$el;
      inputElement.dispatchEvent(event);
      // 期望change方法被触发，且第一个参数是event.target.value
      expect(callback).to.have.been.calledWith('test v-model & input');
    });
    it('test change/focus/blur event.', function () {
      ['change', 'focus', 'blur'].forEach((eventName) => {
        // 创建input实例并挂载
        vm = new Constructor().$mount();
        // 创建模拟方法
        const callback = sinon.fake();
        // 初始化change的方法
        vm.$on(eventName, callback);
        // 创建一个事件对象作为传参
        const event = new Event(eventName);
        // 触发事件
        let inputElement = vm.$el;
        inputElement.dispatchEvent(event);
        // 期望change方法被触发，且第一个参数是event对象
        expect(callback).to.have.been.calledWith(event);
      })
    });
  });
});