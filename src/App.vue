<template>
  <div>
    <transition mode="out-in">
      <keep-alive>
        <router-view>
        </router-view>
      </keep-alive>
    </transition>

    <!-- <transition mode="out-in">
      <router-view>

      </router-view>
    </transition> -->
  </div>
</template>

<script>
  export default{
    
  }
</script> 

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
