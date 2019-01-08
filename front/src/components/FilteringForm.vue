<template>
  <v-layout row justify-center class="filterForm">
    <v-layout row class="searchContainer">
      <v-icon>search</v-icon>
      <v-text-field @input="filterChanged" v-model="name" label="Name" data-vv-name="name" required></v-text-field>
    </v-layout>

    <v-range-slider @change="filterChanged" label="Quality" v-model="quality" :max="100" :min="0" :step="10"></v-range-slider>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilteringForm",
  data() {
    return {
      name: "",
      quality: [0, 100]
    };
  },
  methods: {
    ...mapActions(["modifyFilter"]),
    filterChanged() {
      this.modifyFilter({ name: this.name, minQuality: this.quality[0], maxQuality: this.quality[1] });
    }
  }
};
</script>

<style scoped>
.filterForm {
  padding: 10px 60px;
  align-items: center;
}

.searchContainer {
  align-items: center;
  margin: 0px 30px;
}
</style>