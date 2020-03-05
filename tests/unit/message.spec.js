import chai, { expect } from "chai";
import { mount } from "@vue/test-utils";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Message from "@/components/message/main";
chai.use(sinonChai);

describe("[Message]", () => {
  it("create message component.", () => {
    expect(Message).to.be.ok;
  });

  it("set autoClose attribute.", done => {
    const wrapper = mount(Message, {
      propsData: {
        autoClose: 0.1
      }
    });
    wrapper.vm.$on("close", () => {
      expect(document.body.contains(wrapper.vm.$el)).to.eq(false);
      done();
    });
  });

  it("set position attribute.", () => {
    const wrapper = mount(Message, {
      propsData: {
        position: "center"
      }
    });
    expect(wrapper.classes()).to.includes('position-center');
  });

  it("set closeButton attribute.", () => {
    const callback = sinon.fake();
    const wrapper = mount(Message, {
      propsData: {
        closeButton: {
          text: "关闭",
          callback
        }
      }
    });
    const closeButton = wrapper.vm.$el.querySelector(".close");
    expect(closeButton.textContent.trim()).to.eq("关闭");
    closeButton.click();
    expect(callback).to.have.been.called;
  });

  it("set enableHtml attribute.", () => {
    const wrapper = mount(Message, {
      attachToDocument: true,
      propsData: {
        enableHtml: true
      },
    });
    wrapper.vm.$slots.default = [`<i id="test">hi</i>`]
    wrapper.vm.$mount()
    expect(wrapper.find('#test').exists()).to.be.true;
  });
});
