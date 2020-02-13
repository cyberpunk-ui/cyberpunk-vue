import chai, { expect } from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mount } from "@vue/test-utils";
import Input from "@/components/input/input";
chai.use(sinonChai);

describe("[Input]", () => {
  it("create input component.", function() {
    expect(Input).to.be.ok;
  });
  it("set value attribute.", () => {
    const wrapper = mount(Input, {
      propsData: {
        value: "1234"
      }
    });
    expect(wrapper.vm.value).to.equal("1234");
  });
  it("set disabled attribute.", () => {
    const wrapper = mount(Input, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.vm.disabled).to.equal(true);
  });
  it("set readonly attribute.", () => {
    const wrapper = mount(Input, {
      propsData: {
        readonly: true
      }
    });
    expect(wrapper.vm.readonly).to.equal(true);
  });
  it("test input/v-model event.", function() {
    const wrapper = mount(Input);
    const callback = sinon.fake();
    wrapper.vm.$on("input", callback);
    // 创建一个input事件对象作为传参
    const event = new Event("input");
    // 使用defineProperty添加value，模拟v-model
    Object.defineProperty(event, "target", {
      value: { value: "test v-model & input" },
      enumerable: true
    });
    // 触发事件
    let inputElement = wrapper.vm.$el;
    inputElement.dispatchEvent(event);
    // 期望change方法被触发，且第一个参数是event.target.value
    expect(callback).to.have.been.calledWith("test v-model & input");
  });
  it("test change/focus/blur event.", function() {
    ["change", "focus", "blur"].forEach(eventName => {
      // 创建input实例并挂载
      const wrapper = mount(Input);
      // 创建模拟方法
      const callback = sinon.fake();
      // 初始化change的方法
      wrapper.vm.$on(eventName, callback);
      // 创建一个事件对象作为传参
      const event = new Event(eventName);
      // 触发事件
      let inputElement = wrapper.vm.$el;
      inputElement.dispatchEvent(event);
      // 期望change方法被触发，且第一个参数是event对象
      expect(callback).to.have.been.calledWith(event);
    });
  });
});
