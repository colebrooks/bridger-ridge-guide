class Route {
    constructor(name, coords, desc, camera, pitch, heading, polyline) {
        this.name = name;
        this.coords = coords;
        this.desc = desc;
        this.camera = camera;
        this.pitch = pitch;
        this.heading = heading;
        this.polyline = polyline;
    }

    static getRouteFromPolyline(polylineId) {
      // TODO: Look through all routes and return the one with the matching polyline
    }
}

export { Route };
