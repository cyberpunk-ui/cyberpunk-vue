<template>
  <div class="base">
    <section>
      <h2>属性</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th width="20%">参数</th>
              <th width="25%" class="des" >说明</th>
              <th width="20%" class="type">类型</th>
              <th width="25%">可选值</th>
              <th width="20%">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>current</td>
              <td class="des">当前页数</td>
              <td class="type">number</td>
              <td>——</td>
              <td>1</td>
            </tr>
            <tr>
              <td>total</td>
              <td class="des">总条目数</td>
              <td class="type">number</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>pageSize</td>
              <td class="des">每页显示条目个数</td>
              <td class="type">number</td>
              <td>——</td>
              <td>10</td>
            </tr>
            <tr>
              <td>hideOnSinglePage</td>
              <td class="des">只有一页时是否隐藏</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onchange</td>
              <td class="des">页面发生改变时调用的方法</td>
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