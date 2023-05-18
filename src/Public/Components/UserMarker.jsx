import { useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon, Tooltip } from 'leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { onLoadCoords } from '../../Store/Slices/userSlice'


export const UserMarker = () => {

    const [position, setPosition] = useState(null);
    const dispatch = useDispatch();

    const customIcon = new Icon({
        iconUrl: "../assets/person.png",
        iconSize: [45, 45]
    })


    const map = useMapEvents({

        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            dispatch(onLoadCoords({ lat: e.latitude, long: e.longitude }))
        },
    })


    useEffect(() => {
        map.locate();
    }, [map]);

    return position === null ? null : (

        <Marker position={position} icon={customIcon}>
            <Popup>Estas aquí</Popup>
        </Marker>
    );
};
