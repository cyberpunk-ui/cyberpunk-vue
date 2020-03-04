<template>
  <div>
    <section>
      <h4>Upload 上传</h4>
      <div class="block upload">
        <c-upload
          multiple
          name="file"
          method="POST"
          accept="image/*"
          action="https://file-upload-simple-server.herokuapp.com/upload"
          :file-list.sync="uploadFileList"
          @onchange="onUploadChange"
        >
          <c-button icon="upload">上传文件</c-button>
          <div slot="tips">请上传不大于300k的jpg或png文件</div>
        </c-upload>
<!--        <div>-->
<!--          <img :src="uploadPreviewUrl">-->
<!--        </div>-->
      </div>
    </section>
<!--    <section>-->
<!--      <h4>Table 表格</h4>-->
<!--      <div class="block table">-->
<!--        <c-table-->
<!--          bordered-->
<!--          :columns="columns"-->
<!--          :dataSource="tableDataSource"-->
<!--          :selected-items.sync="selectedTable"-->
<!--          :order-by.sync="orderBy"-->
<!--          :loading="tableLoading"-->
<!--          expend-key="description"-->
<!--          @update:orderBy="onOrderChange"-->
<!--        ></c-table>-->
<!--        <div class="pagination">-->
<!--          <c-pagination-->
<!--            :current.sync="currentPage"-->
<!--            :total="total"-->
<!--            :page-size="pageSize"-->
<!--            :hide-on-single-page="hideOnSinglePage"-->
<!--            @onchange="onPaginationChange"-->
<!--            ></c-pagination>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Pagination 分页</h4>-->
<!--      <div class="block pagination">-->
<!--        <c-pagination-->
<!--          :current.sync="currentPage"-->
<!--          :total="total"-->
<!--          :page-size="pageSize"-->
<!--          :hide-on-single-page="hideOnSinglePage"-->
<!--          @change="onPaginationChange"-->
<!--        ></c-pagination>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Menu 导航</h4>-->
<!--      <div class="block menu">-->
<!--        <c-menu-->
<!--          :selected.sync="selectedMenu"-->
<!--          :multiple="false"-->
<!--        >-->
<!--          <c-menu-item name="home">Home</c-menu-item>-->
<!--          <c-sub-menu name="about">-->
<!--            <template slot="title">About</template>-->
<!--            <c-menu-item name="about1">About1</c-menu-item>-->
<!--            <c-menu-item name="about2">About1</c-menu-item>-->
<!--            <c-sub-menu name="contact">-->
<!--              <template slot="title">Contact</template>-->
<!--              <c-menu-item name="qq">QQ</c-menu-item>-->
<!--              <c-menu-item name="phone">Phone</c-menu-item>-->
<!--              <c-menu-item name="wechat">WeChat</c-menu-item>-->
<!--            </c-sub-menu>-->
<!--          </c-sub-menu>-->
<!--          <c-menu-item name="hire">Hire</c-menu-item>-->
<!--          <c-menu-item name="google"><a href="https://google.com" target="_blank">Google</a></c-menu-item>-->
<!--        </c-menu>-->
<!--        <c-menu-->
<!--          :selected.sync="selectedMenu2"-->
<!--          :multiple="false"-->
<!--          direction="vertical"-->
<!--          style="width: 265px;margin-top: 20px;"-->
<!--        >-->
<!--          <c-menu-item name="home">Home</c-menu-item>-->
<!--          <c-sub-menu name="about">-->
<!--            <template slot="title">About</template>-->
<!--            <c-menu-item name="about1">About1</c-menu-item>-->
<!--            <c-menu-item name="about2">About1</c-menu-item>-->
<!--            <c-sub-menu name="contact">-->
<!--              <template slot="title">Contact</template>-->
<!--              <c-menu-item name="qq">QQ</c-menu-item>-->
<!--              <c-menu-item name="phone">Phone</c-menu-item>-->
<!--              <c-menu-item name="wechat">WeChat</c-menu-item>-->
<!--            </c-sub-menu>-->
<!--          </c-sub-menu>-->
<!--          <c-menu-item name="hire">Hire</c-menu-item>-->
<!--          <c-menu-item name="google"><a href="https://google.com" target="_blank">Google</a></c-menu-item>-->
<!--        </c-menu>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Carousel 轮播</h4>-->
<!--      <div class="block carousel">-->
<!--        <c-carousel :selected.sync="selectedCarousel" autoplay >-->
<!--          <c-carousel-item :name="index" v-for="index in 6" :key="index">-->
<!--            <div class="carousel-item">-->
<!--              <h1>{{index}}</h1>-->
<!--            </div>-->
<!--          </c-carousel-item>-->
<!--        </c-carousel>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Cascader 级联选择</h4>-->
<!--      <div class="block cascader">-->
<!--        <c-cascader-->
<!--          :source.sync="areaSource"-->
<!--          :selected.sync="selectedCascader"-->
<!--          :load-data="loadCascaderData"-->
<!--        ></c-cascader>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Collapse 折叠面板</h4>-->
<!--      <div class="block collapse">-->
<!--        <c-collapse :accordion="isAccordion" :selected.sync="selectedCollapse">-->
<!--          <c-collapse-item title="标题1" name="1">-->
<!--            面板内容1-->
<!--          </c-collapse-item>-->
<!--          <c-collapse-item title="标题2" name="2">-->
<!--            面板内容2-->
<!--          </c-collapse-item>-->
<!--          <c-collapse-item title="标题3" name="3">-->
<!--            面板内容3-->
<!--          </c-collapse-item>-->
<!--        </c-collapse>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Popover 弹出框</h4>-->
<!--      <div class="block">-->
<!--        <c-popover>-->
<!--          <template slot="content">-->
<!--            <div>popover内容</div>-->
<!--          </template>-->
<!--          <c-button>向上弹出</c-button>-->
<!--        </c-popover>-->
<!--        <c-popover position="bottom">-->
<!--          <template slot="content">-->
<!--            <div>popover内容</div>-->
<!--          </template>-->
<!--          <c-button>向下弹出</c-button>-->
<!--        </c-popover>-->
<!--        <c-popover position="left">-->
<!--          <template slot="content">-->
<!--            <div>popover内容</div>-->
<!--          </template>-->
<!--          <c-button>向左弹出</c-button>-->
<!--        </c-popover>-->
<!--        <c-popover position="right">-->
<!--          <template slot="content">-->
<!--            <div>popover内容</div>-->
<!--          </template>-->
<!--          <c-button>向右弹出</c-button>-->
<!--        </c-popover>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Tabs 标签页</h4>-->
<!--      <div class="block tabs">-->
<!--        <c-tabs :selected.sync="selectedTab" @update:selected="onTabChange">-->
<!--          <c-tabs-head>-->
<!--            <template slot="actions">-->
<!--              <c-button icon="set">设置</c-button>-->
<!--            </template>-->
<!--            <c-tabs-item name="tabs1">-->
<!--              <c-icon type="editor"></c-icon>Tab1-->
<!--            </c-tabs-item>-->
<!--            <c-tabs-item name="tabs2" disabled>-->
<!--              <c-icon type="data"></c-icon>Tab2-->
<!--            </c-tabs-item>-->
<!--            <c-tabs-item name="tabs3">-->
<!--              <c-icon type="history"></c-icon>Tab3-->
<!--            </c-tabs-item>-->
<!--          </c-tabs-head>-->
<!--          <c-tabs-body>-->
<!--            <c-tabs-pane name="tabs1">tab1</c-tabs-pane>-->
<!--            <c-tabs-pane name="tabs2">tab2</c-tabs-pane>-->
<!--            <c-tabs-pane name="tabs3">tab3</c-tabs-pane>-->
<!--          </c-tabs-body>-->
<!--        </c-tabs>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Message 全局提示</h4>-->
<!--      <div class="block">-->
<!--        <c-button icon="rising1" @click="onMessage('top')">顶部提示</c-button>-->
<!--        <c-button icon="reduce" @click="onMessage('center')">居中提示</c-button>-->
<!--        <c-button icon="falling" @click="onMessage('bottom')"-->
<!--          >底部提示</c-button-->
<!--        >-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Layout 布局</h4>-->
<!--      <div class="block layout">-->
<!--        <c-layout>-->
<!--          <c-header height="40">header</c-header>-->
<!--          <c-main>main</c-main>-->
<!--          <c-footer height="40">footer</c-footer>-->
<!--        </c-layout>-->
<!--      </div>-->
<!--      <div class="block layout">-->
<!--        <c-layout>-->
<!--          <c-aside>aside</c-aside>-->
<!--          <c-layout>-->
<!--            <c-header height="40">header</c-header>-->
<!--            <c-main>main</c-main>-->
<!--            <c-footer height="40">footer</c-footer>-->
<!--          </c-layout>-->
<!--        </c-layout>-->
<!--      </div>-->
<!--      <div class="block layout">-->
<!--        <c-layout>-->
<!--          <c-header height="40">header</c-header>-->
<!--          <c-layout>-->
<!--            <c-aside>aside</c-aside>-->
<!--            <c-main>main</c-main>-->
<!--          </c-layout>-->
<!--          <c-footer height="40">footer</c-footer>-->
<!--        </c-layout>-->
<!--      </div>-->
<!--      <div class="block layout">-->
<!--        <c-layout>-->
<!--          <c-header height="40">header</c-header>-->
<!--          <c-layout>-->
<!--            <c-aside>aside</c-aside>-->
<!--            <c-layout>-->
<!--              <c-main>main</c-main>-->
<!--              <c-footer height="40">footer</c-footer>-->
<!--            </c-layout>-->
<!--          </c-layout>-->
<!--        </c-layout>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Grid 栅格</h4>-->
<!--      <div class="block grid">-->
<!--        <c-row gutter="20">-->
<!--          <c-col><div class="grid-content bg-color"></div></c-col>-->
<!--        </c-row>-->
<!--      </div>-->
<!--      <div class="block grid">-->
<!--        <c-row gutter="20">-->
<!--          <c-col span="8"-->
<!--            ><div class="grid-content bg-color-light"></div-->
<!--          ></c-col>-->
<!--          <c-col span="8"><div class="grid-content bg-color"></div></c-col>-->
<!--          <c-col span="8"-->
<!--            ><div class="grid-content bg-color-light"></div-->
<!--          ></c-col>-->
<!--        </c-row>-->
<!--      </div>-->
<!--      <div class="block grid">-->
<!--        <c-row gutter="20">-->
<!--          <c-col span="10"-->
<!--            ><div class="grid-content bg-color-light"></div-->
<!--          ></c-col>-->
<!--          <c-col span="2" offset="1"-->
<!--            ><div class="grid-content bg-color"></div-->
<!--          ></c-col>-->
<!--          <c-col span="10" offset="1"-->
<!--            ><div class="grid-content bg-color-light"></div-->
<!--          ></c-col>-->
<!--        </c-row>-->
<!--      </div>-->
<!--      <div class="block grid">-->
<!--        <c-row gutter="20" align="right">-->
<!--          <c-col span="12"-->
<!--            ><div class="grid-content bg-color-light"></div-->
<!--          ></c-col>-->
<!--          <c-col span="4"><div class="grid-content bg-color"></div></c-col>-->
<!--        </c-row>-->
<!--      </div>-->
<!--      <div class="block grid">-->
<!--        <c-row gutter="20">-->
<!--          <c-col-->
<!--            :xs="{ span: 24 }"-->
<!--            sm="12"-->
<!--            :md="4"-->
<!--            :lg="{ span: 2, offset: '1' }"-->
<!--            :xl="6"-->
<!--            :xxl="8"-->
<!--            ><div class="grid-content bg-color-light"></div-->
<!--          ></c-col>-->
<!--          <c-col-->
<!--            :xs="{ span: 24 }"-->
<!--            sm="12"-->
<!--            :md="8"-->
<!--            :lg="{ span: 8, offset: '1' }"-->
<!--            :xl="6"-->
<!--            :xxl="4"-->
<!--            ><div class="grid-content bg-color"></div-->
<!--          ></c-col>-->
<!--          <c-col-->
<!--            :xs="{ span: 24 }"-->
<!--            sm="12"-->
<!--            :md="8"-->
<!--            :lg="{ span: 8, offset: '1' }"-->
<!--            :xl="6"-->
<!--            :xxl="4"-->
<!--            ><div class="grid-content bg-color-light"></div-->
<!--          ></c-col>-->
<!--          <c-col-->
<!--            :xs="{ span: 24 }"-->
<!--            sm="12"-->
<!--            :md="4"-->
<!--            :lg="{ span: 2, offset: '1' }"-->
<!--            :xl="6"-->
<!--            :xxl="8"-->
<!--            ><div class="grid-content bg-color"></div-->
<!--          ></c-col>-->
<!--        </c-row>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Input 文本框</h4>-->
<!--      <div class="block">-->
<!--        <c-input placeholder="Large尺寸" size="large"></c-input>-->
<!--        <c-input placeholder="默认尺寸"></c-input>-->
<!--        <c-input placeholder="Small尺寸" size="small"></c-input>-->
<!--        <c-input placeholder="Mini尺寸" size="mini"></c-input>-->
<!--      </div>-->
<!--      <div class="block">-->
<!--        <c-input placeholder="请输入禁用内容" disabled></c-input>-->
<!--        <c-input-->
<!--          placeholder="请输入内容"-->
<!--          disabled-->
<!--          value="禁用状态内容"-->
<!--        ></c-input>-->
<!--        <c-input placeholder="请输入只读内容" readonly></c-input>-->
<!--        <c-input placeholder="请输入内容" readonly value="内容只读"></c-input>-->
<!--      </div>-->
<!--      <div class="block">-->
<!--        <c-input placeholder="Input事件" @input="onInput"></c-input>-->
<!--        <c-input placeholder="Change事件" @change="onInputChange"></c-input>-->
<!--        <c-input placeholder="Focus事件" @focus="onFocus"></c-input>-->
<!--        <c-input placeholder="Blur事件" @focus="onBlur"></c-input>-->
<!--      </div>-->
<!--      <div class="block">-->
<!--        <c-input placeholder="v-model属性" v-model="vModelValue"></c-input>-->
<!--        <span style="color: white">{{ vModelValue }}</span>-->
<!--      </div>-->
<!--    </section>-->
<!--    <section>-->
<!--      <h4>Button 按钮</h4>-->
<!--      <c-button>基本按钮</c-button>-->
<!--      <c-button icon="leftarrow">图标按钮</c-button>-->
<!--      <c-button icon="Rightarrow" icon-position="right">右侧图标</c-button>-->
<!--      <c-button icon="set" loading>加载动画</c-button>-->
<!--      <c-button icon="set" loading icon-position="right">右侧加载</c-button>-->
<!--      <c-button icon="success" @click="onClick">点击事件</c-button>-->
<!--      <c-button-group>-->
<!--        <c-button>首页</c-button>-->
<!--        <c-button>上一页</c-button>-->
<!--        <c-button>下一页</c-button>-->
<!--        <c-button>尾页</c-button>-->
<!--      </c-button-group>-->
<!--    </section>-->
  </div>
</template>

<script>
  import db from '../tests/fixtures/area-db';

  function ajax(parent_id = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        let result = db.filter(item => item.parent_id === parent_id);
        result.forEach(node => {
          node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
        });
        resolve(result)
      }, parent_id && 2000)
    })
  }

  export default {
    name: "demo",
    data() {
      return {
        vModelValue: "",
        uploadPreviewUrl: "",
        selectedTab: "tabs1",
        selectedCollapse: ["1", "2"],
        selectedCarousel: '1',
        selectedMenu: ['home'],
        selectedMenu2: ['home'],
        isAccordion: true,
        selectedCascader: [],
        uploadFileList: [],
        rowSelection: [],
        selectedTable: [],
        orderBy: {age: 'desc'},
        columns: [
          {title: 'Name', field: 'name'},
          {title: 'Age', field: 'age'},
          {title: 'Address', field: 'address'},
        ],
        tableDataSource: [
          {id: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park',description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'},
          {id: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park',description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'},
          {id: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park',description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'},
          {id: '4', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
          {id: '5', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
          {id: '6', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
          // {id: '7', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
          // {id: '8', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
          // {id: '9', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
          // {id: '10', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
          // {id: '11', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
          // {id: '12', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
        ],
        currentPage: 1,
        total: 1101,
        pageSize: 10,
        tableLoading: false,
        hideOnSinglePage: false,
        areaSource: [
          {
            name: "浙江",
            children: [
              {
                name: "杭州",
                children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
              },
              {
                name: "嘉兴",
                children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
              }
            ]
          },
          {
            name: "福建",
            children: [
              {
                name: "福州",
                children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
              }
            ]
          },
          {
            name: "安徽",
            children: [
              {
                name: "合肥",
                children: [
                  {
                    name: "瑶海"
                  },
                  {
                    name: "庐阳"
                  }
                ]
              }
            ]
          }
        ],
      };
    },
    created() {
      ajax().then((result)=>{
        this.areaSource = result
      })
    },
    mounted() {
      setTimeout(() => {
        this.vModelValue += "测试v-model";
      }, 1000);
    },
    methods: {
      onClick: () => {
        alert("触发点击事件");
      },
      onInput: e => {
        console.log(e);
      },
      onInputChange: e => {
        console.log(e);
      },
      onFocus: e => {
        console.log(e);
      },
      onBlur: e => {
        console.log(e);
      },
      onTabChange: () => {
        // console.log('123',selected)
      },
      onPaginationChange: (page, pageSize) => {
        console.log('page change: ', page, pageSize)
      },
      onMessage(position) {
        this.$message({
          message: "保存成功",
          position,
          autoClose: false,
          closeButton: {
            callback: message => {
              console.log(message);
            }
          }
        });
      },
      // loadCascaderData(node, updateSource){
      //   const { id } = node;
      //   ajax(id).then((result)=>{
      //     updateSource(result);
      //   })
      // },
      onOrderChange(value){
        const field = Object.keys(value)[0]
        this.tableLoading = true
        setTimeout(() => {
          this.tableLoading = false
          if (value[field] === 'desc') {
            this.tableDataSource.sort((a, b) => a[field]-b[field])
          } else {
            this.tableDataSource.sort((a, b) => b[field]-a[field])
          }
        }, 500)
      },
      onUploadChange(response){
        const { key } = JSON.parse(response)
        this.uploadPreviewUrl = `https://file-upload-simple-server.herokuapp.com/preview/${key}`
      },
    }
  };
</script>

<style scoped>
section {
  padding: 0 20px 0;
}
section h4 {
  color: white;
  margin: 20px 0;
  border-bottom: 1px solid white;
  padding: 12px 0;
  text-shadow: 0px 0px 8px #fff, 0px 0px 42px #f72, 0px 0px 72px #f84,
    0px 0px 150px #fa5;
}
section .block {
  margin-bottom: 22px;
}
section .grid {
  background: rgba(255, 255, 255, 0.2);
  min-height: 50px;
}
section .grid .grid-content {
  width: 100%;
  text-align: center;
  height: 50px;
  color: white;
}
section .grid .grid-content.bg-color {
  background-color: #99a9bf;
}
section .grid .grid-content.bg-color-light {
  background-color: #d3dce6;
}
section .layout header,
footer {
  background-color: #99a9bf;
  line-height: 40px;
  text-align: center;
}
section .layout main,
aside {
  background-color: #d3dce6;
  line-height: 70px;
  text-align: center;
}
section .layout aside {
  background-color: #80889c;
}
section .tabs {
  color: white;
}
section .collapse {
  color: white;
}
section .carousel .carousel-item {
  color: white;
  height: 300px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
}
section .table .pagination {
  display: flex;
  justify-content: flex-end;
  margin: 12px 0;
}
section .upload {
  width: 300px;
}
</style>
