import { Cartographic, Cartesian3, Ion, Math as CesiumMath, Terrain, CesiumWidget, Cartesian2 } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

// Your access token can be found at: https://ion.cesium.com/tokens.
// This is the default access token from your ion account

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ZWE0NTgwYi1hYmZmLTQ4ODktYTczOS04MjQ2YjdiOWI2MjYiLCJpZCI6MjYzOTgwLCJpYXQiOjE3MzQ3NTEzNzV9.2Ad8gtF534bVAY_eatXttkDl-BI1L4K9D-1JNtJxOIc';

// Initialize the Cesium Widget in the HTML element with the `cesiumContainer` ID.

// Fly the camera to Bridger Bowl at the given longitude, latitude, and height.

class Map {
// Bridger Bowl coords: -110.887222, 45.815556, 3500
// Bridger Bowl heading: 270.0
// Bridger Bowl pitch: -25.0
  #pos = [-110.887222, 45.815556, 3500];
  #heading = 270.0;
  #pitch = -25.0;
  #container = 'mapContainer';

    constructor(container='mapContainer') {
        this.#container = container;
    }

    setCamera(pos, heading, pitch) {
        this.#pos = pos;
        this.#heading = heading;
        this.#pitch = pitch;
    }

    draw() {
        this.map = new CesiumWidget(this.#container, {
          terrain: Terrain.fromWorldTerrain(),
        });

        this.map.camera.flyTo({
          destination: Cartesian3.fromDegrees(...this.#pos),
          orientation: {
            heading: CesiumMath.toRadians(this.#heading),
            pitch: CesiumMath.toRadians(this.#pitch),
          }
        });

    }

    resetCamera() {
      this.map.camera.flyTo({
        destination: Cartesian3.fromDegrees(...this.#pos),
        orientation: {
          heading: CesiumMath.toRadians(this.#heading),
          pitch: CesiumMath.toRadians(this.#pitch),
        }
      });
    }

    getCoords(windowCoords) {
      // TODO: Handle error when pickPosition returns undefined
      let coords = this.map.scene.pickPosition(windowCoords);
      return coords.toString();
    }

    toDegrees(cartesian) {
      let cartographic = Cartographic.fromCartesian(cartesian);
      const longitudeInDegrees = CesiumMath.toDegrees(cartographic.longitude);
      const latitudeInDegrees = CesiumMath.toDegrees(cartographic.latitude);
      return [latitudeInDegrees, longitudeInDegrees];
    }

    drawLine(coords) {
      let line = this.map.entities.add({
        polyline: {
          positions: Cartesian3.fromDegreesArray(coords),
          width: 5,
          material: CesiumMath.Color.BLUE,
        },
      });
    }

    drawRoute(route) {
        // TODO: Take route and draw PolyLine from its path property
    }
}

export { Map };
