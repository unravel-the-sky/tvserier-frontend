<template>
  <div class="welcome-holder">
    <div class="welcome-panel">
      <div class="welcome-text-holder">
        <span class="welcome-text">Enter username:</span>
        <div>
          <input type="text" v-model="username">
        </div>
        <div class="welcome-text button" @click="handleClick()">Enter</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome-holder {
  @include general-flex;

  background: rgb(204, 204, 204);
  width: 100vw;
  height: 100vh;

  .welcome-panel {
    display: block;
    background: white;
    padding: 75px 50px;
    border-radius: 15px;
    box-shadow: $boxes-shadow;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
    }

    .welcome-text {
      font-size: 14px;
    }
    .button {
      margin-top: 10px;
      padding: 5px;
      background: green;
      border-radius: 5px;
      width: 40%;
      text-align: center;
      color: white;
      cursor: pointer;
    }
  }
}
input {
  font-size: 12px;
  font-weight: 600;
  color: black;
  width: 90%;
  border: 1px solid grey;
  outline: none;
  padding: 5px;
  border-radius: 5px;

  &::placeholder {
    color: green;
  }
}
</style>

<script>
export default {
  name: 'welcome-page',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    handleClick() {
      if (this.username !== '') {
        this.$router.push({ name: 'home', params: { username: this.username } });
        
      } else {
        alert('please enter a username!')
      }
    }
  }
}
</script>
