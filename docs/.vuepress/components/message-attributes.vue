<template>
  <div class="base">
    <section>
      <h2>Attributes</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th width="20%">Attribute</th>
              <th width="25%" class="des" >Description</th>
              <th width="20%" class="type">Type</th>
              <th width="25%">Accepted Values</th>
              <th width="20%">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>position</td>
              <td class="des">Pop-up location</td>
              <td class="type">String</td>
              <td>top / bottom / center</td>
              <td>top</td>
            </tr>
            <tr>
              <td>autoClose</td>
              <td class="des">Automatic shutdown, you can directly set the duration of automatic shutdown长</td>
              <td class="type">Boolean, Number</td>
              <td>——</td>
              <td>3</td>
            </tr>
            <tr>
              <td>enableHtml</td>
              <td class="des">HTML enabled</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>closeButton</td>
              <td class="des">Close button</td>
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