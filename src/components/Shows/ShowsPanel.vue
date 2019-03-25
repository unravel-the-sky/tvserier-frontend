<template>
  <div class="showspanel-holder">
    <div v-if="showsData == null" class="showspanel-main">
      Choose an option!
      <div class="showspanel-options">
        <div class="show-option button" @click="handleClick('upload')">upload data</div>
        <div class="show-option button" @click="handleClick('allShows')">show all shows</div>
        <div class="show-option button" @click="handleClick('topTen')">show top 10 shows</div>
        <div class="show-option button" @click="handleClick('nextWeek')">show next week shows</div>
        <div class="show-option button" @click="handleClick('networks')">show table by networks</div>
      </div>
    </div>
    <div v-else>
      <div class="showspanel-title" @click="goBack()">displaying: {{dataOptionName}}</div>
      <div v-if="!isNextWeek && !isNetworks" class="showspanel-data-holder">
        <show-card class="showspanel-data" v-for="(item, index) in showsData" :key="item.showName" :card="item" :isTopTen="isTopTen" :order="index+1"></show-card>
      </div>
      <div v-else-if="!isNetworks" class="days">
        <div v-for="(day, index) in days" :key="day.name" class="day">
          {{day}}
          <div class="shows-holder">
            <div v-for="show in showsData" :key="show.showName">
              <div v-if="showIsThisDay(index, show)" class="show">{{show.showName}} - Season: {{show.season}} / Episode: {{show.number}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="networks">
          <networks-card :networksData="showsData"></networks-card>
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
      &:nth-child(odd) {
        background: #a3fdff;
      }
      &:nth-child(even) {
        background: #c5ffa3;
      }

      margin: 10px;
      padding: 20px;
      height: 200px;
      border-radius: 15px;

      .shows-holder {
        display: flex;

        .show {
          display: block;
          background: white;
          padding: 5px;
          margin: 10px;
          border-radius: 5px;
        }
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

  width: 180px;
  padding: 10px;
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
      isNetworks: false,
      days: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
    }
  },
  components: {
    'show-card': () => import('./../Shows/ShowCard.vue'),
    'networks-card': () => import('./../Shows/NetworkCard.vue'),
  },
  methods: {
    goBack() {
      this.showsData = null;
    },
    handleClick(option) {
      this.showsData = null;
      this.isTopTen = false
      this.isNextWeek = false
      this.isNetworks = false

      switch (option) {
        case 'upload':
          alert('undefined action, yet')
          console.log('undefined action')
          break;
        case 'allShows':
          this.getAllShows();
          break;
        case 'topTen':
          this.getTopTen()
          break;
        case 'nextWeek':
          this.getNextWeek();
          break;
        case 'networks':
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
      const result = await api.getNextWeekShows();
      console.log('next week!!: ', result);
      this.showsData = result;
      this.isNextWeek = true
      this.dataOptionName = 'Whats up next week!'
    },
    showIsThisDay(index, show) {
      const convertedShowDate = new Date(Date.parse(show.airdate));
      const showDayNumber = Math.abs(convertedShowDate.getDay() - 6);
      const isThisDay = index === showDayNumber;
      return isThisDay;
    },
    async getByNetworks() {
      const result = await api.getByNetworks();
      console.log('networks!!: ', result);
      this.showsData = result;
      this.isNetworks = true;
      this.dataOptionName = 'Sort by networks'
    }
  }
}
</script>
