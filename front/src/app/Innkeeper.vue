<template>
  <div>
    <h1>Innkeeper</h1>
    <div class="dayContainer">
      <span>
        <b>Day:</b>
        {{dayPassed}}
      </span>
      <v-btn fab dark small color="indigo">
        <v-icon @click="nextDay" dark>add</v-icon>
      </v-btn>
    </div>

    <GChart type="BubbleChart" :data="graphData"/>

    <items-view/>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import { GChart } from "vue-google-charts";

// Components imports
import ItemsView from "@/components/ItemsView.vue";

export default {
  name: "Innkeeper",
  components: { ItemsView, GChart },
  computed: {
    ...mapState(["dayPassed"]),
    ...mapGetters(["graphData"])
  },
  methods: {
    ...mapActions(["nextDay"])
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}

.dayContainer {
  position: absolute;
  top: 0px;
  right: 10px;
}
</style>