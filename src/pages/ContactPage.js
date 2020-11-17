import React, { useState } from 'react'
import './ContactPage.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import mapStyles from '../mapStyles'

const mapContainerStyle = { width: '100%', height: '100%' }
const jhb = { lat: -26.20951, lng: 28.041462 }
const pta = { lat: -25.811970, lng: 28.233950 }
const cape = { lat: -33.9291, lng: 18.5033 }
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

export default function ContactPage() {

    // const [marker, setMarker] = useState([])

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCJ092qJiq6aae0MPDZQgxh9BJDtVw1X_A',
    })

    if (loadError) return (
        <div className="contact__err">
            <h3>Error loading maps</h3>
        </div>
    )
    if (!isLoaded) return (
        <div className="contact__err">
            <h3>Loading maps...</h3>
        </div>
    )

    return (
        <div className='contact__container'>
            <h1>Contact us</h1>
            <div className="contact__header">
                <div className="contact__address">
                    <h2>HEAD OFFICE</h2>
                    <p>THE TATTERSALLS BUILDING</p>
                    <p>NO.3 LOVEDAY STR</p>
                    <p>(CORNER ALBERT ST.)</p>
                    <p>MARSHALLTOWN</p>
                    <p>2001</p>
                </div>
                <div className="contact__jhb">
                    <p>Tel: 011 492 2827 / 2724</p>
                    <a href="mailto:info@benjaminwoollens.co.za">info@benjaminwoollens.co.za</a>
                </div>
                <div className="contact__map">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={16}
                        center={jhb}
                        options={options}
                    // onClick={e => setMarker([]), console.log(marker)}
                    >
                        <Marker
                            position={jhb}
                            key={jhb}
                        />
                    </GoogleMap>
                    {/* <WrappedMaps googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                        loadingElement={<div style={{ height: '100%', width: '100%' }} />}
                        containerElement={<div style={{ height: '100%', width: '100%' }} />}
                        mapElement={<div style={{ height: '100%', width: '100%' }} />}
                    /> */}
                </div>
            </div>
            <div className="contact__header">
                <div className="contact__address">
                    <h2>PRETORIA SHOWROOM</h2>
                    <p>THE STUDIO AT WATERKLOOF</p>
                    <p>42 GOLF ST</p>
                    <p>WATERKLOOF</p>
                    <p>PRETORIA</p>
                    <p>0145</p>
                </div>
                <div className="contact__jhb">
                    <p>Cel: 082 322 0546</p>
                    <a href="mailto:info@benjaminwoollens.co.za">info@benjaminwoollens.co.za</a>
                </div>
                <div className="contact__map">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={16}
                        center={pta}
                        options={options}
                    ><Marker
                            position={pta}
                            key={pta}
                        /></GoogleMap>
                </div>
            </div>
            <div className="contact__header">
                <div className="contact__address">
                    <h2>CAPE TOWN SHOWROOM</h2>
                    <p>RIVAGLADE INTERNATIONAL FABRICS</p>
                    <p>UNIT D1</p>
                    <p>PINELANDS BUSINESS PARK</p>
                    <p>NEW MILL ROAD</p>
                    <p>PINELANDS</p>
                    <p>7405</p>
                </div>
                <div className="contact__jhb">
                    <p>Tel: 021 531 2461</p>
                    <p>Cel: 082 550 4769</p>
                    <a href="mailto:geralds.za@gmail.com">geralds.za@gmail.com</a>
                </div>
                <div className="contact__map">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={16}
                        center={cape}
                        options={options}
                    ><Marker
                            position={cape}
                            key={cape}
                        /></GoogleMap>
                </div>
            </div>
        </div>
    )
}
