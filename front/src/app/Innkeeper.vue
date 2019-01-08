<template>
  <div>
      <h1>Innkeeper</h1>
      <div class="dayContainer">
        <span><b>Day:</b> {{dayPassed}}</span>
        <v-btn fab dark small color="indigo">
          <v-icon @click="nextDay" dark>add</v-icon>
        </v-btn>
      </div>

      <items-view/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

// Components imports
import ItemsView from "@/components/ItemsView.vue";

export default {
  name: "Innkeeper",
  components: { ItemsView },
  computed: {
    ...mapState(["dayPassed"])
  },
  methods: {
    ...mapActions(["nextDay"])
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