<template>
  <div class="base">
    <section>
      <h2>Table 属性</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th width="10%">参数</th>
              <th width="55%" class="des" >说明</th>
              <th width="10%" class="type">类型</th>
              <th width="15%">可选值</th>
              <th width="10%">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dataSource</td>
              <td class="des">显示的数据</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>orderBy</td>
              <td class="des">排序字段</td>
              <td class="type">Object</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>stripe</td>
              <td class="des">是否为斑马纹 table</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>bordered</td>
              <td class="des">是否带有纵向边框</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td class="des">是否显示加载动画</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>rowKey</td>
              <td class="des">唯一字段</td>
              <td class="type">string</td>
              <td>——</td>
              <td>id</td>
            </tr>
            <tr>
              <td>expendKey</td>
              <td class="des">展开字段</td>
              <td class="type">string</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>selectedItems</td>
              <td class="des">是否显示多选框，且可绑定选中值</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            <tr>
              <td>selectionChange</td>
              <td class="des">勾选复选框时的回调</td>
              <td class="type">Function</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>