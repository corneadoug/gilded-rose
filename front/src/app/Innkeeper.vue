<template>
  <div>
      <h1>Innkeeper</h1>
      <div class="dayContainer">
        <span><b>Day:</b> {{dayPassed}}</span>
        <v-btn fab dark small color="indigo">
          <v-icon @click="nextDay" dark>add</v-icon>
        </v-btn>
      </div>

    <!-- Filtering Form -->
    <filtering-form/>

    <!-- List of Products -->
    <v-layout row wrap justify-center>
      <item-card v-for="item in filteredInventory" :key="item.id" :item="item"/>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

// Components imports
import ItemCard from "@/components/ItemCard.vue";
import FilteringForm from "@/components/FilteringForm.vue";

export default {
  name: "Innkeeper",
  components: { ItemCard, FilteringForm },
  computed: {
    ...mapGetters(["filteredInventory"]),
    ...mapState(["dayPassed"])
  },
  methods: {
    ...mapActions(["fetchInventory", "nextDay"])
  },
  mounted() {
    this.fetchInventory();
  }
};
</script>

<style scoped>
.dayContainer {
  position: absolute;
  top: 0px;
  right: 10px;
}
</style>