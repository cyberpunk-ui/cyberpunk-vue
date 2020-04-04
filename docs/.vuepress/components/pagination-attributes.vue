<template>
  <div class="base">
    <section>
      <h2>Aside Attributes</h2>
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
              <td>current</td>
              <td class="des">current page number</td>
              <td class="type">number</td>
              <td>——</td>
              <td>1</td>
            </tr>
            <tr>
              <td>total</td>
              <td class="des">Total entries</td>
              <td class="type">number</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>pageSize</td>
              <td class="des">The number of entries per page</td>
              <td class="type">number</td>
              <td>——</td>
              <td>10</td>
            </tr>
            <tr>
              <td>hideOnSinglePage</td>
              <td class="des">Hide if there is only one page</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onchange</td>
              <td class="des">The method called when the page changes</td>
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