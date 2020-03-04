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
        <span class="content" :class="{[file.status]:true}">
          <c-icon v-if="file.status === 'success'" type="success"></c-icon>
          <c-icon v-if="file.status === 'error'" type="reeor"></c-icon>
          <span v-if="file.status === 'pending'" class="loading">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
              <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
              </path>
            </svg>
          </span>
          <a :href="file.url" :title="file.name">{{file.name}}</a>
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
      multiple: {
        type: Boolean,
        default: false
      },
      accept: {
        type: String,
      },
    },
    data() {
      return {
        uploadStatus: {},
      }
    },
    methods: {
      onClickUpload(){
        const input = this.createInput()
        input.addEventListener('change', (e)=> {
          const files = input.files
          this.uploadFiles(files)
          input.remove()
        })
        input.click()
      },
      onRemoveFile(file){
        const copy = [...this.fileList]
        const index = copy.indexOf(file)
        copy.splice(index, 1)
        this.$emit('update:fileList', copy)
      },
      createInput(){
        const inputElement = document.createElement('input')
        if (this.accept) inputElement.accept = this.accept;
        inputElement.multiple = this.multiple
        inputElement.type = 'file'
        this.$refs.uploadInput.appendChild(inputElement)
        return inputElement
      },
      beforeUploadFiles(files){
        const rawFiles = Array.from(files)
        let file = rawFiles.map((rawFile, index) => {
          let {name, type, size} = rawFile
          return {id: index, name, type, size, status: 'pending'}
        })
        this.$emit('update:fileList', [...this.fileList, ...file])
      },
      uploadFiles(rawFiles) {
        this.beforeUploadFiles(rawFiles)
        for (let i = 0; i < rawFiles.length; i++) {
          const formData = new FormData()
          formData.append(this.name, rawFiles[i])
          this.ajax(formData, (response) => {
            this.$emit('onchange', response)
            this.updateFileStatus(i, 'success')
          },() => {
            this.updateFileStatus(i,'error')
          })
        }
      },
      updateFileStatus(id, status){
        const file = this.fileList.filter(item => item.id === id)[0]
        const index = this.fileList.indexOf(file)
        const copy = JSON.parse(JSON.stringify(file))
        copy.status = status
        const fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, copy)
        this.$emit('update:fileList', fileListCopy)
      },
      ajax(formData, success, error){
        const xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => success(xhr.response)
        xhr.onerror = () => error(xhr)
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
          vertical-align: middle;
          .loading{
            vertical-align: middle;
          }
          svg path,
          svg rect{
            fill: $secondary-color;
          }
          /*&.success {*/
          /*}*/
          &.error {
            color: $red-color;
          }
          &.pending {
          }
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
      padding: 5px;
      margin-top: 12px;
      .icon {
      }
    }
  }
</style>
