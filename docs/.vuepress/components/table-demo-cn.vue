<template>
  <div class="demo">
    <h2>基础用法</h2>
    <p>基础的表格展示用法。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-table
          bordered
          :selectedItems="false"
          :dataSource="tableDataSource"
        >
          <c-table-column text="Name" field="name" ></c-table-column>
          <c-table-column text="Age" field="age"></c-table-column>
          <c-table-column text="Address" field="address"></c-table-column>
          <c-table-column text="Options" field="options" :width="150">
            <template  slot-scope="props">
              <c-button>{{props.name}}Edit</c-button>
              <c-button>{{props.name}}Delete</c-button>
            </template>
          </c-table-column>
        </c-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <c-icon class="icon-down" :type="isShowCode(0, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(0, 'text', 'cn')}}</span>
      </div>
    </div>
    <h2>带斑马纹表格</h2>
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-table
          stripe
          bordered
          :selectedItems="false"
          :dataSource="tableDataSource2"
        >
          <c-table-column text="Name" field="name" ></c-table-column>
          <c-table-column text="Age" field="age"></c-table-column>
          <c-table-column text="Address" field="address"></c-table-column>
          <c-table-column text="Options" field="options" :width="150">
            <template  slot-scope="props">
              <c-button>{{props.name}}Edit</c-button>
              <c-button>{{props.name}}Delete</c-button>
            </template>
          </c-table-column>
        </c-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr2) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)">
        <c-icon class="icon-down" :type="isShowCode(1, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(1, 'text', 'cn')}}</span>
      </div>
    </div>
    <h2>多选</h2>
    <p>选择多行数据时使用 Checkbox。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-table
          bordered
          :selectedItems.sync="selectedItems"
          :dataSource="tableDataSource3"
        >
          <c-table-column text="Name" field="name" ></c-table-column>
          <c-table-column text="Age" field="age"></c-table-column>
          <c-table-column text="Address" field="address"></c-table-column>
          <c-table-column text="Options" field="options" :width="150">
            <template  slot-scope="props">
              <c-button>{{props.name}}Edit</c-button>
              <c-button>{{props.name}}Delete</c-button>
            </template>
          </c-table-column>
        </c-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr3) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)">
        <c-icon class="icon-down" :type="isShowCode(2, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(2, 'text', 'cn')}}</span>
      </div>
    </div>
    <h2>排序</h2>
    <p>对表格进行排序，可快速查找或对比数据。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-table
          bordered
          :dataSource="tableDataSource4"
          :selected-items="false"
          :order-by.sync="orderBy"
          :loading="tableLoading"
          @update:orderBy="onOrderChange"
        >
          <c-table-column text="Name" field="name" ></c-table-column>
          <c-table-column text="Age" field="age"></c-table-column>
          <c-table-column text="Address" field="address"></c-table-column>
          <c-table-column text="Options" field="options" :width="150">
            <template  slot-scope="props">
              <c-button>{{props.name}}Edit</c-button>
              <c-button>{{props.name}}Delete</c-button>
            </template>
          </c-table-column>
        </c-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr4) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(3)">
        <c-icon class="icon-down" :type="isShowCode(3, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(3, 'text', 'cn')}}</span>
      </div>
    </div>
    <h2>展开行</h2>
    <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <c-table
          bordered
          :dataSource="tableDataSource5"
          :selected-items="false"
          expend-key="description"
        >
          <c-table-column text="Name" field="name" ></c-table-column>
          <c-table-column text="Age" field="age"></c-table-column>
          <c-table-column text="Address" field="address"></c-table-column>
          <c-table-column text="Options" field="options" :width="150">
            <template  slot-scope="props">
              <c-button>{{props.name}}Edit</c-button>
              <c-button>{{props.name}}Delete</c-button>
            </template>
          </c-table-column>
        </c-table>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr5) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(4)">
        <c-icon class="icon-down" :type="isShowCode(4, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(4, 'text', 'cn')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CTable from '../../../src/components/table/main'
  import CTableColumn from '../../../src/components/table-column/main'
  import CButton from '../../../src/components/button/button'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'
  const data = [
    {id: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park',description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'},
    {id: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park',description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'},
    {id: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park',description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'},
    {id: '4', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
    {id: '5', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
    {id: '6', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
    {id: '7', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
    {id: '8', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
    {id: '9', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
    {id: '10', name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park',},
  ]
  export default {
    name: 'Demo',
    mixins: [mixin],
    components: {
      CTable,
      CTableColumn,
      CButton,
      CIcon
    },
    data() {
      return {
        selectedItems: [],
        orderBy: {age: 'desc'},
        tableDataSource: JSON.parse(JSON.stringify(data)),
        tableDataSource2: JSON.parse(JSON.stringify(data)),
        tableDataSource3: JSON.parse(JSON.stringify(data)),
        tableDataSource4: JSON.parse(JSON.stringify(data)),
        tableDataSource5: JSON.parse(JSON.stringify(data)),
        currentPage: 1,
        total: 1101,
        pageSize: 10,
        tableLoading: false,
        hideOnSinglePage: false,
        codeStr: `
          <c-table
            bordered
            :selectedItems="false"
            :dataSource="tableDataSource"
          >
            <c-table-column text="Name" field="name" ></c-table-column>
            <c-table-column text="Age" field="age"></c-table-column>
            <c-table-column text="Address" field="address"></c-table-column>
            <c-table-column text="Options" field="options" :width="150">
              <template  slot-scope="props">
                <c-button>{{props.name}}Edit</c-button>
                <c-button>{{props.name}}Delete</c-button>
              </template>
            </c-table-column>
          </c-table>
        `,
        codeStr2: `
          <c-table
            stripe
            bordered
            :selectedItems="false"
            :dataSource="tableDataSource2"
          >
            <c-table-column text="Name" field="name" ></c-table-column>
            <c-table-column text="Age" field="age"></c-table-column>
            <c-table-column text="Address" field="address"></c-table-column>
            <c-table-column text="Options" field="options" :width="150">
              <template  slot-scope="props">
                <c-button>{{props.name}}Edit</c-button>
                <c-button>{{props.name}}Delete</c-button>
              </template>
            </c-table-column>
          </c-table>
        `,
        codeStr3: `
          <c-table
            bordered
            :selectedItems.sync="selectedItems"
            :dataSource="tableDataSource3"
          >
            <c-table-column text="Name" field="name" ></c-table-column>
            <c-table-column text="Age" field="age"></c-table-column>
            <c-table-column text="Address" field="address"></c-table-column>
            <c-table-column text="Options" field="options" :width="150">
              <template  slot-scope="props">
                <c-button>{{props.name}}Edit</c-button>
                <c-button>{{props.name}}Delete</c-button>
              </template>
            </c-table-column>
          </c-table>
        `,
        codeStr4: `
          <c-table
            bordered
            :dataSource="tableDataSource4"
            :selected-items="false"
            :order-by.sync="orderBy"
            :loading="tableLoading"
            @update:orderBy="onOrderChange"
          >
            <c-table-column text="Name" field="name" ></c-table-column>
            <c-table-column text="Age" field="age"></c-table-column>
            <c-table-column text="Address" field="address"></c-table-column>
            <c-table-column text="Options" field="options" :width="150">
              <template  slot-scope="props">
                <c-button>{{props.name}}Edit</c-button>
                <c-button>{{props.name}}Delete</c-button>
              </template>
            </c-table-column>
          </c-table>
        `,
        codeStr5: `
          <c-table
            bordered
            :dataSource="tableDataSource5"
            :selected-items="false"
            expend-key="description"
          >
            <c-table-column text="Name" field="name" ></c-table-column>
            <c-table-column text="Age" field="age"></c-table-column>
            <c-table-column text="Address" field="address"></c-table-column>
            <c-table-column text="Options" field="options" :width="150">
              <template  slot-scope="props">
                <c-button>{{props.name}}Edit</c-button>
                <c-button>{{props.name}}Delete</c-button>
              </template>
            </c-table-column>
          </c-table>
        `,
      }
    },
    methods: {
      onOrderChange(value){
        const field = Object.keys(value)[0]
        this.tableLoading = true
        setTimeout(() => {
          this.tableLoading = false
          if (value[field] === 'desc') {
            this.tableDataSource4.sort((a, b) => a[field]-b[field])
          } else {
            this.tableDataSource4.sort((a, b) => b[field]-a[field])
          }
        }, 500)
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>