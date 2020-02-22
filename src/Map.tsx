import ReactMapGL, { MapStateProps, ViewportProps } from "react-map-gl";
import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map(props: { photos: IPhoto[] }) {
  // @ts-ignore
  const [viewport, setViewport] = useState<ViewportProps>({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  const [minLat, maxLat, minLong, maxLong] = props.photos.reduce(
    ([minLat, maxLat, minLong, maxLong], { position: [lat, long] }) => [
      Math.min(minLat, lat),
      Math.max(maxLat, lat),
      Math.min(minLong, long),
      Math.max(maxLong, long)
    ],
    [0, 0, 0, 0]
  );

  console.log([minLat, maxLat, minLong, maxLong]);

  return (
    <div id="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZGFuaWVsYnVlY2hlbGUiLCJhIjoicjFSZnZSMCJ9.Vkl-6l-AOspSKnXd6A2btA"
        // onViewportChange={viewport => setViewport({ viewport })}
      />
    </div>
  );
}
