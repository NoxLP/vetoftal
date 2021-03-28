<template>
  <div>
    <!--DESKTOP-->
    <v-container class="mt-16 mt-lg-1 mb-16" fluid>
      <v-row justify="center" align="center">
        <v-card
          height="auto"
          class="pa-0 py-16 rounded-0"
          flat
          :color="!inverted ? '#D9FFE32f' : 'transparent'"
        >
          <v-card-text>
            <v-row v-if="!inverted" class="pl-0 pt-0" align="center">
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
                <v-card
                  flat
                  tile
                  style="border-top: 1px solid lightgray"
                  class="px-2"
                  color="#D9FFE32f"
                >
                  <v-chip-group column class="mt-5">
                    <v-chip
                      color="primary"
                      v-for="(symptom, idx) in symptoms"
                      :key="idx"
                      class="pl-1 pr-2 ml-3"
                    >
                      {{ symptom }}
                    </v-chip>
                  </v-chip-group>
                </v-card>
              </v-col>
            </v-row>
            <v-row v-else class="pl-0" align="center">
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
                  class="px-2"
                >
                  <v-chip-group column class="mt-5">
                    <v-chip
                      color="primary"
                      v-for="(symptom, idx) in symptoms"
                      :key="idx"
                      class="pl-1 pr-2 ml-3"
                    >
                      {{ symptom }}
                    </v-chip>
                  </v-chip-group>
                </v-card>
              </v-col>
              <v-col cols="5" class="ml-0 pl-4">
                <v-img class="ml-0 rounded-lg" height="45vh" :src="src">
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
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
    <PageChevron :up="last" />
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
  },
}
</script>

<style lang="scss" scoped></style>
