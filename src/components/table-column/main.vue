<template>
  <div>column</div>
</template>

<script>

export default {
  name: "CTableColumn",
  props: {
    text: {
      type: String,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    width: {
      type: Number,
    }
  }
};
</script>
