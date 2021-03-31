<template>
  <v-container id="diseasesRoot" fluid fill-height>
    <v-row align="center" justify="center" class="pa-0">
      <v-col cols="10">
        <v-card class="mt-sm-10 mb-3 mx-10">
          <v-img
            src="@/assets/images/header/priscilla-du-preez-2hc6ocDAsNY-unsplash.jpg"
            :max-height="$vuetify.breakpoint.smAndDown ? '60vh' : '70vh'"
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
            <v-spacer></v-spacer>
            <!--TITLE-->
            <v-card class="mx-1" flat color="transparent">
              <v-card-title>
                <p
                  class="mx-auto text-shadow white--text text--lighten-2 text-h4 text-md-h2 text-center font-weight-bold"
                  :style="
                    $vuetify.breakpoint.smAndDown ? 'white-space: pre-line' : ''
                  "
                >
                  {{ disTitle.title }}
                </p>
              </v-card-title>
              <v-card-subtitle class="d-flex justify-center">
                <p
                  class="text-shadow white--text text--lighten-2 text-subtitle-1 text-sm-h6 text-center text-justify font-weight-bold"
                  style="white-space: pre-line"
                >
                  {{ disTitle.subtitle }}
                </p>
              </v-card-subtitle>
            </v-card>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-0">
      <PageChevron />
    </v-row>

    <!--DISEASES MOBILE-->
    <v-row v-if="$vuetify.breakpoint.smAndDown">
      <v-col>
        <v-card class="mx-1" flat>
          <v-card-text class="pa-0">
            <v-expansion-panels focusable>
              <v-expansion-panel v-for="(item, idx) in diseases" :key="idx">
                <v-expansion-panel-header>
                  {{ item.title }}</v-expansion-panel-header
                >
                <v-expansion-panel-content color="#D9FFE32f">
                  <v-img :src="item.img" max-height="30vh" contain>
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
                    class="text-body-2 text-lg-subtitle-1"
                  >
                    {{ par }}
                  </p>
                  <v-card
                    flat
                    tile
                    style="border-top: 1px solid lightgray"
                    class="px-2"
                    color="#D9FFE32f"
                  >
                    <v-chip-group column>
                      <v-chip
                        color="primary"
                        v-for="(symptom, idx) in item.symptoms"
                        :key="idx"
                        class="pl-1 pr-2"
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
      :title="item.title"
      :textsArray="item.paragraphs"
      :src="item.img"
      :symptoms="item.symptoms"
      :inverted="idx % 2 !== 0"
      :last="idx === diseases.length - 1"
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
