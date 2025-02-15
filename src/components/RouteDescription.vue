<template>
  <div id="descriptionContainer">
    <h1>Route Description</h1>
    <p>Click on the map to select a route</p>
  </div>
</template>

<script setup>
import { Route } from '../models/route'

defineProps({
  route: Route
})

</script>

<style scoped>
  #descriptionContainer {
    position: absolute;
    z-index: 1;
    width: 30%;
    height: 90vh;
    background-color: rgba(0, 0, 0, 0.8);
    border: 2px solid grey;
    border-radius: 25px;
  }
</style>
