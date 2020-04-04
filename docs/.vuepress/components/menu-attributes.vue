<template>
  <div class="base">
    <section>
      <h2>Menu Attributes</h2>
      <div class="attr">
        <table>
          <thead>
          <tr>
            <th width="10%">Attribute</th>
            <th width="40%" class="des" >Description</th>
            <th width="10%" class="type">Type</th>
            <th width="25%">Accepted Values</th>
            <th width="10%">Default</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>selected</td>
              <td class="des">The selected menu item needs to be used with the .sync modifier</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td class="des">Whether to support multiple selection, if set to true, just pass in an item in selected</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>direction</td>
              <td class="des">The direction of the menu</td>
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