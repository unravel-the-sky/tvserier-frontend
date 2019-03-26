<template>
  <div v-if="networksList" class="networks-holder">
    <div class="networks-row">
      <div class="networks-item-first">Avg Rating</div>
      <div class="networks-item">Network</div>
      <div class="networks-item">Top rated show</div>
      <div class="networks-item-last">Show Count</div>
    </div>

    <div v-for="item in networksList" :key="item.network" class="networks-row">
      <div class="networks-item-first">{{item.averageRating.toFixed(1)}}</div>
      <div class="networks-item">{{item.network}}</div>
      <div class="networks-item">{{item.showName}}</div>
      <div class="networks-item-last">{{item.numShows}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.networks-holder {
  width: 70vw;
  margin-top: 40px;

  .networks-row {
    display: flex;
    width: 100%;
    padding: 10px 5px;
    // margin: 5px;
    border-bottom: 1px solid grey;

    &:hover {
        background: rgb(230, 230, 230);
    }

    .networks-item-first {
      width: 10%;
    }

    .networks-item {
      width: 40%;
    }

    .networks-item-last {
      width: 10%;
    }
  }
}
</style>

<script>
export default {
  name: 'networks-card',
  props: {
    networksData: {
      type: Array,
      required: true
    }
  },
  created() {
    console.log('data received: ', this.networksData)
    this.networksList = this.networksData;
  },
  data() {
    return {
      networksList: null
    }
  }
}
</script>
