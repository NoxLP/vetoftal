<template>
  <v-app class="app pa-0 ma-0">
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer
      color="primary darken-4"
      class="white--text mt-16 mb-0 pb-9 pt-0 pt-md-6 footer px-0"
    >
      <v-row
        v-if="$vuetify.breakpoint.smAndDown"
        justify="center"
        align="center"
        class="mb-4 mt-0"
      >
        <v-btn-toggle
          dark
          background-color="transparent"
          mandatory
          v-model="footerNav"
        >
          <v-btn icon :to="{ name: 'home' }">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn icon :to="{ name: 'who' }">
            <v-icon>mdi-information</v-icon>
          </v-btn>
          <v-btn icon :to="{ name: 'diseases' }">
            <v-img src="@/assets/icons/pets-24px.svg"></v-img>
          </v-btn>
          <v-btn icon :to="{ name: 'services' }">
            <v-img src="@/assets/icons/medical_services-24px.svg"></v-img>
          </v-btn>
        </v-btn-toggle>
      </v-row>
      <v-row
        v-if="$vuetify.breakpoint.smAndUp"
        justify="center"
        align="center"
        class="mb-0 px-6"
      >
        <v-col cols="6" md="3" lg="4">
          <v-row justify="center" v-if="$vuetify.breakpoint.lg">
            <span
              >Patricia Ramírez Perdomo @ 2021 - Todos los derechos reservados
            </span>
          </v-row>
          <v-row v-else justify="center">
            <span>Patricia Ramírez Perdomo @ 2021</span>
            <span>Todos los derechos reservados</span>
          </v-row>
        </v-col>
        <v-col cols="6" md="2" lg="2" class="pt-4 pl-16 pl-md-10 pl-lg-16">
          <v-btn
            v-for="(social, idx) in socials"
            :key="idx"
            :href="social.href"
            icon
            large
            color="white"
          >
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="7" lg="6" v-if="$vuetify.breakpoint.mdAndUp" class="px-0">
          <v-tabs color="white" right dark background-color="transparent">
            <!--background-color="rgba(255,255,255,0.85)"-->
            <v-tab
              v-for="(tab, idx) in tabs"
              :key="idx"
              class="mr-lg-10 text-body-2 text-lg-subtitle-1 font-weight-bold"
              :to="{
                name: tab.to,
              }"
              >{{ tab.text }}</v-tab
            >
          </v-tabs>
        </v-col>
      </v-row>
      <v-row v-else justify="center" align="center" class="mb-0">
        <v-container fill-height fluid>
          <v-row justify="center" align="center">
            <span>Patricia Ramírez Perdomo @ 2021</span>
          </v-row>
          <v-row justify="center" align="center">
            <span>Todos los derechos reservados</span>
          </v-row>
          <v-row justify="center" align="center" class="mt-9">
            <v-btn
              v-for="(social, idx) in socials"
              :key="idx"
              :href="social.href"
              icon
              large
              color="white"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-row>
      <v-row justify="center" class="mt-7 mt-md-12 mt-lg-8 mx-0 px-0">
        <a class="footer-anchor">Aviso legal</a>
        <pre v-if="$vuetify.breakpoint.smAndUp"> &nbsp;|&nbsp;&nbsp;</pre>
        <pre v-else> |&nbsp;</pre>
        <a
          class="footer-anchor"
          target="_blank"
          href="http://www.linkedin.com/in/norbertosaezperdomo"
          >Diseño de Norberto Sáez Perdomo</a
        >
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: { Header },
  data: () => ({
    footerNav: '',
    tabs: [
      {
        text: 'Portada',
        to: 'home',
      },
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
    socials: [
      {
        href: '#',
        icon: 'mdi-twitter',
      },
      {
        href: '#',
        icon: 'mdi-facebook',
      },
      {
        href: '#',
        icon: 'mdi-linkedin',
      },
      {
        href: '#',
        icon: 'mdi-instagram',
      },
    ],
  }),
}
</script>
<style scoped>
.footer {
  bottom: 0 !important;
}
.footer-anchor {
  color: white;
  text-decoration: underline;
}
</style>
