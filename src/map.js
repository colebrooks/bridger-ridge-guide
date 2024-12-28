import { Cesium, Cartesian3, Ion, Math as CesiumMath, Terrain, CesiumWidget, ImageryLayer} from 'cesium';
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
    constructor(pos, heading, pitch) {
        this.pos = pos;
        this.heading = heading;
        this.pitch = pitch;
        this.map = new CesiumWidget('cesiumContainer', {
          terrain: Terrain.fromWorldTerrain(),
        });

        this.map.camera.flyTo({
          destination: Cartesian3.fromDegrees(...pos),
          orientation: {
            heading: CesiumMath.toRadians(heading),
            pitch: CesiumMath.toRadians(pitch),
          }
        });
    }

    draw_route(route) {
        // TODO: Take route and draw PolyLine from its path property
    }
}

export { Map };
