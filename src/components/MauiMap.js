import React, { useEffect } from 'react';
import { Loader, importLibrary } from '@googlemaps/js-api-loader';
import "../assets/MauiMap.css";

var API_KEY = "AIzaSyAxLVl-y4ybbR3Nn7Lr2FXCi_nQZSFDAqk";

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
          zoom: 11,
        });

        // Do additional map-related operations here

        // Adding markers
        // Hanawi Falls Marker #1
        new google.maps.Marker({
          position: { lat: 20.8096432, lng: -156.1095584 },
          map,
          title: "Hanawi Falls",
        });

        // Spirit Of Aloha Oceanfront Botanical Gardens Marker #2
        new google.maps.Marker({
          position: { lat: 20.9346075, lng: -156.2653503 },
          map,
          title: "Spirit Of Aloha Oceanfront Botanical Gardens",
        });

        // Eucalyptus Rainbow Trees Marker #3
        new google.maps.Marker({
          position: { lat: 20.8849725, lng: -156.2064775 },
          map,
          title: "Eucalyptus Rainbow Trees",
        });

        // Haipua'ena Falls Marker #4
        new google.maps.Marker({
          position: { lat: 20.8720044, lng: -156.1871532 },
          map,
          title: "Haipua'ena Falls",
        });

        // Nu’yenle’e waterfalls Marker #5
        new google.maps.Marker({
          position: { lat: 20.8570478, lng: -156.1489463 },
          map,
          title: "Nuyenlee waterfalls",
        });

        // Ke'anae Arboretum Marker #6
        new google.maps.Marker({
          position: { lat: 20.8570478, lng: -156.1489463 },
          map,
          title: "Ke'anae Arboretum",
        });

        // Waialohe Park Marker #7
        new google.maps.Marker({
          position: { lat: 20.8614795, lng: -156.1481958 },
          map,
          title: "Waialohe Park",
        });

        // Upper Waikani Falls Marker #8
        new google.maps.Marker({
          position: { lat: 20.8323667, lng: -156.1388433 },
          map,
          title: "Upper Waikani Falls",
        });

        // Pua'a Ka'a State Wayside Marker #9
        new google.maps.Marker({
          position: { lat: 20.8172547, lng: -156.1247931 },
          map,
          title: "Pua'a Ka'a State Wayside",
        });

        // Makapipi Falls Marker #10
        new google.maps.Marker({
          position: { lat: 20.8075943, lng: -156.0962121 },
          map,
          title: "Makapipi Falls",
        });

        // Kahanu Garden, National Tropical Botanical Garden Marker #11
        new google.maps.Marker({
          position: { lat: 20.7986285, lng: -156.0379224 },
          map,
          title: "Kahanu Garden, National Tropical Botanical Garden",
        });

        // Waiʻānapanapa State Park Marker #12
        new google.maps.Marker({
          position: { lat: 20.7834865, lng: -155.9977110 },
          map,
          title: "Waiʻānapanapa State Park",
        });

        // Waioka Pond (Venus Pool) Marker #13
        new google.maps.Marker({
          position: { lat: 20.7039810, lng: -155.9948405 },
          map,
          title: "Waioka Pond (Venus Pool)",
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
