<template>
  <div>
    <v-app-bar
      height="100vh"
      fixed
      color="white"
      elevate-on-scroll
      app
      src="@/assets/images/carousel/pet-surgery-1-1241227-1279x1709.jpg"
      class="pa-0 bar"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="90deg, rgba(255,255,255,1) 0%, rgba(217,255,252,0.8) 100%"
        ></v-img>
      </template>
      <v-app-bar-nav-icon
        fixed
        class="ma-auto"
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
      <v-img
        v-if="$vuetify.breakpoint.smAndDown"
        src="@/assets/images/LogoNewPeqWhite.png"
        contain
        class="mt-2"
        style="height: 80%"
      ></v-img>
      <v-container v-if="$vuetify.breakpoint.mdAndUp" full-height fluid>
        <v-row justify="start" align="center" class="pb-lg-0 pt-lg-0">
          <v-col cols="2" lg="1" align="start" class="ma-0 mt-2 mt-lg-0 pa-0">
            <v-img
              v-if="$vuetify.breakpoint.md"
              src="@/assets/images/LogoNewPeqWhite.png"
              contain
              height="80%"
            ></v-img>
            <img
              v-else
              src="@/assets/images/LogoNewPeqWhite.png"
              class="ma-0 pa-0"
            />
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="5" offset="5" align="end" class="pl-16">
            <v-tabs
              class="my-auto pl-16 rounded-lg"
              active-class="active-tabs"
              color="primary"
              background-color="rgba(255,255,255,0.85)"
            >
              <v-tab
                v-for="(tab, idx) in tabs"
                :key="idx"
                style="white-space: pre-line"
                >{{ tab }}</v-tab
              >
            </v-tabs>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        'Home',
        'Quiénes somos',
        'Enfermedades oculares\ny sus síntomas',
        'Servicios',
      ],
    }
  },
}
</script>

<style scoped>
.bar {
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(217, 255, 227, 0.5) 100%
  );
}
.active-tabs {
  background-color: var(--v-secondaryTrans) !important;
}
/*
linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(217,255,227,0.5) 50%, rgba(150,109,208,0.5) 100%);
*/
</style>
