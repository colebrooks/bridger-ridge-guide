<template>
  <div id="menuBar`">
    <IconButton icon="plus-circle" @onClick="$emit('startRecording')"/>
    <IconButton icon="pen-tool" @onClick="$emit('drawRoute')"/>
  </div>
</template>

<script setup>
import IconButton from './common/IconButton.vue';

defineEmits(['startRecording', 'drawRoute']);

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
