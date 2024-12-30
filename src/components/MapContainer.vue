<template>
  <div id="mapContainer" @hover="mapHover"></div>
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
</script>

<style scoped></style>
