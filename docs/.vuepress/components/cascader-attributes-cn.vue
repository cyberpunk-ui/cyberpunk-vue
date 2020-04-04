<template>
  <div class="base">
    <section>
      <h2>属性</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th width="10%">参数</th>
              <th width="40%" class="des" >说明</th>
              <th width="20%" class="type">类型</th>
              <th width="25%">可选值</th>
              <th width="20%">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>source</td>
              <td class="des">可选项数据源</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>selected</td>
              <td class="des">选中的数据数组</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>loadData</td>
              <td class="des">用来动态加载数据回调函数</td>
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