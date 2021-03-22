<template>
  <div>
    <v-app-bar fixed color="white" shrink-on-scroll app class="pa-0">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>
      <v-img
        v-if="$vuetify.breakpoint.smAndDown"
        src="@/assets/images/LogoNewPeqWhite.png"
        contain
        class="mr-7"
        height="80"
        width="150"
      ></v-img>
      <v-container v-if="$vuetify.breakpoint.mdAndUp" full-height fluid>
        <v-row justify="start" align="center">
          <v-col cols="2" align="start" class="ma-0 mt-2 pa-0">
            <v-img
              src="@/assets/images/LogoNewPeqWhite.png"
              contain
              height="100"
              width="200"
            ></v-img>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-tabs active-class="active-tabs">
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
