<template>
  <div id="mapContainer" @click="getCoords"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Map } from '../libs/map'

defineProps({
  // TODO: Put our Cesium camera settings here
  center: Object,
  zoom: Number,
})

let mapInstance = null

onMounted(() => {
  mapInstance = new Map('mapContainer')
  mapInstance.draw()
})

function getCoords(event) {
  // TODO: Use cesium's scene.pickPosition function to get the coordinates of the cursor
  let windowCoords = {
    x: event.clientX,
    y: event.clientY,
  }
  let mapCoords = mapInstance.getCoords(windowCoords)
  console.log(`GOT MAP COORDS: ${mapCoords}`)
}

</script>

<style scoped></style>
