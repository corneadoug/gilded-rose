<template>
  <div>
    <h1>Innkeeper</h1>

    <!-- Filtering Form -->
    <filtering-form/>

    <!-- List of Products -->
    <v-layout row wrap justify-center>
      <item-card v-for="item in filteredInventory" :key="item.id" :item="item"/>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components imports
import ItemCard from '@/components/ItemCard.vue';
import FilteringForm from '@/components/FilteringForm.vue';

export default {
  name: "Innkeeper",
  components: { ItemCard, FilteringForm },
  computed: {
    ...mapGetters(["filteredInventory"])
  },
  methods: {
    ...mapActions(["fetchInventory"])
  },
  mounted() {
    this.fetchInventory();
  }
};
</script>

<style scoped>
</style>