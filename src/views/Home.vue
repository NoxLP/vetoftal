<template>
  <div class="home mb-sm-16 mb-lg-0">
    <Carousel class="mt-sm-16 mb-sm-16" />
    <br v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.md" />
    <HomeCard
      v-for="(card, idx) in texts"
      :key="idx"
      :textsArray="card.texts"
      :src="card.img"
      :buttonText="card.buttonText"
    />
  </div>
</template>

<script>
import Carousel from '@/components/HomeCarousel'
import HomeCard from '@/components/HomeCard'
import { TEXTS_HOME } from '../helpers/strings'

export default {
  name: 'Home',
  data: function () {
    return {
      texts: TEXTS_HOME,
    }
  },
  components: { Carousel, HomeCard },
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
