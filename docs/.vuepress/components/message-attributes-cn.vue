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
              <th width="25%">可选值</th>
              <th width="20%">默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>position</td>
              <td class="des">弹出的位置</td>
              <td class="type">String</td>
              <td>top / bottom / center</td>
              <td>top</td>
            </tr>
            <tr>
              <td>autoClose</td>
              <td class="des">自动关闭，可直接设置自动关闭的时长</td>
              <td class="type">Boolean, Number</td>
              <td>——</td>
              <td>3</td>
            </tr>
            <tr>
              <td>enableHtml</td>
              <td class="des">启用HTML</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>closeButton</td>
              <td class="des">关闭按钮</td>
              <td class="type">Object</td>
              <td>——</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>