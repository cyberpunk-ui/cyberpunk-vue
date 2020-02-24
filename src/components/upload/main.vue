<template>
  <div class="c-upload">
    <div class="c-upload-trigger" @click="onClickUpload">
      <slot></slot>
    </div>
    <div class="c-upload-input" ref="uploadInput"></div>
    <div class="c-upload-tips">
      <c-icon type="prompt"></c-icon>
      <slot name="tips"></slot>
    </div>
    <ol class="c-upload-file-list">
      <li v-for="(file,index) in fileList" :key="index">
        <span class="content">
          <c-icon type="attachent"></c-icon> <a :href="file.url" :title="file.name">{{file.name}}</a>
        </span>
        <span class="close" @click="onRemoveFile(file)"><c-icon type="close"></c-icon></span>
      </li>
    </ol>

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
      fileList: {
        type: Array,
        default: () => []
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
      onRemoveFile(file){
        const answer = window.confirm('You sure want to delete it?')
        if (answer) {
          const copy = [...this.fileList]
          const index = copy.indexOf(file)
          copy.splice(index, 1)
          this.$emit('update:fileList', copy)
        }
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
        const {name, size, type, url} = file
        this.ajax(formData, (response) => {
          this.$emit('onchange', response)
          this.$emit(
            'update:fileList',
            [...this.fileList, {name, size, type, url}]
          )
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
    &-file-list {
      color: $white-color;
      display: flex;
      flex-direction: column;
      &,li{
        padding: 0;
        margin: 0;
        list-style: none;
      }
      li {
        display: flex;
        justify-content: space-between;
        background-color: $grey-color;
        font-size: 14px;
        padding: 6px;
        border-bottom: 1px solid $black-color;
        transition: all .3s;
        a{
          color: inherit;
          text-decoration: none;
        }
        .close,.content {
          cursor: pointer;
        }
        .content {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &:hover {
          color: $secondary-color;
          background-color: $grey-light-color;
        }
      }
    }
    &-tips {
      display: inline-flex;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      color: $white-color;
      font-size: 14px;
      border: 1px solid $grey-color;
      padding: 6px 8px;
      margin-top: 12px;
      .icon {
        margin-right: 4px;
      }
    }
  }
</style>
