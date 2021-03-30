<template>
  <div>
    <v-app-bar
      fixed
      color="hsl(232, 64%, 98%)"
      elevate-on-scroll
      shrink-on-scroll
      app
      class="pa-0"
      :src="img"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="90deg, rgba(255,255,255,1) 0%, hsla(232, 64%, 85%, 0.8) 40%, hsla(232, 64%, 100%, 0.95) 100%"
        ></v-img>
      </template>
      <!--src="@/assets/images/carousel/pet-surgery-1-1241227-1279x1709.jpg"-->
      <!--gradient="90deg, rgba(255,255,255,1) 0%, rgba(209, 174, 130, 0.8) 100%"
        rgba(209, 174, 130, 0.8)
        rgba(217,255,252,0.8)
        rgba(150, 109, 208, 0.8)
        rgba(217,255,227,0.1)-->
      <v-app-bar-nav-icon
        fixed
        class="ma-auto"
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.smAndDown"></v-spacer>
      <v-img
        v-if="$vuetify.breakpoint.smAndDown"
        src="@/assets/images/LogoNewPeqWhite.png"
        contain
        class="mt-0 logo"
        height="98%"
        @click="logoClick"
      ></v-img>
      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-img
            src="@/assets/images/LogoNewPeqWhite.png"
            contain
            class="mt-1 logo"
            height="85%"
            @click="logoClick"
            v-bind="attrs"
            v-on="on"
          ></v-img>
        </template>
        <span>Portada</span>
      </v-tooltip>
      <v-spacer></v-spacer>
      <v-tabs
        v-if="$vuetify.breakpoint.mdAndUp"
        class="mt-3"
        active-class="active-tabs"
        color="primary"
        height="60%"
        right
        v-model="selectedTab"
      >
        <!--background-color="rgba(255,255,255,0.85)"-->
        <v-tab class="pa-0" style="min-width: 0px" />
        <v-tab
          v-for="(tab, idx) in tabs"
          :key="idx"
          style="white-space: pre-line"
          class="mr-lg-10 text-body-2 text-lg-subtitle-1 font-weight-bold"
          :to="{
            name: tab.to,
          }"
          >{{ tab.text }}</v-tab
        >
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer absolute temporary v-model="drawer" height="30vh">
      <v-list nav dense>
        <v-list-item v-for="(item, idx) in tabs" :key="idx">
          <router-link
            :to="{
              name: item.to,
            }"
            >{{ item.text }}</router-link
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { HEADER_IMAGES } from '../helpers/headerData'

export default {
  data() {
    return {
      drawer: false,
      tabs: [
        {
          text: 'Quiénes somos',
          to: 'who',
        },
        {
          text: 'Enfermedades oculares',
          to: 'diseases',
        },
        {
          text: 'Servicios',
          to: 'services',
        },
      ],
      selectedTab: 0,
      lastImages: [0],
      img: HEADER_IMAGES['home'][0],
      contain: true,
    }
  },
  watch: {
    $route(to) {
      if (to.name === 'home') {
        this.selectedTab = -1
        this.contain = true

        let index
        while (
          this.lastImages.includes(
            (index = Math.floor(Math.random() * HEADER_IMAGES.home.length))
          )
        ) {}
        this.img = HEADER_IMAGES.home[index]

        this.pushLastImage(index)
      } else {
        this.contain = false
        this.img = HEADER_IMAGES[to.name]
      }
    },
  },
  methods: {
    logoClick: function () {
      if (this.$router.currentRoute.name !== 'home') this.$router.push('/')
    },
    pushLastImage: function (index) {
      if (this.lastImages.length !== 2) {
        this.lastImages.push(index)
      } else {
        this.lastImages[0] = this.lastImages[1]
        this.lastImages[1] = index
      }
    },
  },
}
</script>

<style scoped>
.bar-home {
  background-repeat: repeat-x !important;
  /*transform: rotate(5deg) !important;*/
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
.logo {
  cursor: pointer;
}
.logo:hover {
  opacity: 0.8 !important;
  backdrop-filter: blur(15px);
}
/*
linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(217,255,227,0.5) 50%, rgba(150,109,208,0.5) 100%);
*/
</style>
