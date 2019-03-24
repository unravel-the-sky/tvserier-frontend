<template>
  <div class="showspanel-holder">
    <div v-if="showsData == null" class="showspanel-main">
      Choose an option!
      <div class="showspanel-options">
        <div class="show-option button" @click="handleClick('upload')">upload data</div>
        <div class="show-option button" @click="handleClick('allShows')">show all shows</div>
        <div class="show-option button" @click="handleClick('topTen')">show top 10 shows</div>
        <div class="show-option button" @click="handleClick('nextWeek')">show next week shows</div>
      </div>
    </div>
    <div v-else>
      <div class="showspanel-title" @click="goBack()">displaying: {{dataOptionName}}</div>
      <div v-if="!isNextWeek" class="showspanel-data-holder">
        <show-card class="showspanel-data" v-for="(item, index) in showsData" :key="item.showName" :card="item" :isTopTen="isTopTen" :order="index+1"></show-card>
      </div>
      <div v-else class="days">
        <div v-for="day in days" :key="day.name" class="day">
          {{day}}
          <div class="shows-holder">
            <div class="shows">show</div>
            <div class="shows">show</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.showspanel-holder {
  @include general-flex;

  .showspanel-title {
    margin-left: 20px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 17px;
    cursor: pointer;
  }

  .days {
    width: 90vw !important;

    .day {
      //   width: 15%;
      background: yellow;
      margin: 10px;
      padding: 10px;
      height: 200px;

      .shows-holder {
          display: flex;
      }
    }
  }

  .showspanel-data-holder {
    @include general-flex;

    width: 100%;
    flex-wrap: wrap;

    .showspanel-data {
      width: 20%;
      padding: 15px;
    }
  }
}
.button {
  @include button;

  width: 120px;
}
</style>

<script>
import api from './../../api/api.service'

export default {
  name: 'shows-panel',
  data() {
    return {
      showsData: null,
      dataOptionName: null,
      isTopTen: false,
      isNextWeek: false,
      days: ['MONDAY', 'TUESDAY', 'WEDENSDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
    }
  },
  components: {
    'show-card': () => import('./../Shows/ShowCard.vue'),
  },
  methods: {
    goBack() {
      this.showsData = null;
    },
    handleClick(option) {
      this.showsData = null;
      this.isTopTen = false
      this.isNextWeek = false

      switch (option) {
        case 'upload':
          alert('undefined action, yet')
          console.log('undefined action')
          break;
        case 'allShows':
          console.log('get all shows!')
          this.getAllShows();
          break;
        case 'topTen':
          console.log('get top 10!')
          this.getTopTen()
          break;
        case 'nextWeek':
          //   alert('undefined action, yet')
          console.log('get next week!')
          this.isNextWeek = true
          this.getNextWeek();
          break;
        case 'networks':
          alert('undefined action, yet')
          console.log('get by networks!')
          this.getByNetworks();
          break;
      }
    },
    async getAllShows() {
      const result = await api.getAllShows();
      console.log('dataaa: ', result);
      this.showsData = result;
      this.dataOptionName = 'all shows'
    },
    async getTopTen() {
      const result = await api.getTopTen();
      console.log('top 10!: ', result);
      this.showsData = result;
      this.isTopTen = true;
      this.dataOptionName = 'top 10'
    },
    async getNextWeek() {
      this.showsData = 1;
    },
    async getByNetworks() {

    }
  }
}
</script>
