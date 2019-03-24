<template>
  <div class="main-page-holder">
    wee
    <top-bar class="topbar-holder"></top-bar>
    <!-- <main-panel class="main-panel-holder" :organisations="organisations"></main-panel> -->
  </div>
</template>

<style lang="scss">
body {
  font-family: $main-font-style;
  margin: 0;
}
.main-page-holder {
  .topbar-holder {
    @include navbar;
  }

  .main-panel-holder {
    padding-top: $logo-height;
  }
}
</style>
<style lang="scss" scoped>
</style>

<script>
import api from './../api/api.service'

export default {
  name: 'main-page',
  components: {
    'top-bar': () => import('./../components/layout/Topbar.vue'),
    // 'main-panel': () => import('./../components/shows/ShowsPanel.vue'),
  },
  data() {
    return {
      tvShows: null
    }
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      try {
        api.getAllProducts();
        console.log('here make the call to backend');
      } catch (err) {
        console.log('error! ', err)
      }
    }
  }
}
</script>
