<template>
  <div class="base">
    <section>
      <h2>Aside Attributes</h2>
      <div class="attr">
        <table>
          <thead>
          <tr>
            <th width="10%">Attribute</th>
            <th width="50%" class="des" >Description</th>
            <th width="10%" class="type">Type</th>
            <th width="15%">Accepted Values</th>
            <th width="10%">Default</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td class="des">Uploaded file field name</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>method</td>
              <td class="des">Upload interface method</td>
              <td class="type">String</td>
              <td>——</td>
              <td>POST</td>
            </tr>
            <tr>
              <td>action</td>
              <td class="des">Required parameters, upload address</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>fileList</td>
              <td class="des">List of uploaded files</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td class="des">Whether to support multi-select files</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>accept</td>
              <td class="des">Accepted <a target="_blank" ref="noreferrer"  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">File type</a> </td>
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