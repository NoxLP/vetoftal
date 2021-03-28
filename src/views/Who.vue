<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center" class="mt-10 mt-lg-0">
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
      <PageChevron elementId="curriculum" />
    </v-row>

    <!--DESKTOP-->
    <v-row
      id="curriculum"
      justify="center"
      align="center"
      v-if="$vuetify.breakpoint.lgAndUp"
      class="mt-16 mb-16"
    >
      <v-card height="auto" class="pa-0 py-16 rounded-0" flat color="#D9FFE32f">
        <v-card-text>
          <v-row justify="center" align="center">
            <v-col cols="5" offset="1">
              <v-avatar size="30vw" class="mx-auto elevation-14">
                <v-img src="@/assets/images/placeholder.png">
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
              </v-avatar>
            </v-col>
            <v-col cols="6" class="mt-0 ml-0 pl-0 pt-16 pr-16">
              <span class="text-h3 font-weight-bold primary--text"
                >Patricia Ramírez Perdomo</span
              >

              <v-card color="transparent" class="mt-10 mr-10" flat>
                <v-list dense class="mt-5 ml-0 pl-0" color="transparent">
                  <v-list-item
                    v-for="(item, idx) in studies"
                    :key="idx"
                    class="mt-4 ml-0"
                  >
                    <!--<v-list-item-icon>
              <v-icon color="accent">{{ item.icon }}</v-icon>
            </v-list-item-icon>-->
                    <v-list-item-content>
                      <span class="text-h5">{{ item.text }}</span>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list dense class="mt-10" color="transparent">
                  <v-list-item
                    v-for="(item, idx) in experience"
                    :key="idx"
                    class="mt-4"
                  >
                    <!--<v-list-item-icon>
              <v-icon color="accent">{{ item.icon }}</v-icon>
            </v-list-item-icon>-->
                    <v-list-item-content>
                      <span class="text-h5 text-justify">{{ item.text }}</span>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!--MOBILE-->
    <v-row v-else class="mt-16 mb-16">
      <v-col>
        <v-card class="mx-sm-10 mx-md-16 px-sm-5 px-md-10">
          <v-img src="@/assets/images/placeholder.png">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="accent"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>

          <p class="text-h4 text-center">Patricia Ramírez Perdomo</p>

          <v-list dense class="mt-10">
            <v-list-item v-for="(item, idx) in studies" :key="idx" class="mt-4">
              <v-list-item-icon>
                <v-icon color="accent">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <span class="text-body-1 text-sm-h5">{{ item.text }}</span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list dense class="mt-10">
            <v-list-item
              v-for="(item, idx) in experience"
              :key="idx"
              class="mt-4"
            >
              <v-list-item-icon>
                <v-icon color="accent">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <span class="text-body-1 text-sm-h5">{{ item.text }}</span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageChevron from '../components/PageChevron'
import {
  CURRICULUM_STUDIES,
  CURRICULUM_EXPERIENCE,
} from '../helpers/whoStrings'
export default {
  data: function () {
    return {
      studies: CURRICULUM_STUDIES,
      experience: CURRICULUM_EXPERIENCE,
    }
  },
  components: { PageChevron },
}
</script>

<style scoped></style>
