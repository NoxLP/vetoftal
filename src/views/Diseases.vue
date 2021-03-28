<template>
  <v-container id="diseasesRoot" fluid fill-height class="mb-16 px-0 px-sm-5">
    <v-row align="center" justify="center">
      <v-img
        src="@/assets/images/placeholder.png"
        :max-height="$vuetify.breakpoint.smAndDown ? '60vh' : '70vh'"
        contain
        class="mb-16"
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
    </v-row>

    <v-row justify="center">
      <PageChevron />
    </v-row>

    <!--TITLE-->
    <v-row id="title">
      <v-col>
        <v-card class="mx-1" flat>
          <v-card-title>
            <p
              class="mx-auto text-h4 text-md-h2 text-center font-weight-bold"
              :style="
                $vuetify.breakpoint.smAndDown ? 'white-space: pre-line' : ''
              "
            >
              {{ disTitle.title }}
            </p>
          </v-card-title>
          <v-card-subtitle class="d-flex justify-center">
            <p
              class="text-subtitle-1 text-sm-h6 text-center text-justify font-weight-bold"
              style="white-space: pre-line"
            >
              {{ disTitle.subtitle }}
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
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

<style scoped></style>
