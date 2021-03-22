<template>
  <v-app class="app">
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer>asdasdas </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',

  components: { Header },

  data: () => ({
    //
  }),
}
</script>
<style scoped>
.app {
  /*background-color: rgba(217, 255, 227, 0.2);
  background-image: linear-gradient(
    180deg,
    rgba(217, 255, 227, 0.2) 0%,
    rgba(255, 255, 255, 1) 100%
  );*/
}
</style>
