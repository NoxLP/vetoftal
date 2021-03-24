<template>
  <div>
    <v-app-bar
      dense
      fixed
      color="white"
      elevate-on-scroll
      shrink-on-scroll
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
        src="@/assets/images/LogoNewPeqWhite.png"
        contain
        class="mt-2"
        height="85%"
      ></v-img>
      <v-spacer></v-spacer>
      <v-tabs
        class="mt-1 rounded"
        active-class="active-tabs"
        color="primary"
        height="85%"
        right
      >
        <!--background-color="rgba(255,255,255,0.85)"-->
        <v-tab
          v-for="(tab, idx) in tabs"
          :key="idx"
          style="white-space: pre-line"
          class="mr-lg-10 text-body-2 text-lg-subtitle-1 font-weight-bold"
          >{{ tab }}</v-tab
        >
      </v-tabs>
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
        'Contacto',
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
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
.theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: black;
}
/*
linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(217,255,227,0.5) 50%, rgba(150,109,208,0.5) 100%);
*/
</style>
