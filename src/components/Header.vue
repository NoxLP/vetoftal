<template>
  <div>
    <v-app-bar
      height="100vh"
      fixed
      color="white"
      :shrink-on-scroll="$vuetify.breakpoint.smAndDown"
      app
      class="pa-0"
    >
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
          <v-col>
            <v-tabs class="my-auto" active-class="active-tabs">
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
.active-tabs {
  background-color: var(--v-secondaryTrans) !important;
}
</style>
