<template>
  <div class="c-upload">
    <div class="c-upload-trigger" @click="onClickUpload">
      <slot></slot>
    </div>
    <div class="c-upload-tips">
      <c-icon type="prompt"></c-icon>
      <slot name="tips"></slot>
    </div>
    <div class="c-upload-input" ref="uploadInput"></div>
  </div>
</template>

<script>
  import CIcon from '../icon/icon'
  export default {
    name: "CUpload",
    components: {CIcon},
    props: {
      name: {
        type: String,
        required: true,
      },
      method: {
        type: String,
        default: 'POST',
      },
      action: {
        type: String,
        required: true,
      },
    },
    methods: {
      onClickUpload(){
        const input = this.createInput()
        input.addEventListener('change', (e)=> {
          const file = input.files[0]
          this.uploadFile(file)
          input.remove()
        })
        input.click()
      },
      createInput(){
        const inputElement = document.createElement('input')
        inputElement.type = 'file'
        this.$refs.uploadInput.appendChild(inputElement)
        return inputElement
      },
      uploadFile(file) {
        const formData = new FormData()
        formData.append(this.name, file)
        this.ajax(formData, (response) => {
          this.$emit('onchange', response)
        })
      },
      ajax(formData, callback){
        const xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => callback(xhr.response)
        xhr.send(formData)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/var";

  .c-upload {
    &-input{
      width: 0;
      height: 0;
      display: none;
    }
    &-tips {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: $white-color;
      font-size: 12px;
      border: 1px solid $grey-light-color;
      padding: 6px 8px;
      margin-top: 12px;
    }
  }
</style>
