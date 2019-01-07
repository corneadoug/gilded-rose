<template>
  <div>
    <h1>Innkeeper</h1>

    <v-layout row wrap justify-center>
      <item-card v-for="item in inventory" :key="item.id" :item="item"/>
    </v-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

// Components imports
import ItemCard from '@/components/ItemCard.vue';

export default {
  name: "Innkeeper",
  components: { ItemCard },
  computed: {
    ...mapState(["inventory"])
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