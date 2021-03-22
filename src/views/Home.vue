<template>
  <div class="home">
    <v-container class="px-0 mt-10 mt-md-16" fluid>
      <v-row class="px-0 px-md-16" justify="center">
        <v-col cols="12" md="10">
          <v-card class="ma-0 pa-0" elevation="13">
            <v-container class="ma-0 pa-0" fluid>
              <v-row class="ma-0 pa-0" justify="center">
                <v-col class="ma-0 pa-0" align="center">
                  <v-carousel
                    class="pa-0 ma-0"
                    delimiter-icon="mdi-minus"
                    hide-delimiter-background
                    :height="carouselHeight"
                    :show-arrows="false"
                  >
                    <v-carousel-item
                      v-for="(item, idx) in items"
                      :key="idx"
                      :src="item.src"
                    >
                      <v-container fluid fill-height class="mt-16">
                        <v-row justify="start" align="end" class="mt-md-16">
                          <v-col
                            cols="12"
                            md="6"
                            class="mt-md-16 ml-0 ml-md-16 mr-3 mr-md-0"
                          >
                            <v-card
                              color="#966dd09f"
                              class="my-16 mb-md-10"
                              width="100%"
                            >
                              <v-card-text class="mb-0 mb-md-10 pb-0">
                                <p
                                  style="white-space: pre-line"
                                  class="text-body-1 text-md-h5 text-left"
                                >
                                  {{ item.text }}
                                </p>
                              </v-card-text>
                              <v-card-actions class="pt-0">
                                <router-link
                                  type="button"
                                  class="btn mr-5"
                                  :to="{
                                    name: item.to,
                                  }"
                                >
                                  <v-btn>Infórmate aquí</v-btn>
                                </router-link>
                              </v-card-actions>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-carousel-item>
                  </v-carousel>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { TEXTS } from '../helpers/strings'

export default {
  name: 'Home',
  data: function () {
    return {
      items: [
        {
          src: require('@/assets/images/placeholder.png'),
          text: TEXTS.carousel.who,
          to: 'who',
        },
        {
          src: require('@/assets/images/carousel/carousel-diseases.jpg'),
          text: TEXTS.carousel.diseases,
          to: 'diseases',
        },
        {
          src: require('@/assets/images/carousel/pet-surgery-1-1241227-1279x1709.jpg'),
          text: TEXTS.carousel.services,
          to: 'services',
        },
      ],
      carouselHeight: this.$vuetify.breakpoint.smAndDown ? '60vh' : '70vh',
    }
  },
  components: {},
}
</script>
<style scoped>
.background-sec-trans {
  /*box-shadow: #d9ffe38e !important;*/
  background: #966dd09f !important;
}
.border-red {
  border: 2px solid red;
  margin: 0 !important;
  bottom: 0 !important;
}
</style>
