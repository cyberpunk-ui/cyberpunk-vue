import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Row from "@/components/row/row";
import Col from "@/components/col/col";

describe("[Row]", () => {
  it("create row component.", function() {
    expect(Row).to.be.ok;
  });
  xit("set gutter attribute.", () => {
    Vue.component("c-row", Row);
    Vue.component("c-col", Col);
    const div = document.createElement("div");
    document.body.append(div);
    div.innerHTML = `
        <c-row gutter="20">
          <c-col span="12"></c-col>
          <c-col span="12"></c-col>
        </c-row>
      `;
    const vm = new Vue({
      el: div
    });
    setTimeout(() => {
      const row = vm.$el.querySelector(".c-row");
      expect(getComputedStyle(row).marginLeft).to.eq("-10px");
      expect(getComputedStyle(row).marginRight).to.eq("-10px");
      const col = vm.$el.querySelectorAll(".c-col");
      expect(getComputedStyle(col[0]).paddingLeft).to.eq("10px");
      expect(getComputedStyle(col[0]).paddingRight).to.eq("10px");
    });
  });
  xit("set align attribute.", () => {
    const div = document.createElement("div");
    document.body.append(div);
    const rowConstructor = Vue.extend(Row);
    const row = new rowConstructor({
      propsData: {
        align: "right"
      }
    }).$mount(div);

    const rowElement = row.$el;
    expect(getComputedStyle(rowElement).justifyContent).to.equal("flex-end");
    div.remove();
    row.$el.remove();
    row.$destroy();
  });
});
