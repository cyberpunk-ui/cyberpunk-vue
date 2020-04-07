<template>
  <div class="demo">
    <h2>Click to upload</h2>
    <p>Upload files by clicking.</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div><img :src="uploadPreviewUrl" ></div>
        <c-upload
          multiple
          name="file"
          method="POST"
          accept="image/*"
          action="https://file-upload-simple-server.herokuapp.com/upload"
          :file-list.sync="uploadFileList"
          @onchange="onUploadChange"
        >
          <c-button icon="upload">Upload</c-button>
          <div slot="tips">Please upload jpg or png files</div>
        </c-upload>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{ parseCode(codeStr) }}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <c-icon class="icon-down" :type="isShowCode(0, 'icon', 'cn')"></c-icon>
        <span class="lock-code-word">{{isShowCode(0, 'text', 'cn')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CButton from '../../../src/components/button/button'
  import CUpload from '../../../src/components/upload/main'
  import CIcon from '../../../src/components/icon/icon'
  import mixin from '../scripts/mixin'

  export default {
    name: 'ButtonDemo',
    mixins: [mixin],
    components: {
      CButton,
      CIcon,
      CUpload
    },
    data() {
      return {
        uploadFileList: [],
        uploadPreviewUrl: '',
        codeStr: `
          <c-upload
            multiple
            name="file"
            method="POST"
            accept="image/*"
            action="https://file-upload-simple-server.herokuapp.com/upload"
            :file-list.sync="uploadFileList"
            @onchange="onUploadChange"
          >
            <c-button icon="upload">Upload</c-button>
            <div slot="tips">Please upload jpg or png files</div>
          </c-upload>
        `,
      }
    },
    methods: {
      onUploadChange(response){
        const { key } = JSON.parse(response)
        this.uploadPreviewUrl = `https://file-upload-simple-server.herokuapp.com/preview/${key}`
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>