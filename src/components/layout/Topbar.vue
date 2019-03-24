<template>
  <div class="topbar-holder">Hello, {{username}}!</div>
</template>

<style lang="scss" scoped>
.topbar-holder {
  width: 100%;
}
</style>

<script>
export default {
  name: 'top-bar',
  props: {
    username: {
      type: String,
      required: true,
      default: 'n/a'
    }
  }
}
</script>
