import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
	// Transform the search result object into
	// { latitude: 51.5103, longitude: 7.49347 } object

	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));

	const center = getCenter(coordinates);

	const [viewport, setViewport] = React.useState({
		width: "100%",
		height: "100%",
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 8,
	});

	const [selectedLocation, setSelectedLocation] = useState({});

	return (
		<ReactMapGL
			mapStyle="mapbox://styles/haider-abbas/cks7v4z6j2gvn17p450cxla2y"
			mapboxApiAccessToken={process.env.mapbox_key}
			{...viewport}
			onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
		>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}
					>
						<p
							role="img"
							onClick={() => setSelectedLocation(result)}
							className="cursor-pointer text-2xl animate-bounce"
						>
							📌
						</p>
					</Marker>
					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							latitude={result.lat}
							longitude={result.long}
						>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</ReactMapGL>
	);
}

export default Map;
