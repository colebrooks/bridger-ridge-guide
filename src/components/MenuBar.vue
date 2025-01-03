<template>
  <div id="menuBar`">
    <IconButton icon="plus-circle" @onClick="addRoute"/>
  </div>
</template>

<script setup>
import IconButton from './common/IconButton.vue';

let recording = false;

function addRoute() {
  recording = !recording;
  console.log('Recording:', recording);
  // TODO: Listen on cesium viewer for clicks to get the coordinates
  // TODO: Consider drawing a line instead of using individual clicks
}

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
</style>
