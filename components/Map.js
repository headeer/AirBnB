import ReactMapGl, {Marker, Popup} from 'react-map-gl';
import {useState} from "react";
import getCenter from 'geolib/es/getCenter';

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({});
    const coordinates = searchResults.map(results => ({
        longitude: results.long,
        latitude: results.lat,
    }));

    const center = getCenter(coordinates);
    const [viewport, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGl
            mapStyle='mapbox://styles/kowalp102/ckws9bkrc1nrd14o1iwkkaejg'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewPort(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.longitude}>
                    <Marker longitude={result.longitude} latitude={result.latitude} offsetLeft={-20} offsetTop={-10}>
                        <p role='img'
                           className='cursor-pointer text-2xl animate-bounce'
                           onClick={() => setSelectedLocation(result)}
                           aria-label='push-pin'>
                            🖊️
                        </p>
                    </Marker>
                    {selectedLocation.long === result.long ? (
                        <Popup
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                            onClose={() => setSelectedLocation({})}
                        >
                            {result.title}
                        </Popup>
                    ) : false}
                </div>
            ))}

        </ReactMapGl>
    );
}

export default Map;
