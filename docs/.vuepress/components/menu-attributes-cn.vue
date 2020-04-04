<template>
  <div class="base">
    <section>
      <h2>Menu 属性</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th width="10%">参数</th>
              <th width="50%" class="des" >说明</th>
              <th width="10%" class="type">类型</th>
              <th width="25%">可选值</th>
              <th width="20%">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>selected</td>
              <td class="des">选中的菜单项，需要配合.sync修饰符使用</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td class="des">是否支持多选，如果设置为true，只需在selected中传入一项即可</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>direction</td>
              <td class="des">菜单的方向</td>
              <td class="type">String</td>
              <td>horizontal / vertical</td>
              <td>horizontal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>