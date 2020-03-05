import Vue from "vue"
import {expect} from "chai"
import { mount } from "@vue/test-utils";
import Row from "@/components/row/row";
import CCol from "@/components/col";

Vue.use(CCol);
const template = `
  <c-col span="12"></c-col>
  <c-col span="12"></c-col>
`

describe("[Row]", () => {
  it("create row component.", function() {
    expect(Row).to.be.ok;
    expect(CCol).to.be.ok;
  });
  it("set gutter attribute.", () => {
    const wrapper = mount(Row, {
      attachToDocument: true,
      slots: {
        default: template,
      },
      propsData: {
        gutter: 20
      }
    })
    const row = wrapper.find(".c-row").element;
    expect(getComputedStyle(row).marginLeft).to.eq("-10px");
    expect(getComputedStyle(row).marginRight).to.eq("-10px");
  });
  it("set align attribute.", () => {
    const wrapper = mount(Row, {
      attachToDocument: true,
      slots: {
        default: template,
      },
      propsData: {
        align: "right"
      }
    })
    const row = wrapper.find(".c-row").element;
    expect(getComputedStyle(row).justifyContent).to.eq("flex-end");
  });
});
