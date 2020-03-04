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
          <c-icon v-if="file.status === 'pending'" type="loading" class="loading"></c-icon>
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
        tempFileList: [],
        idCount: 0,
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
        this.tempFileList.splice(index, 1)
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
        this.idCount = 0
        let objList = rawFiles.map((rawFile, index) => {
          const {name, type, size} = rawFile
          let id = index
          this.tempFileList.push(rawFile)
          if (this.fileList.map(v => v.id).indexOf(index) >= 0) {
            id = this.fileList.length + this.idCount++
          }
          return {id, name, type, size, status: 'pending'}
        })
        this.$emit('update:fileList', [...this.fileList, ...objList])
      },
      uploadFiles(rawFiles) {
        this.beforeUploadFiles(rawFiles)
        this.$nextTick(() => {
          for (let i = 0; i < this.tempFileList.length; i++) {
            if (this.fileList[i].status !== 'pending') continue;
            const formData = new FormData()
            formData.append(this.name, this.tempFileList[i])
            this.ajax(formData, (response) => {
              this.$emit('onchange', response)
              this.updateFileStatus(i, 'success')
            },() => {
              this.updateFileStatus(i,'error')
            })
          }
        })
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
            color: $secondary-color;
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
