<template>
  <v-app>
    <v-app-bar fixed color="white" shrink-on-scroll>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
      ></v-app-bar-nav-icon>
      <v-img src=""></v-img>
    </v-app-bar>
    <v-main>
      <Home />
      <Home />
    </v-main>
    <v-footer>asdasdas </v-footer>
  </v-app>
</template>

<script>
import Home from "./views/Home";
export default {
  name: "App",

  components: { Home },

  data: () => ({
    //
  }),
};
</script>
