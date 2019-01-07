<template>
  <v-card class="itemCard" :color="bgColor" dark>
    <v-layout column class="cardLayout">
      <!-- Header of the card -->
      <div class="typeContainer">
        <span class="font-weight-light">{{item.type}}</span>
      </div>

      <!-- Card main content, takes remaining space -->
      <div class="itemName">
        <span class="font-weight-bold">{{item.name}}</span>
      </div>

      <!-- Footer of the Card -->
      <v-card-actions class="valuesContainer">
          <v-layout align-center justify-end>
            <v-icon class="mr-1">euro_symbol</v-icon>
            <span class="subheading mr-2">{{item.quality}}</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">history</v-icon>
            <span class="subheading">{{item.sellIn}}</span>
          </v-layout>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    bgColor: function() {
      if (this.item.type === "BACKSTAGE_PASS") {
        return "#434B56";
      } else if (this.item.type === "LEGENDARY") {
        return "#FDB772";
      } else if (this.item.type === "CONJURED") {
        return "#FA5366";
      } else {
        return "#26c6da";
      }
    }
  }
};
</script>

<style scoped>
.itemCard {
  width: 200px;
  height: 200px;
  margin: 10px;
}

.cardLayout {
  height: 100%;
}

.itemName {
  flex-grow: 1;
  padding: 5px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.typeContainer {
  height: 40px;
  padding: 5px;
}

.valuesContainer {
  height: 40px;
}
</style>