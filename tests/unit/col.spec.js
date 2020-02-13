import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Col from "@/components/col/col";


describe("[Col]", () => {
  it("create col component.", function() {
    expect(Col).to.be.ok;
  });
  it("set span attribute.", () => {
    const wrapper = mount(Col, {
      propsData: {
        span: "12"
      }
    });
    expect(wrapper.classes()).to.includes('col-12');
  });
  it("set offset attribute.", () => {
    const wrapper = mount(Col, {
      propsData: {
        offset: "12"
      }
    });
    expect(wrapper.classes()).to.includes('offset-12');
  });
  describe("set xs/sm/md/lg/xl/xxl attribute.", function() {
    it("accept number value.", function() {
      ["xs", "sm", "md", "lg", "xl", "xxl"].forEach(type => {
        const wrapper = mount(Col, {
          propsData: {
            [type]: 24
          }
        });
        expect(wrapper.classes()).to.includes(`col-${type}-24`);
        expect(wrapper.classes()).to.includes(`offset-${type}-0`);
      });
    });
    it("accept string value.", function() {
      ["xs", "sm", "md", "lg", "xl", "xxl"].forEach(type => {
        const wrapper = mount(Col, {
          propsData: {
            [type]: "24"
          }
        });
        expect(wrapper.classes()).to.includes(`col-${type}-24`);
        expect(wrapper.classes()).to.includes(`offset-${type}-0`);
      });
    });
    it("accept object value.", function() {
      ["xs", "sm", "md", "lg", "xl", "xxl"].forEach(type => {
        const wrapper = mount(Col, {
          propsData: {
            [type]: { span: 12, offset: 12 }
          }
        });
        expect(wrapper.classes()).to.includes(`col-${type}-12`);
        expect(wrapper.classes()).to.includes(`offset-${type}-12`);
      });
    });
  });
});
