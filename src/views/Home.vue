<template>
  <div class="home">
    <HeaderTop>
      <span slot="logo">
        Ele.me
      </span>
    </HeaderTop>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import HeaderTop from "@/components/HeaderTop.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    HeaderTop
  }
};
</script>
