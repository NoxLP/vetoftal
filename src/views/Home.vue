<template>
  <div class="home">
    <Carousel />
    <v-container v-if="$vuetify.breakpoint.mdAndUp" class="mt-16" fluid>
      <v-row justify="center" align="center" class="pl-0 pl-5 pr-5">
        <v-card color="#D9FFE32a" height="auto" class="pl-0 rounded-lg">
          <v-card-text>
            <v-row class="pl-0">
              <v-col cols="5" class="ml-0 pl-4">
                <v-img
                  class="ml-0 rounded-lg"
                  height="45vh"
                  src="@/assets/images/home/sarandy-westfall--itLKdE7ojA-unsplash.jpg"
                >
                </v-img>
              </v-col>
              <v-col cols="6" class="ml-16 mt-16">
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ texts.home.who[0] }}
                </p>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ texts.home.who[1] }}
                </p>
                <v-btn dark color="#966dd09f" class="black--text mt-10">
                  ¿Quiénes somos?</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
    <v-container v-else class="mt-16" fluid>
      <v-row align="center">
        <v-col cols="12" md="6" lg="4" offset-lg="1">
          <v-card elevation="8" class="ml-md-16"> </v-card>
        </v-col>
        <v-col cols="12" md="5" lg="5" class="ml-0 ml-lg-16">
          <v-card height="100%">
            <v-img
              src="@/assets/images/home/sarandy-westfall--itLKdE7ojA-unsplash.jpg"
            >
            </v-img>
            <v-card-text>
              <p class="text-justify text-body-1 text-sm-h5">
                {{ texts.home.who[0] }}
              </p>
              <p class="text-justify text-body-1 text-sm-h5">
                {{ texts.home.who[1] }}
              </p>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn dark color="secondary" class="black--text">
                ¿Quiénes somos?</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-divider inset class="mt-10" color="primary"></v-divider>
      <v-row> </v-row>
      <v-row> </v-row>
    </v-container>
  </div>
</template>

<script>
import Carousel from '@/components/HomeCarousel'
import { TEXTS } from '../helpers/strings'
export default {
  name: 'Home',
  data: function () {
    return {
      texts: TEXTS,
    }
  },
  components: { Carousel },
}
</script>
<style scoped>
.background-sec-trans {
  background: #966dd09f !important;
}
.border-red {
  border: 2px solid red;
  margin: 0 !important;
  bottom: 0 !important;
}
</style>
