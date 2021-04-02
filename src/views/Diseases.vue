<template>
  <v-container id="diseasesRoot" fluid fill-height class="px-0">
    <v-row
      align="center"
      justify="center"
      class="mx-0 px-0 px-lg-16 mt-2 mt-md-5 mt-lg-0 pa-0"
    >
      <v-col cols="12" md="10" class="px-0 px-lg-3 mx-0">
        <v-card class="px-0 mt-sm-10 mb-3 mx-0 mx-md-10">
          <v-img
            src="@/assets/images/header/priscilla-du-preez-2hc6ocDAsNY-unsplash.jpg"
            :max-height="$vuetify.breakpoint.smAndDown ? '40vh' : '50vh'"
            :height="$vuetify.breakpoint.smAndDown ? '40vh' : '50vh'"
            class="d-flex align-end"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="accent"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
        <!--TITLE-->
        <v-card class="ml-3 mr-8 mt-3 mt-md-12" flat color="transparent">
          <v-card-title>
            <p
              class="mx-auto black--text text--lighten-2 text-h4 text-md-h2 text-center font-weight-bold"
              :style="
                $vuetify.breakpoint.smAndDown ? 'white-space: pre-line' : ''
              "
            >
              {{ disTitle.title }}
            </p>
          </v-card-title>
          <v-card-subtitle class="d-flex justify-center pb-0">
            <p
              class="black--text text--lighten-2 text-subtitle-1 text-sm-h6 text-center text-justify font-weight-bold mb-0"
              style="white-space: pre-line"
            >
              {{ disTitle.subtitle }}
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-0 mt-md-16 mt-lg-0 mb-10 mb-md-0">
      <PageChevron />
    </v-row>

    <!--DISEASES MOBILE-->
    <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center">
      <v-col>
        <v-card class="mx-1" flat>
          <v-card-text class="pa-0">
            <v-expansion-panels focusable>
              <v-expansion-panel v-for="(item, idx) in diseases" :key="idx">
                <v-expansion-panel-header>
                  {{ item.title }}</v-expansion-panel-header
                >
                <v-expansion-panel-content color="#D9FFE32f">
                  <v-img :src="item.img" max-height="30vh" contain class="mb-5">
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
                      </v-row> </template
                  ></v-img>
                  <p
                    v-for="(par, idx) in item.paragraphs"
                    :key="idx"
                    class="text-body-1 text-lg-subtitle-1 mb-5"
                  >
                    {{ par }}
                  </p>
                  <v-card
                    flat
                    tile
                    style="border-top: 1px solid lightgray"
                    class="px-2 pb-2 pt-2"
                    color="#D9FFE32f"
                  >
                    <v-chip-group column>
                      <v-chip
                        label
                        color="primary"
                        v-for="(symptom, idx) in item.symptoms"
                        :key="idx"
                        class="pl-2 pr-2 mt-2"
                      >
                        {{ symptom }}
                      </v-chip>
                    </v-chip-group>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <DiseasesCard
      v-else
      v-for="(item, idx) in diseases"
      :key="idx"
      class="mt-0"
      :title="item.title"
      :textsArray="item.paragraphs"
      :src="item.img"
      :symptoms="item.symptoms"
      :inverted="idx % 2 !== 0"
      :last="idx === diseases.length - 1"
      :idx="idx"
      @chevronClick="onChevronClick"
    />
  </v-container>
</template>

<script>
import DiseasesCard from '../components/DiseasesCard'
import PageChevron from '../components/PageChevron'
import {
  DISEASES,
  SYMPTOMS,
  SYMPTOMS_TITLE,
  DISEASES_TITLE,
} from '../helpers/diseasesStrings'

export default {
  name: 'diseases',
  data: function () {
    return {
      sympTitle: SYMPTOMS_TITLE,
      symptoms: SYMPTOMS,
      disTitle: DISEASES_TITLE,
      diseases: DISEASES,
    }
  },
  components: { DiseasesCard, PageChevron },
  methods: {
    onChevronClick(idx) {
      document
        .getElementById(`dCard${idx + 1}`)
        .scrollIntoView({ behavior: 'smooth' })
    },
  },
  mounted() {
    this.diseases.map((x) => (x['expandHeaderHiddenColor'] = 'white'))
  },
}
</script>

<style scoped>
.text-shadow {
  text-shadow: black 1px 0 10px !important;
  /*1px 1px 2px black, 0 0 1em var(--v-accent), 0 0 0.2em var(--v-accent)*/
}
</style>
