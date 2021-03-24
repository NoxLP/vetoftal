<template>
  <div>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-img
          src="@/assets/images/placeholder.png"
          max-height="60vh"
          contain
          class="mb-16"
        >
        </v-img>
      </v-row>
      <v-row align="center" v-if="$vuetify.breakpoint.mdAndUp" class="mt-16">
        <v-col cols="6">
          <v-img src="@/assets/images/placeholder.png" />
        </v-col>
        <v-col cols="5" class="mt-16 ml-0 pl-0 pt-16">
          <span class="text-h4">Patricia Ramírez Perdomo</span>

          <v-list dense class="mt-16">
            <v-list-item v-for="(item, idx) in studies" :key="idx" class="mt-4">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <span class="text-h5">{{ item.text }}</span>
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
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <span class="text-h5">{{ item.text }}</span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { CURRICULUM_STUDIES, CURRICULUM_EXPERIENCE } from '../helpers/strings'
export default {
  data: function () {
    return {
      studies: CURRICULUM_STUDIES,
      experience: CURRICULUM_EXPERIENCE,
    }
  },
}
</script>

<style scoped></style>
