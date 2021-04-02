<template>
  <div :class="up ? '' : 'd-flex justify-center mx-0 mt-sm-12 mb-sm-12'">
    <v-btn
      v-if="up"
      ref="btn"
      color="primary darken-2"
      class="mt-5 mt-lg-0 mr-sm-8"
      fab
      fixed
      bottom
      right
      :style="`bottom: ${bottom}px !important`"
      v-scroll="onScroll"
      v-show="show"
      @click="chevronNavigation"
      elevation="5"
    >
      <v-icon color="white" x-large dark>mdi-chevron-up</v-icon>
    </v-btn>
    <v-btn
      v-else
      color="white"
      class="mt-5 mt-lg-0"
      small
      fab
      @click="chevronNavigation"
      elevation="2"
    >
      <v-icon color="primary" x-large dark>mdi-chevron-down</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: false,
      bottom: 0,
    }
  },
  props: {
    up: Boolean,
    footerHeight: Number,
    elementId: String,
    idx: Number,
  },
  methods: {
    chevronNavigation: function () {
      if (!this.up) {
        if (this.elementId && this.elementId.length !== 0) {
          document
            .getElementById(this.elementId)
            .scrollIntoView({ behavior: 'smooth' })
        } else if (this.idx !== undefined) {
          this.$emit('chevronClick', this.idx)
        } else {
          //if (this.self)
          this.$el.scrollIntoView({ behavior: 'smooth' })
        }
      } else
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
    },
    onScroll: function (e) {
      if (typeof window === 'undefined' || !this.up) return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.show = top > 500

      const totalScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const currentScroll = document.documentElement.scrollTop
      const height = this.$refs.btn.$el.clientHeight
      const scrollThreshold = totalScroll - this.footerHeight + height
      const diff = currentScroll - scrollThreshold

      this.bottom =
        currentScroll > scrollThreshold ? diff + height * 0.5 : height
    },
  },
}
</script>

<style lang="scss" scoped></style>
