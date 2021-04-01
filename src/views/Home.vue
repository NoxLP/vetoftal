<template>
  <div class="home mb-sm-16 mb-lg-0">
    <Carousel class="mt-sm-12 mb-sm-12" />
    <PageChevron />
    <BackgroundCard
      v-for="(card, idx) in texts"
      :key="idx"
      :textsArray="card.texts"
      :src="card.img"
      :buttonText="card.buttonText"
      :inverted="idx % 2 !== 0"
      :to="card.to"
      :last="idx === texts.length - 1"
      :idx="idx"
      @chevronClick="onChevronClick"
    />
  </div>
</template>

<script>
import Carousel from '@/components/HomeCarousel'
import BackgroundCard from '@/components/BackgroundCard'
import PageChevron from '../components/PageChevron'
import { TEXTS_HOME } from '../helpers/strings'

export default {
  name: 'Home',
  components: { Carousel, BackgroundCard, PageChevron },
  data: function () {
    return {
      texts: TEXTS_HOME,
    }
  },
  methods: {
    onChevronClick(idx) {
      console.log('go to ', idx + 1)
      document
        .getElementById(`bCard${idx + 1}`)
        .scrollIntoView({ behavior: 'smooth' })
    },
  },
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
