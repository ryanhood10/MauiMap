import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import "../assets/MauiMap.css"

const GoogleMap = () => {
  useEffect(() => {
    const loadMap = async () => {
      const loader = new Loader({
        apiKey: process.env.GOOGLE_MAPS_API,
        version: 'weekly',
        // ...additionalOptions,
      });

      try {
        await loader.load();
        const { google } = window;

        const { Map } = await google.maps.importLibrary('maps');

        const map = new Map(document.getElementById('map'), {
          center: { lat: 20.7984, lng: -156.3319 },
          zoom: 10,
        });

        // Do additional map-related operations here

        //adding markers
        //Hanawi Falls Marker #1
        new google.maps.Marker({
            position: { lat: 20.8096432, lng: -156.1095584 },
            map,
            title: "Hanawi Falls",
          });



      } catch (error) {
        console.error('Error loading Google Maps API:', error);
      }
    };

    loadMap();
  }, []); // Empty dependency array to run the effect only once on mount

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default GoogleMap;
