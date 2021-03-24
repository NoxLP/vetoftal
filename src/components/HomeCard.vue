<template>
  <div>
    <!--DESKTOP-->
    <v-container
      v-if="$vuetify.breakpoint.mdAndUp"
      class="mt-16 mt-lg-1 mb-16"
      fluid
    >
      <v-row justify="center" align="center" class="px-10 pl-lg-5 pr-lg-5">
        <v-card height="auto" class="pl-0 rounded-lg" flat>
          <v-card-text>
            <v-row v-if="!inverted" class="pl-0">
              <v-col cols="6" lg="5" class="ml-0 pl-4">
                <v-img class="ml-0 rounded-lg" height="45vh" :src="src">
                </v-img>
              </v-col>
              <v-col cols="5" lg="6" class="ml-16 mt-16">
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[0] }}
                </p>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[1] }}
                </p>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[2] }}
                </p>
              </v-col>
            </v-row>
            <v-row v-if="inverted" class="pl-0">
              <v-col cols="5" lg="6" class="mr-16 mt-16">
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[0] }}
                </p>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[1] }}
                </p>
                <p class="text-justify text-body-1 text-sm-h5">
                  {{ textsArray[2] }}
                </p>
              </v-col>
              <v-col cols="6" lg="5" class="ml-0 pl-4">
                <v-img class="ml-0 rounded-lg" height="45vh" :src="src">
                </v-img>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
    <!--MOBILE-->
    <v-container v-else class="mt-8 mt-sm-16" fluid>
      <v-row align="center" class="px-sm-10">
        <v-col cols="12" md="5" lg="5" class="ml-0 ml-lg-16">
          <v-card height="100%">
            <v-img :src="src" max-height="50vh"> </v-img>
            <v-card-text>
              <p class="text-justify text-body-1 text-sm-h5">
                {{ textsArray[0] }}
              </p>
              <p class="text-justify text-body-1 text-sm-h5">
                {{ textsArray[1] }}
              </p>
              <p class="text-justify text-body-1 text-sm-h5">
                {{ textsArray[2] }}
              </p>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <router-link
                style="text-decoration: none; color: inherit"
                type="button"
                class="btn mr-5"
                :to="{
                  name: to,
                }"
              >
                <v-btn dark color="primary" class="white--text mb-3">
                  {{ buttonText }}</v-btn
                >
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    textsArray: Array,
    buttonText: String,
    src: String,
    inverted: Boolean,
    to: String,
  },
}
</script>

<style lang="scss" scoped></style>
