<template>
  <div class="home">
    <Carousel />
    <v-container class="mt-16" fluid>
      <v-row align="center">
        <v-col cols="12" md="4" offset-md="2">
          <v-card elevation="8">
            <v-img
              src="@/assets/images/home/sarandy-westfall--itLKdE7ojA-unsplash.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="ml-md-16">
          <p
            class="text-justify text-body-1 text-md-h5"
            style="white-space: pre-line"
          >
            Nuestra experiencia nos avala, diez años ejerciendo la profesión son
            una garantía de profesionalidad y buen hacer.
          </p>
          <p
            class="text-justify text-body-1 text-md-h5"
            style="white-space: pre-line"
          >
            Una formación continua nos prepara para afrontar cualquier
            contingencia, siempre pensando en el bienestar de nuestras queridas
            mascotas.
          </p>
        </v-col>
      </v-row>
      <v-row> </v-row>
      <v-row> </v-row>
    </v-container>
  </div>
</template>

<script>
import Carousel from '@/components/HomeCarousel'
export default {
  name: 'Home',

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
