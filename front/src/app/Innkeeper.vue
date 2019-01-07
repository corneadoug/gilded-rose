<template>
  <div>
    <h1>Innkeeper</h1>

    <v-list>
      <v-list-tile v-for="item in inventory" :key="item.id">
        <v-list-tile-content>
          <v-list-tile-title v-text="item.name"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Innkeeper",
  components: {},
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