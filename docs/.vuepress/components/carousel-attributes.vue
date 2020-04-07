<template>
  <div class="base">
    <section>
      <h2>Carousel Attributes</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th width="20%">Attribute</th>
              <th width="50%" class="des" >Description</th>
              <th width="20%" class="type">Type</th>
              <th width="25%">Accepted Values</th>
              <th width="10%">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>height</td>
              <td class="des">Carousel height</td>
              <td class="type">String, Number</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>selected</td>
              <td class="des">Selected index</td>
              <td class="type">String, Number</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>autoplay</td>
              <td class="des">Whether to play automatically</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>true</td>
            </tr>
            <tr>
              <td>interval</td>
              <td class="des">When auto-playing, how many milliseconds next frame</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>reverseAutoplay</td>
              <td class="des">Whether to play in reverse order</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>