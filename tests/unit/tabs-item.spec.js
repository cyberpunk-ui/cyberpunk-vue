import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Vue from "vue";
import TabsItem from "@/components/tabs-item/main";
import Popover from "@/components/popover/main";

describe("TabsItem", () => {
  it("should tabs-item.", () => {
    expect(TabsItem).to.exist;
  });

  xit("should name attr.", () => {
    const wrapper = mount(TabsItem, {
      propsData: {
        name: "xxx"
      }
    });
    expect(wrapper.attributes('data-name')).to.eq('xxx');
  });

  xit("should disabled attr.", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount();
    expect(vm.$el.classList.contains("disabled")).to.be.true;
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.not.been.called;
  });
});
