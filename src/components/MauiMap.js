import { Loader } from "@googlemaps/js-api-loader"
import dotenv from 'dotenv';
dotenv.config();


const loader = new Loader({
    apiKey: process.env.GOOGLE_MAPS_API,
    version: "weekly",
    ...additionalOptions,
  });
  
  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();