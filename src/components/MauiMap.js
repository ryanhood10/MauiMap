import React, { useEffect } from 'react';
import { Loader, importLibrary } from '@googlemaps/js-api-loader';
import "../assets/MauiMap.css"

var API_KEY="AIzaSyAxLVl-y4ybbR3Nn7Lr2FXCi_nQZSFDAqk"

const MauiMap = () => {
  useEffect(() => {
    const loadMap = async () => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: '3.45',
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

export default MauiMap;
