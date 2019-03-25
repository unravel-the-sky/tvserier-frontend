<template>
  <div v-if="networksList" class="networks-holder">
    <div class="networks-row">
      <div class="networks-item-first">Avg Rating</div>
      <div class="networks-item">Network</div>
      <div class="networks-item">Shows</div>
      <div class="networks-item-last">Show Count</div>
    </div>

    <div v-for="item in networksList" :key="item.network" class="networks-row">
      <div class="networks-item-first">{{item.averageRating}}</div>
      <div class="networks-item">{{item.network}}</div>
      <div class="networks-item">
        <span v-for="(show, index) in item.shows" :key="show.name">
          {{show}}
          <span v-if="index !== item.shows.length - 1">,</span>
        </span>
      </div>
      <div class="networks-item-last">{{item.showCount}}</div>
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
    // group here
    const groupBy = (objectArray, prop) => {
      return objectArray.reduce(function (accumulator, obj) {
        let key = obj[prop];
        if (!accumulator[key]) {
          accumulator[key] = [];
        }
        accumulator[key].push(obj);
        return accumulator;
      }, {});
    }
    const groupedData = groupBy(this.networksData, 'network')

    const keys = Object.keys(groupedData);

    const mergedData = []
    for (const key of keys) {
      let totalRating = 0;
      let networkName = ''
      let showNames = []
      const group = groupedData[key];
      group.forEach(element => {
        totalRating += element.averageRating;
        networkName = element.network
        showNames.push(element.showName)
      });
      let avgRating = totalRating / group.length;
      mergedData.push({
        network: networkName,
        averageRating: avgRating.toFixed(1),
        shows: showNames,
        showCount: showNames.length
      })
    }
    console.log('merged data: ', mergedData);

    this.networksList = mergedData;
  },
  data() {
    return {
      networksList: null
    }
  }
}
</script>
