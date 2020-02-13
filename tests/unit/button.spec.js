import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Button from "@/components/button/button";

describe("Button", () => {
  it("Button按钮已被创建.", () => {
    expect(Button).to.be.ok;
  });
  it("可以设置icon.", () => {
    const vm = shallowMount(Button, {
      propsData: {
        icon: "set"
      }
    }).$mount();
    const useElement = vm.$el.querySelector("use");
    expect(useElement.getAttribute("xlink:href")).to.equal("#icon-set");
    vm.$destroy();
  });
  it("可以设置loading.", () => {
    const vm = shallowMount(Button, {
      propsData: {
        icon: "settings",
        loading: true
      }
    }).$mount();
    const useElements = vm.$el.querySelectorAll("use");
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute("xlink:href")).to.equal("#icon-loading");
    vm.$destroy();
  });
  it("icon 默认的在左边", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const vm = shallowMount(Button, {
      propsData: {
        icon: "set"
      }
    }).$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).float).to.eq("left");
    vm.$el.remove();
    vm.$destroy();
  });
  it("设置 iconPosition 可以改变 float", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const vm = shallowMount(Button, {
      propsData: {
        icon: "set",
        iconPosition: "right"
      }
    }).$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).float).to.eq("right");
    vm.$el.remove();
    vm.$destroy();
  });
  it("点击 button 触发 click 事件", () => {
    const vm = shallowMount(Button, {
      propsData: {
        icon: "settings"
      }
    }).$mount();
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  });
});
