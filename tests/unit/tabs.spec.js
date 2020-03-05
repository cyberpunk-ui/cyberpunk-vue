import Vue from "vue";
import { expect } from "chai";
import { mount } from "@vue/test-utils"
import Tabs from "@/components/tabs/main";
import CTabsHead from "@/components/tabs-head";
import CTabsBody from "@/components/tabs-body";
import CTabsItem from "@/components/tabs-item";
import CTabsPane from "@/components/tabs-pane";

Vue.use(CTabsHead);
Vue.use(CTabsBody);
Vue.use(CTabsItem);
Vue.use(CTabsPane);

describe("[Tabs]", () => {
  it("create tabs component.", () => {
    expect(Tabs).to.exist;
  });

  it("set selected attribute.", (done) => {
    const wrapper = mount(Tabs, {
      propsData: {
        selected: "tabs3"
      },
      slots: {
        default: `
          <c-tabs-head>
            <c-tabs-item name="tabs1">Tab1</c-tabs-item>
            <c-tabs-item name="tabs2">Tab2</c-tabs-item>
            <c-tabs-item name="tabs3">Tab3</c-tabs-item>
          </c-tabs-head>
          <c-tabs-body>
            <c-tabs-pane name="tabs1">tab1</c-tabs-pane>
            <c-tabs-pane name="tabs2">tab2</c-tabs-pane>
            <c-tabs-pane name="tabs3">tab3</c-tabs-pane>
          </c-tabs-body>
        `
      },
    })
    setTimeout(()=> {
      const selected = wrapper.find('.c-tabs-item[data-name="tabs3"]')
      expect(selected.classes()).to.include('active')
      done()
    })
  });
});
