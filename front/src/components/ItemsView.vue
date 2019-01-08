<template>
  <div>
    <!-- Filtering Form -->
    <filtering-form/>

    <!-- List of Products -->
    <v-layout row wrap justify-center>
      <item-card :clickable="clickable" @click="$emit('click', item)" v-for="item in filteredInventory" :key="item.id" :item="item"/>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components imports
import ItemCard from "@/components/ItemCard.vue";
import FilteringForm from "@/components/FilteringForm.vue";

export default {
  name: "ItemsView",
  components: { ItemCard, FilteringForm },
  props: {
    clickable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["filteredInventory"])
  },
  methods: {
    ...mapActions(["fetchInventory", "modifyFilter"])
  },
  mounted() {
    this.fetchInventory();
    // Reset Filters
    this.modifyFilter();
  }
};
</script>

<style scoped>
.cartable:hover {

}
</style>