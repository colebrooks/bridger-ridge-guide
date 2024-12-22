import { Cartesian3, Ion, Math as CesiumMath, Terrain, CesiumWidget } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

// Your access token can be found at: https://ion.cesium.com/tokens.
// This is the default access token from your ion account

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ZWE0NTgwYi1hYmZmLTQ4ODktYTczOS04MjQ2YjdiOWI2MjYiLCJpZCI6MjYzOTgwLCJpYXQiOjE3MzQ3NTEzNzV9.2Ad8gtF534bVAY_eatXttkDl-BI1L4K9D-1JNtJxOIc';

// Initialize the Cesium Widget in the HTML element with the `cesiumContainer` ID.
const map = new CesiumWidget('cesiumContainer', {
  terrain: Terrain.fromWorldTerrain(),
});    

// Fly the camera to Bridger Bowl at the given longitude, latitude, and height.
map.camera.flyTo({
  destination: Cartesian3.fromDegrees(-110.887222, 45.815556, 3500),
  orientation: {
    heading: CesiumMath.toRadians(270.0),
    pitch: CesiumMath.toRadians(-25.0),
  }
});
