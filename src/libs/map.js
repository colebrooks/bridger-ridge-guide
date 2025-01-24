import { Cartographic, Cartesian3, Ion, Math as CesiumMath, Terrain, CesiumWidget, Cartesian2 } from 'cesium';
import * as Cesium from 'cesium';
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

// Super Coulouir coords:
// [-1591366.2692207324, -4161089.8846470844, 4552598.874275794],
// [-1591342.2894572392, -4161068.6354664164, 4552596.324623287],
// [-1591313.9771098637, -4161043.967905073, 4552589.800435255],
// [-1591287.2023747794, -4161023.9738406143, 4552587.536972579],
// [-1591271.8678851144, -4161008.250100535, 4552585.000374483],
// [-1591249.3404765392, -4160993.4159568637, 4552582.756728149],
// [-1591232.80592192, -4160987.6163166394, 4552581.104468445]

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

        // TODO: This is just a test, move this to draw on a button click
        this.drawSuperCouloir();
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
      // TODO: Keep track of the returned line in a collection
      // TODO: Listen for click events on the line: https://cesium.com/learn/cesiumjs-learn/cesiumjs-creating-entities/#picking
      let line = this.map.entities.add({
        polyline: {
          positions: coords,
          width: 5,
          material: Cesium.Color.AQUA,
        },
      });
      return line.id
    }

    drawSuperCouloir() {
        let super_coulouir_coords = [
          [-1591366.2692207324, -4161089.8846470844, 4552598.874275794],
          [-1591342.2894572392, -4161068.6354664164, 4552596.324623287],
          [-1591313.9771098637, -4161043.967905073, 4552589.800435255],
          [-1591287.2023747794, -4161023.9738406143, 4552587.536972579],
          [-1591271.8678851144, -4161008.250100535, 4552585.000374483],
          [-1591249.3404765392, -4160993.4159568637, 4552582.756728149],
          [-1591232.80592192, -4160987.6163166394, 4552581.104468445]
        ]
      let cart_coords = [];
      for (const coord of super_coulouir_coords) {
        cart_coords.push(Cartesian3.fromArray(coord));
      }

      this.drawLine(cart_coords);
    }

    pickRoute(windowPosition) {
      let picked = this.map.scene.pick(windowPosition, 10, 10);
      if (Cesium.defined(picked)) {
        const id = Cesium.defaultValue(picked.id, picked.primitive.id);
        if (id instanceof Cesium.Entity) {
          return id.id;
        }
      }
      return undefined;
    }
}

export { Map };
