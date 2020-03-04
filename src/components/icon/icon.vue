<template>
  <span>
    <svg v-if="type === 'loading'" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
      <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
      </path>
    </svg>
    <svg v-else class="icon" aria-hidden="true" @click="$emit('click', $event)">
      <use :xlink:href="`#icon-${type}`" />
    </svg>
  </span>
</template>

<script>
import "../../utils/iconfont";
export default {
  name: "CIcon",
  props: {
    type: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: -0.3em;
  fill: currentColor;
  overflow: hidden;
}
</style>
