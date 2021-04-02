<template>
  <div :id="`dCard${idx}`">
    <!--DESKTOP-->
    <v-container
      class="mt-0 mt-lg-1 mb-5 mx-0 px-0"
      fluid
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-row justify="center" align="center">
        <v-card
          height="100vh"
          class="pa-0 pb-5 pt-0 pt-lg-16 rounded-0 mb-0"
          flat
          :color="!inverted ? '#D9FFE32f' : 'transparent'"
        >
          <v-container fill-height fluid>
            <v-row v-if="!inverted" class="pl-0 pt-0 pl-10" align="center">
              <!--IMAGE-->
              <v-col cols="5" class="ml-0 pl-4">
                <v-img
                  class="ml-0 rounded-lg elevation-20"
                  height="45vh"
                  :src="src"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="accent"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>

              <!--TEXTS-->
              <v-col cols="6" class="ml-16 mt-16 pt-0">
                <h1 class="mb-10 mt-0">{{ title }}</h1>

                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[0] }}
                </p>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[1] }}
                </p>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[2] }}
                </p>

                <!--SYMPTOMS CHIPS-->
                <v-card
                  flat
                  tile
                  style="border-top: 1px solid lightgray"
                  class="px-2 mt-3"
                  color="#D9FFE32f"
                >
                  <v-chip-group color="transparent">
                    <span
                      style="background-color: #966dd0"
                      class="rounded-pill px-3 py-2 ml-3 white--text mt-5"
                      v-for="(symptom, idx) in symptoms"
                      :key="idx"
                    >
                      {{ symptom }}
                    </span>
                  </v-chip-group>
                </v-card>
              </v-col>
            </v-row>

            <v-row v-else class="pl-10" align="center">
              <v-col cols="6" class="mr-16 mt-16">
                <h1 class="mb-10 mt-0">{{ title }}</h1>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[0] }}
                </p>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[1] }}
                </p>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[2] }}
                </p>
                <v-card
                  flat
                  tile
                  style="border-top: 1px solid lightgray"
                  class="px-2 mt-3"
                >
                  <v-chip-group column color="transparent">
                    <span
                      style="background-color: #966dd0"
                      class="rounded-pill px-3 py-2 ml-3 white--text mt-5"
                      v-for="(symptom, idx) in symptoms"
                      :key="idx"
                    >
                      {{ symptom }}
                    </span>
                  </v-chip-group>
                </v-card>
              </v-col>
              <v-col cols="5" class="ml-0 pl-4">
                <v-img
                  class="ml-0 rounded-lg elevation-20"
                  height="45vh"
                  :src="src"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="accent"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>

            <!--CHEVRON-->
            <v-row justify="center" align="end" v-if="!last">
              <PageChevron :idx="idx" @chevronClick="onChevronClick" />
            </v-row>
          </v-container>
        </v-card>
      </v-row>
    </v-container>

    <!--MOBILE-->
    <v-container class="mt-8 mt-sm-16 pr-16" fluid>
      <v-row align="center" class="px-sm-10">
        <v-col cols="12" class="ml-0 ml-lg-16">
          <v-card height="100%" max-width="93vw" class="pb-3" elevation="5">
            <v-img :src="src" max-height="50vh">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="accent"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title>
              <v-row justify="center">
                <h3 class="text-center mb-10 mt-0">{{ title }}</h3>
              </v-row>
            </v-card-title>
            <v-card-text>
              <p
                v-for="(par, idx) in textsArray"
                :key="idx"
                class="text-justify text-body-1 text-lg-subtitle-1 mb-5"
              >
                {{ par }}
              </p>
            </v-card-text>
            <!--SYMPTOMS CHIPS-->
            <v-card-actions style="border-top: 1px solid lightgray">
              <v-chip-group column>
                <span
                  style="background-color: hsl(265, 51%, 68%)"
                  class="rounded-pill px-3 py-1 ml-3 mt-3 white--text text-body-2"
                  v-for="(symptom, idx) in symptoms"
                  :key="idx"
                >
                  {{ symptom }}
                </span>
              </v-chip-group>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PageChevron from './PageChevron'

export default {
  components: { PageChevron },
  props: {
    title: String,
    textsArray: Array,
    src: String,
    symptoms: Array,
    inverted: Boolean,
    last: Boolean,
    idx: Number,
  },
  methods: {
    onChevronClick(idx) {
      this.$emit('chevronClick', idx)
    },
  },
}
</script>

<style scoped></style>
