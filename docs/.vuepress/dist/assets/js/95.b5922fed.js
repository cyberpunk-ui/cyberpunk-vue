(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{607:function(e,t,a){"use strict";a.r(t);a(332),a(42),a(301);var n=a(475),o=a(479),s=a(272),c=a(261),l=a(271),d=[{id:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{id:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{id:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{id:"4",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"},{id:"5",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"},{id:"6",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"},{id:"7",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"},{id:"8",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"},{id:"9",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"},{id:"10",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"}],i={name:"Demo",mixins:[l.a],components:{CTable:n.a,CTableColumn:o.a,CButton:s.a,CIcon:c.a},data:function(){return{selectedItems:[],orderBy:{age:"desc"},tableDataSource:JSON.parse(JSON.stringify(d)),tableDataSource2:JSON.parse(JSON.stringify(d)),tableDataSource3:JSON.parse(JSON.stringify(d)),tableDataSource4:JSON.parse(JSON.stringify(d)),tableDataSource5:JSON.parse(JSON.stringify(d)),currentPage:1,total:1101,pageSize:10,tableLoading:!1,hideOnSinglePage:!1,codeStr:'\n        <c-table\n          bordered\n          :selectedItems="false"\n          :dataSource="tableDataSource"\n        >\n          <c-table-column text="Name" field="name" ></c-table-column>\n          <c-table-column text="Age" field="age"></c-table-column>\n          <c-table-column text="Address" field="address"></c-table-column>\n          <c-table-column text="Options" field="options" :width="150">\n            <template  slot-scope="props">\n              <c-button>{{props.name}}Edit</c-button>\n              <c-button>{{props.name}}Delete</c-button>\n            </template>\n          </c-table-column>\n        </c-table>\n      ',codeStr2:'\n        <c-table\n          stripe\n          bordered\n          :selectedItems="false"\n          :dataSource="tableDataSource2"\n        >\n          <c-table-column text="Name" field="name" ></c-table-column>\n          <c-table-column text="Age" field="age"></c-table-column>\n          <c-table-column text="Address" field="address"></c-table-column>\n          <c-table-column text="Options" field="options" :width="150">\n            <template  slot-scope="props">\n              <c-button>{{props.name}}Edit</c-button>\n              <c-button>{{props.name}}Delete</c-button>\n            </template>\n          </c-table-column>\n        </c-table>\n      ',codeStr3:'\n        <c-table\n          bordered\n          :selectedItems.sync="selectedItems"\n          :dataSource="tableDataSource3"\n        >\n          <c-table-column text="Name" field="name" ></c-table-column>\n          <c-table-column text="Age" field="age"></c-table-column>\n          <c-table-column text="Address" field="address"></c-table-column>\n          <c-table-column text="Options" field="options" :width="150">\n            <template  slot-scope="props">\n              <c-button>{{props.name}}Edit</c-button>\n              <c-button>{{props.name}}Delete</c-button>\n            </template>\n          </c-table-column>\n        </c-table>\n      ',codeStr4:'\n        <c-table\n          bordered\n          :dataSource="tableDataSource4"\n          :selected-items="false"\n          :order-by.sync="orderBy"\n          :loading="tableLoading"\n          @update:orderBy="onOrderChange"\n        >\n          <c-table-column text="Name" field="name" ></c-table-column>\n          <c-table-column text="Age" field="age"></c-table-column>\n          <c-table-column text="Address" field="address"></c-table-column>\n          <c-table-column text="Options" field="options" :width="150">\n            <template  slot-scope="props">\n              <c-button>{{props.name}}Edit</c-button>\n              <c-button>{{props.name}}Delete</c-button>\n            </template>\n          </c-table-column>\n        </c-table>\n      ',codeStr5:'\n        <c-table\n          bordered\n          :dataSource="tableDataSource5"\n          :selected-items="false"\n          expend-key="description"\n        >\n          <c-table-column text="Name" field="name" ></c-table-column>\n          <c-table-column text="Age" field="age"></c-table-column>\n          <c-table-column text="Address" field="address"></c-table-column>\n          <c-table-column text="Options" field="options" :width="150">\n            <template  slot-scope="props">\n              <c-button>{{props.name}}Edit</c-button>\n              <c-button>{{props.name}}Delete</c-button>\n            </template>\n          </c-table-column>\n        </c-table>\n      '}},methods:{onOrderChange:function(e){var t=this,a=Object.keys(e)[0];this.tableLoading=!0,setTimeout((function(){t.tableLoading=!1,"desc"===e[a]?t.tableDataSource4.sort((function(e,t){return e[a]-t[a]})):t.tableDataSource4.sort((function(e,t){return t[a]-e[a]}))}),500)}}},r=a(2),m=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo"},[a("h2",[e._v("Basic usage")]),e._v(" "),a("p",[e._v("The basic table shows usage.")]),e._v(" "),a("div",{staticClass:"component-wrapper"},[a("div",{staticClass:"component-wrapper-demo"},[a("c-table",{attrs:{bordered:"",selectedItems:!1,dataSource:e.tableDataSource}},[a("c-table-column",{attrs:{text:"Name",field:"name"}}),e._v(" "),a("c-table-column",{attrs:{text:"Age",field:"age"}}),e._v(" "),a("c-table-column",{attrs:{text:"Address",field:"address"}}),e._v(" "),a("c-table-column",{attrs:{text:"Options",field:"options",width:150},scopedSlots:e._u([{key:"default",fn:function(t){return[a("c-button",[e._v(e._s(t.name)+"Edit")]),e._v(" "),a("c-button",[e._v(e._s(t.name)+"Delete")])]}}])})],1)],1),e._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[a("div",{staticClass:"code-content-height"},[a("pre",[a("code",{staticClass:"html"},[e._v(e._s(e.parseCode(e.codeStr)))])])])]),e._v(" "),a("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(0)}}},[a("c-icon",{staticClass:"icon-down",attrs:{type:e.isShowCode(0,"icon")}}),e._v(" "),a("span",{staticClass:"lock-code-word"},[e._v(e._s(e.isShowCode(0,"text")))])],1)]),e._v(" "),a("h2",[e._v("Table with zebra pattern")]),e._v(" "),a("p",[e._v("Using tables with zebra patterns makes it easier to distinguish data in different rows.")]),e._v(" "),a("div",{staticClass:"component-wrapper"},[a("div",{staticClass:"component-wrapper-demo"},[a("c-table",{attrs:{stripe:"",bordered:"",selectedItems:!1,dataSource:e.tableDataSource2}},[a("c-table-column",{attrs:{text:"Name",field:"name"}}),e._v(" "),a("c-table-column",{attrs:{text:"Age",field:"age"}}),e._v(" "),a("c-table-column",{attrs:{text:"Address",field:"address"}}),e._v(" "),a("c-table-column",{attrs:{text:"Options",field:"options",width:150},scopedSlots:e._u([{key:"default",fn:function(t){return[a("c-button",[e._v(e._s(t.name)+"Edit")]),e._v(" "),a("c-button",[e._v(e._s(t.name)+"Delete")])]}}])})],1)],1),e._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[a("div",{staticClass:"code-content-height"},[a("pre",[a("code",{staticClass:"html"},[e._v(e._s(e.parseCode(e.codeStr2)))])])])]),e._v(" "),a("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(1)}}},[a("c-icon",{staticClass:"icon-down",attrs:{type:e.isShowCode(1,"icon")}}),e._v(" "),a("span",{staticClass:"lock-code-word"},[e._v(e._s(e.isShowCode(1,"text")))])],1)]),e._v(" "),a("h2",[e._v("Multiple choice")]),e._v(" "),a("p",[e._v("Use Checkbox when selecting multiple lines of data.")]),e._v(" "),a("div",{staticClass:"component-wrapper"},[a("div",{staticClass:"component-wrapper-demo"},[a("c-table",{attrs:{bordered:"",selectedItems:e.selectedItems,dataSource:e.tableDataSource3},on:{"update:selectedItems":function(t){e.selectedItems=t},"update:selected-items":function(t){e.selectedItems=t}}},[a("c-table-column",{attrs:{text:"Name",field:"name"}}),e._v(" "),a("c-table-column",{attrs:{text:"Age",field:"age"}}),e._v(" "),a("c-table-column",{attrs:{text:"Address",field:"address"}}),e._v(" "),a("c-table-column",{attrs:{text:"Options",field:"options",width:150},scopedSlots:e._u([{key:"default",fn:function(t){return[a("c-button",[e._v(e._s(t.name)+"Edit")]),e._v(" "),a("c-button",[e._v(e._s(t.name)+"Delete")])]}}])})],1)],1),e._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[a("div",{staticClass:"code-content-height"},[a("pre",[a("code",{staticClass:"html"},[e._v(e._s(e.parseCode(e.codeStr3)))])])])]),e._v(" "),a("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(2)}}},[a("c-icon",{staticClass:"icon-down",attrs:{type:e.isShowCode(2,"icon")}}),e._v(" "),a("span",{staticClass:"lock-code-word"},[e._v(e._s(e.isShowCode(2,"text")))])],1)]),e._v(" "),a("h2",[e._v("Sort")]),e._v(" "),a("p",[e._v("Sort the table to quickly find or compare data.")]),e._v(" "),a("div",{staticClass:"component-wrapper"},[a("div",{staticClass:"component-wrapper-demo"},[a("c-table",{attrs:{bordered:"",dataSource:e.tableDataSource4,"selected-items":!1,"order-by":e.orderBy,loading:e.tableLoading},on:{"update:orderBy":[function(t){e.orderBy=t},e.onOrderChange],"update:order-by":function(t){e.orderBy=t}}},[a("c-table-column",{attrs:{text:"Name",field:"name"}}),e._v(" "),a("c-table-column",{attrs:{text:"Age",field:"age"}}),e._v(" "),a("c-table-column",{attrs:{text:"Address",field:"address"}}),e._v(" "),a("c-table-column",{attrs:{text:"Options",field:"options",width:150},scopedSlots:e._u([{key:"default",fn:function(t){return[a("c-button",[e._v(e._s(t.name)+"Edit")]),e._v(" "),a("c-button",[e._v(e._s(t.name)+"Delete")])]}}])})],1)],1),e._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[a("div",{staticClass:"code-content-height"},[a("pre",[a("code",{staticClass:"html"},[e._v(e._s(e.parseCode(e.codeStr4)))])])])]),e._v(" "),a("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(3)}}},[a("c-icon",{staticClass:"icon-down",attrs:{type:e.isShowCode(3,"icon")}}),e._v(" "),a("span",{staticClass:"lock-code-word"},[e._v(e._s(e.isShowCode(3,"text")))])],1)]),e._v(" "),a("h2",[e._v("Expend")]),e._v(" "),a("p",[e._v("When there are too many rows and you do n’t want to display the horizontal scroll bar, you can use Table to expand the row function.")]),e._v(" "),a("div",{staticClass:"component-wrapper"},[a("div",{staticClass:"component-wrapper-demo"},[a("c-table",{attrs:{bordered:"",dataSource:e.tableDataSource4,"selected-items":!1,"expend-key":"description"}},[a("c-table-column",{attrs:{text:"Name",field:"name"}}),e._v(" "),a("c-table-column",{attrs:{text:"Age",field:"age"}}),e._v(" "),a("c-table-column",{attrs:{text:"Address",field:"address"}}),e._v(" "),a("c-table-column",{attrs:{text:"Options",field:"options",width:150},scopedSlots:e._u([{key:"default",fn:function(t){return[a("c-button",[e._v(e._s(t.name)+"Edit")]),e._v(" "),a("c-button",[e._v(e._s(t.name)+"Delete")])]}}])})],1)],1),e._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[a("div",{staticClass:"code-content-height"},[a("pre",[a("code",{staticClass:"html"},[e._v(e._s(e.parseCode(e.codeStr5)))])])])]),e._v(" "),a("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(4)}}},[a("c-icon",{staticClass:"icon-down",attrs:{type:e.isShowCode(4,"icon")}}),e._v(" "),a("span",{staticClass:"lock-code-word"},[e._v(e._s(e.isShowCode(4,"text")))])],1)])])}),[],!1,null,"86645b8a",null);t.default=m.exports}}]);