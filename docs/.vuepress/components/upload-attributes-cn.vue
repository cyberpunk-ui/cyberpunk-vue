<template>
  <div class="base">
    <section>
      <h2>Aside 属性</h2>
      <div class="attr">
        <table>
          <thead>
          <tr>
            <th width="10%">参数</th>
            <th width="40%" class="des" >说明</th>
            <th width="10%" class="type">类型</th>
            <th width="25%">可选值</th>
            <th width="20%">默认值</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td class="des">上传的文件字段名</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>method</td>
              <td class="des">上传接口的方法</td>
              <td class="type">String</td>
              <td>——</td>
              <td>POST</td>
            </tr>
            <tr>
              <td>action</td>
              <td class="des">必选参数，上传的地址</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>fileList</td>
              <td class="des">已上传文件列表</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td class="des">是否支持多选文件</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>accept</td>
              <td class="des">接受上传的 <a target="_blank" ref="noreferrer"  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">文件类型</a> </td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>