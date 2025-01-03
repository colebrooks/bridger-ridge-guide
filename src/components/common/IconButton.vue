<template>
  <button class="iconButton" @click="$emit('onClick')"><vue-feather :type="icon"></vue-feather></button>
</template>

<script setup>

defineProps({
  icon: String,
})

// TODO: Emit event when button is clicked

</script>

<style scoped>
.iconButton {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
