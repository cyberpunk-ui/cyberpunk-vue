import chai, { expect } from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mount } from "@vue/test-utils";
import Button from "@/components/button/button";
chai.use(sinonChai);

describe("[Button]", () => {
  it("create button component.", () => {
    expect(Button).to.be.ok;
  });
  it("set icon attribute.", () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: "set"
      }
    });
    const useElement = wrapper.vm.$el.querySelector("use");
    expect(useElement.getAttribute("xlink:href")).to.equal("#icon-set");
  });
  it("set loading attribute.", () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: "settings",
        loading: true
      }
    });
    const useElements = wrapper.vm.$el.querySelectorAll("use");
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute("xlink:href")).to.equal("#icon-loading");
  });
  xit("icon in left", () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: "set"
      }
    });
    const icon = wrapper.find("use");
    expect(getComputedStyle(icon).float).to.eq("left");
  });
  xit("set iconPosition attribute", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const vm = mount(Button, {
      propsData: {
        icon: "set",
        iconPosition: "right"
      }
    }).vm;
    vm.$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).float).to.eq("right");
    vm.$el.remove();
    vm.$destroy();
  });
  it("test click event", () => {
    const callback = sinon.fake();
    const vm = mount(Button, {
      propsData: {
        icon: "set",
        iconPosition: "right"
      }
    }).vm;

    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  });
});
