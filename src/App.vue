<script setup>
import MapContainer from './components/MapContainer.vue'
import MenuBar from './components/MenuBar.vue';
import RouteDescription from './components/RouteDescription.vue';

let isDescPanelOpen = false;

function transitionDescPanel() {
  console.log('Transitioning description panel')
  isDescPanelOpen = !isDescPanelOpen;
}

</script>

<template>
  <header>
    <MenuBar @open-route-description="transitionDescPanel" />
  </header>

  <main>
    <div id="contentWrapper">
      <Transition>
        <RouteDescription />
      </Transition>
      <MapContainer />
    </div>
  </main>
</template>

<style scoped>
  #contentWrapper {
    height: 90vh;
  }
</style>
