import ReactMapGl from 'react-map-gl';
import {useState} from "react";

function Map(props) {
    const [viewport, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: 32.32,
        longitude: 12.12,
        zoom: 11,

    });

    return (
        <ReactMapGl
            mapStyle='mapbox://styles/kowalp102/ckws9bkrc1nrd14o1iwkkaejg'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
        >

        </ReactMapGl>
    );
}

export default Map;
