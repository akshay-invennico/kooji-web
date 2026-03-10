"use client"

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const containerStyle = {
    width: "100%",
    height: "100%"
}

const center = {
  lat: 22.3072,
  lng: 73.1812,
};

const GoogleMaps = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
        >
            <Marker position={center} />
        </GoogleMap>
    ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
            <div className="animate-pulse">Loading Map...</div>
        </div>
    )
}

export default GoogleMaps;