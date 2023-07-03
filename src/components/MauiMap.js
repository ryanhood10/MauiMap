import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMap = () => {
  useEffect(() => {
    const loadMap = async () => {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
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

      } catch (error) {
        console.error('Error loading Google Maps API:', error);
      }
    };

    loadMap();
  }, []); // Empty dependency array to run the effect only once on mount

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default GoogleMap;
