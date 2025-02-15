<template>
  <div id="menuBar`">
    <IconButton id="startRecording" icon="plus-circle" @onClick="$emit('startRecording')"/>
    <IconButton id="drawRoute" icon="pen-tool" @onClick="$emit('drawRoute')"/>
    <IconButton id="openRouteDescription" icon="align-center" @onClick="$emit('openRouteDescription')"/>
  </div>
</template>

<script setup>
import IconButton from './common/IconButton.vue';

defineEmits(['startRecording', 'drawRoute', 'openRouteDescription']);

</script>

<style scoped>
#menuBar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
#drawRoute, #openRouteDescription {
  margin-left: 10px;
}
</style>
