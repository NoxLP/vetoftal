<template>
  <v-container fluid fill-height class="mb-16 px-sm-5">
    <v-row align="center" justify="center">
      <v-img
        src="@/assets/images/placeholder.png"
        max-height="60vh"
        contain
        class="mb-16"
      >
      </v-img>
    </v-row>

    <!--SYMPTOMS-->
    <v-row justify="center">
      <v-col>
        <v-card class="mx-1">
          <v-card-title>
            <p class="mx-auto text-h4 text-center font-weight-bold">
              {{ sympTitle.title }}
            </p>
          </v-card-title>
          <v-card-subtitle>
            <p class="text-subtitle-1 text-sm-h6 text-justify font-weight-bold">
              {{ sympTitle.subtitle }}
            </p>
          </v-card-subtitle>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(symptom, idx) in symptoms" :key="idx">
                <v-list-item-icon>
                  <v-icon color="accent">mdi-eye</v-icon>
                </v-list-item-icon>
                <span class="text-body-1"> {{ symptom }}</span>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!--DISEASES-->
    <v-row>
      <v-col>
        <v-card class="mx-1" color="secondary">
          <v-card-title>
            <p class="mx-auto text-h4 text-center font-weight-bold">
              {{ disTitle.title }}
            </p>
          </v-card-title>
          <v-card-subtitle>
            <p class="text-subtitle-1 text-sm-h6 text-justify font-weight-bold">
              {{ disTitle.subtitle }}
            </p>
          </v-card-subtitle>
          <v-card-text class="pa-0">
            <v-expansion-panels focusable>
              <v-expansion-panel v-for="(item, idx) in diseases" :key="idx">
                <v-expansion-panel-header>{{
                  item.title
                }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-img :src="item.img" max-height="30vh" contain> </v-img>
                  <p
                    v-for="(par, idx) in item.paragraphs"
                    :key="idx"
                    class="text-body-2 text-lg-subtitle-1"
                  >
                    {{ par }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  DISEASES,
  SYMPTOMS,
  SYMPTOMS_TITLE,
  DISEASES_TITLE,
} from '../helpers/diseasesStrings'

export default {
  data: function () {
    return {
      sympTitle: SYMPTOMS_TITLE,
      symptoms: SYMPTOMS,
      disTitle: DISEASES_TITLE,
      diseases: DISEASES,
    }
  },
}
</script>

<style scoped></style>
