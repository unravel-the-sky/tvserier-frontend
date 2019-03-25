<template>
  <generic-modal @close="close" id="modal">
    <div class="modal-holder">
      <div class="close-button">
        <img @click="close()" class="desktop-close" src="@/assets/close-icon.png">
      </div>
      <div class="modal-header"></div>
      <div class="modal-body">
        upload file:
        <input type="file" @change="onFileChange">
      </div>
      <div class="modal-footer"></div>
    </div>
  </generic-modal>
</template>

<style lang="scss" scoped>
#modal {
  font-size: 15px;
}
.modal-holder {
  margin-left: 20px;
}
.modal-header {
  color: #9b9b9b;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}
.close-button {
  float: right;
  cursor: pointer;
  margin-right: 20px;
}
.desktop-close {
  width: 20px;
}
.modal-body {
  margin-bottom: 30px;
  letter-spacing: 1px;
  overflow-y: auto;
  max-height: 100%;
  max-width: 100vw;
  overflow: hidden;
  height: 70vh;
  overflow-y: auto;

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .subtitle {
    display: block;
  }
}
</style>

<script>
import api from './../../api/api.service'

export default {
  name: 'upload-modal',
  components: {
    'generic-modal': () => import('./../generics/GenericModal.vue')
  },
  methods: {
    close() {
      document.body.style.overflowY = 'auto';
      this.$emit('close');
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.uploadFile(files)
    },
    async uploadFile(files) {
      const formData = new FormData();

      if (!files.length) return;

      formData.append('file', files[0])

      const result = await api.uploadFile(formData);
      if (result.status === 200) {
        alert('upload successful!')
        this.close();
      } else if (result.status === 500) {
        alert('upload failed :(')
        this.close();
      }
    }
  }
}
</script>
