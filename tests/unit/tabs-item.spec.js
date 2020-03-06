import chai, { expect } from "chai";
import sinon from "sinon"
import { mount } from "@vue/test-utils";
import TabsItem from "@/components/tabs-item/main";
import sinonChai from "sinon-chai"

chai.use(sinonChai);

describe("[TabsItem]", () => {
  it("create tabs-item component.", () => {
    expect(TabsItem).to.exist;
  });

  it("set name attribute.", () => {
    const wrapper = mount(TabsItem, {
      attachToDocument: true,
      provide: {
        eventBus: null
      },
      propsData: {
        name: "xxx",
      }
    });
    expect(wrapper.attributes('data-name')).to.eq('xxx');
  });

  it("set disabled attribute.", () => {
    const callback = sinon.fake();
    const wrapper = mount(TabsItem, {
      attachToDocument: true,
      provide: {
        eventBus: null
      },
      propsData: {
        name: 'xxx',
        disabled: true,
      }
    });
    expect(wrapper.classes()).to.include('disabled')
    wrapper.vm.$on("click", callback);
    wrapper.trigger('click')
    expect(callback).to.have.not.been.called;
  });

  it("test click event.", () => {
    const callback = sinon.fake();
    const wrapper = mount(TabsItem, {
      attachToDocument: true,
      provide: {
        eventBus: null
      },
      propsData: {
        name: 'xxx',
      }
    });
    wrapper.vm.$on("click", callback);
    wrapper.trigger('click')
    expect(callback).to.have.been.called;
  });
});
