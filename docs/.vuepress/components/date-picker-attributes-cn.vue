<template>
  <div class="base">
    <section>
      <h2>属性</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th width="10%">参数</th>
              <th width="50%" class="des" >说明</th>
              <th width="20%" class="type">类型</th>
              <th width="15%">可选值</th>
              <th width="10%">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value</td>
              <td class="des">绑定值的参数</td>
              <td class="type">Date</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>showToday</td>
              <td class="des">是否显示定位今天的按钮</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>true</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td class="des">value为空时，提示输入的文案</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>allowClear</td>
              <td class="des">是否显示清除已选中的日期的按钮</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>