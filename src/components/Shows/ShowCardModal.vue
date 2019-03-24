<template>
  <generic-modal @close="close" id="modal">
    <div class="modal-holder">
      <div class="close-button">
        <img @click="close()" class="desktop-close" src="@/assets/close-icon.png">
      </div>
      <div class="modal-header"></div>
      <div class="modal-body">
        <span class="title">{{card.showName}}</span>
        <span class="subtitle">Rating: {{card.rating}}</span>
        <span class="subtitle">Released Episodes: {{card.numReleasedEpisodes}} / {{card.numEpisodes}}</span>
        <span class="subtitle">
          Genres:
          <span v-for="(genre, index) in card.genres" :key="genre.name">
            {{genre}}
            <span v-if="index !== card.genres.length - 1">,</span>
          </span>
        </span>
        <span class="summary" v-html="card.summary"></span>
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
export default {
  name: 'showcard-modal',
  components: {
    'generic-modal': () => import('./../generics/GenericModal.vue')
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      document.body.style.overflowY = 'auto';
      this.$emit('close');
    }
  }
}
</script>
