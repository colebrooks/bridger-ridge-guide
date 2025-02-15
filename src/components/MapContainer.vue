<template>
  <div id="mapContainer" @click="clickHandler"></div>
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

function clickHandler(event) {
  let windowCoords = {
    x: event.clientX,
    y: event.clientY,
  }
  const routeId = mapInstance.pickRoute(windowCoords)
  if (routeId) {
    console.log(`GOT ROUTE: ${routeId}`)
  }
}

function getCoords(event) {
  // TODO: Only call this on click when recording is active via the button
  let windowCoords = {
    x: event.clientX,
    y: event.clientY,
  }
  let mapCoords = mapInstance.getCoords(windowCoords)
  console.log(`GOT MAP COORDS: ${JSON.stringify(mapCoords)}`)
}

</script>

<style scoped>
  #mapContainer {
    width: 100%;
    height: 100%;
  }
</style>
