<template>
  <div class="d-flex justify-center mx-0 mt-sm-12 mb-sm-12">
    <v-btn
      color="primary lighten-3"
      class="mt-5 mt-lg-0"
      fab
      small
      @click="chevronNavigation"
      elevation="2"
    >
      <v-icon v-if="!up" x-large dark>mdi-chevron-down</v-icon>
      <v-icon v-else x-large dark>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    up: Boolean,
    elementId: String,
  },
  methods: {
    chevronNavigation: function () {
      if (!this.up) {
        if (!this.elementId || this.elementId.length === 0)
          this.$el.scrollIntoView({ behavior: 'smooth' })
        else
          document
            .getElementById(this.elementId)
            .scrollIntoView({ behavior: 'smooth' })
      } else
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped></style>
