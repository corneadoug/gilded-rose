<template>
  <div>
    <h1>Shop</h1>

    <items-view/>
  </div>
</template>

<script>
// Components imports
import ItemsView from "@/components/ItemsView.vue";

export default {
  name: "Shop",
  components: { ItemsView }
};
</script>

<style scoped>
</style>