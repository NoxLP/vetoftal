<template>
  <div class="d-flex justify-center mx-0 mt-sm-12 mb-sm-12">
    <v-btn
      color="white"
      class="mt-5 mt-lg-0"
      fab
      small
      @click="chevronNavigation"
      elevation="2"
    >
      <v-icon color="primary" v-if="!up" x-large dark>mdi-chevron-down</v-icon>
      <v-icon color="primary" v-else x-large dark>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    up: Boolean,
    self: Boolean,
    elementId: String,
    idx: Number,
  },
  methods: {
    chevronNavigation: function () {
      if (!this.up) {
        if (this.self) {
          this.$el.scrollIntoView({ behavior: 'smooth' })
        } else if (this.elementId && this.elementId.length === 0) {
          document
            .getElementById(this.elementId)
            .scrollIntoView({ behavior: 'smooth' })
        } else {
          console.log('')
          this.$emit('chevronClick', this.idx)
        }
      } else
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped></style>
