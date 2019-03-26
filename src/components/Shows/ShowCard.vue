<template>
  <div class="showcard-holder">
    <div class="card-panel" @click="openCard()">
      <img :src="card.imageUrl" class="card-image">
      <span class="card-title">{{card.showName}}</span>
      <span v-if="isTopTen" class="card-title topten">{{order}}</span>
      <span v-else class="card-title rating">{{card.rating.toFixed(1)}}</span>
    </div>

    <showcard-modal v-if="showCardModal" @close="showCardModal = !showCardModal" :card="card"></showcard-modal>
  </div>
</template>

<style lang="scss" scoped>
.showcard-holder {
  .card-panel {
    &:hover,
    &:hover > .rating {
      box-shadow: $button-shadow;
    }
    cursor: pointer;
    @include general-flex;

    position: relative;
    flex-direction: column;
    background: white;
    padding: 15px 5px;
    border-radius: 15px;

    .card-image {
      display: block;
      max-width: 120px;
      max-height: 150px;
      object-fit: contain;
    }
    .card-title {
      display: block;
      font-size: 17px;
      margin-bottom: 10px;
    }

    .rating {
      position: absolute;
      bottom: -25px;
      right: -5px;
      background: yellow;
      padding: 10px;
      min-width: 20px;
      border-radius: 50%;
      text-align: center;
    }

    .topten {
      position: absolute;
      left: -15px;
      top: -15px;
      background: greenyellow;
      padding: 10px;
      min-width: 20px;
      border-radius: 50%;
      text-align: center;
    }
  }
}
</style>

<script>
export default {
  name: 'show-card',
  props: {
    card: {
      type: Object,
      required: true
    },
    isTopTen: {
      type: Boolean,
      required: false,
      default: false
    },
    order: {
      type: Number,
      required: false
    }
  },
  components: {
    'showcard-modal': () => import('./ShowCardModal.vue')
  },
  data() {
    return {
      showCardModal: false
    }
  },
  methods: {
    openCard() {
      document.body.style.overflowY = 'hidden';
      this.showCardModal = true
    }
  }
}
</script>
