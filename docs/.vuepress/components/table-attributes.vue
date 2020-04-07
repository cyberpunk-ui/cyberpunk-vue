<template>
  <div class="base">
    <section>
      <h2>Table Attributes</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th width="10%">Attribute</th>
              <th width="50%" class="des" >Description</th>
              <th width="10%" class="type">Type</th>
              <th width="25%">Accepted Values</th>
              <th width="10%">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dataSource</td>
              <td class="des">Data displayed</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>orderBy</td>
              <td class="des">Sort field</td>
              <td class="type">Object</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>stripe</td>
              <td class="des">Whether it is zebra pattern</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>bordered</td>
              <td class="des">Whether it has a vertical border</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td class="des">Whether to show loading animation</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>rowKey</td>
              <td class="des">Unique field</td>
              <td class="type">string</td>
              <td>——</td>
              <td>id</td>
            </tr>
            <tr>
              <td>expendKey</td>
              <td class="des">Expand field</td>
              <td class="type">string</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>selectedItems</td>
              <td class="des">Whether to display the multi-select box, and can bind the selected value</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            <tr>
              <td>selectionChange</td>
              <td class="des">Callback when check box is checked</td>
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