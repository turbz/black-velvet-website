import React from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: -26.04934,
      lng: 28.02249,
    },
    zoom: 15,
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}
