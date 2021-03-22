<template>
  <div>
    <v-app-bar fixed color="white" shrink-on-scroll>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
      ></v-app-bar-nav-icon>
      <v-container full-height fluid>
        <v-row justify="start" align="center">
          <v-col cols="2" align="start" class="ma-0 mt-2 pa-0">
            <v-img
              src="@/assets/LogoNewPeqWhite.png"
              contain
              height="100"
              width="200"
            ></v-img>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-tabs>
              <v-tab v-for="(tab, idx) in tabs" :key="idx">{{ tab }}</v-tab>
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
        'Quiénes somos',
        'Enfermedades oculares y sus síntomas',
        'Servicios',
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
