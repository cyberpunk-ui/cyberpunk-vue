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
              <td>value</td>
              <td class="des">Bound value parameter</td>
              <td class="type">Date</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>showToday</td>
              <td class="des">Whether to show the button to locate today</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>true</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td class="des">When value is empty, prompt for input copy</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>allowClear</td>
              <td class="des">Whether to show the button to clear the selected date</td>
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