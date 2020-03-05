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
    const useElements = wrapper.vm.$el.querySelectorAll("path");
    expect(useElements.length).to.equal(1);
  });
  it("set iconPosition to left", () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: "set",
        iconPosition: "left"
      }
    });
    const icon = wrapper.find('.c-button-icon').element;
    expect(getComputedStyle(icon).order).to.eq('1');
  });
  it("set iconPosition to right", () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: "set",
        iconPosition: "right"
      }
    });
    const icon = wrapper.find(".c-button-icon").element;
    expect(getComputedStyle(icon).order).to.eq('2');
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
