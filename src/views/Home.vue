<template>
  <div class="home">
    <Carousel />
    <v-container class="mt-16">
      <v-row>
        <v-col cols="12" md="6">
          <v-card elevation="8">
            <v-img
              src="@/assets/images/home/sarandy-westfall--itLKdE7ojA-unsplash.jpg"
            >
            </v-img>
          </v-card>
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
  /*box-shadow: #d9ffe38e !important;*/
  background: #966dd09f !important;
}
.border-red {
  border: 2px solid red;
  margin: 0 !important;
  bottom: 0 !important;
}
</style>
