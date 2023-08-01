import React from 'react';
import HanaFalls from '../assets/images/HanaFalls.jpg';
import '../assets/ThingsToDo.css';
import Haleakala from '../assets/images/haleakala.webp';
import Surfing from '../assets/images/surfing.png';
import MauiOceanCenter from '../assets/images/MauiOceanCenter.jpg';
import Helicopter from '../assets/images/Helicopter.jpg';
import Snorkling from '../assets/images/snorkling.webp';
import WhaleWatch from '../assets/images/whale-watch-maui.jpg';
import WaimokuFalls from '../assets/images/waimoku-falls-pipiwai.jpg';
import SunsetCruise from '../assets/images/sunsetCruise.jpg';
import IaoValley from '../assets/images/IaoValley.jpg';
import MolokiniCrater from '../assets/images/MolokiniCrater.jpg';
import BanyanTree from '../assets/images/BanyanTree.jpg';







const attractions = [
  {
    id: 1,
    title: 'Haleakalā National Park',
    image: Haleakala,
    description: 'Explore the otherworldly landscapes of Haleakalā National Park, home to the dormant Haleakalā volcano and breathtaking sunrise and sunset views.',
    price: '$25 per vehicle',
  },
  {
    id: 2,
    title: 'Road to Hana',
    image: HanaFalls,
    description: 'Drive along the scenic Road to Hana, a winding highway that takes you through lush rainforests, dramatic waterfalls, and stunning coastal views.',
    price: 'Free',
  },
  {
    id: 3,
    title: 'Iao Valley State Park',
    image: IaoValley,
    description: 'Visit the iconic Iao Needle and lush greenery of Iao Valley State Park, a significant historical and cultural site on the island of Maui.',
    price: '$5 per vehicle',
  },
  {
    id: 4,
    title: 'Maui Ocean Center',
    image: MauiOceanCenter,
    description: 'Immerse yourself in the wonders of the ocean at the Maui Ocean Center, featuring an impressive display of marine life and interactive exhibits.',
    price: '$30 per adult, $20 per child',
  },
  {
    id: 5,
    title: 'Molokini Crater',
    image: MolokiniCrater,
    description: 'Snorkel or dive in the crescent-shaped Molokini Crater, a volcanic crater that houses a thriving marine ecosystem with excellent visibility.',
    price: '$100 per person',
  },
  {
    id: 6,
    title: 'Banyan Tree in Lahaina',
    image: BanyanTree,
    description: 'Marvel at the massive Banyan Tree in Lahaina, which stands as one of the largest in the United States, providing a beautiful shaded area in the town\'s center.',
    price: 'Free',
  },
];

const activities = [
  {
    id: 1,
    title: 'Surfing Lessons at Lahaina Beach',
    image: Surfing,
    description: 'Experience the thrill of surfing with professional instructors at Lahaina Beach, one of the best spots for beginners and seasoned surfers alike.',
    price: '$60 per person',
  },
  {
    id: 2,
    title: 'Whale Watching Tour in Maalaea Bay',
    image: WhaleWatch,
    description: 'Embark on an unforgettable whale watching tour and witness the majestic humpback whales as they visit Maui\'s warm waters during the winter months.',
    price: '$80 per person',
  },
  {
    id: 3,
    title: 'Hiking the Pipiwai Trail to Waimoku Falls',
    image: WaimokuFalls,
    description: 'Discover the lush landscapes of the Pipiwai Trail in Haleakalā National Park and reach the breathtaking Waimoku Falls, a towering 400-foot waterfall.',
    price: 'Free (park entrance fee: $25 per vehicle)',
  },
  {
    id: 4,
    title: 'Snorkeling Adventure at Honolua Bay',
    image: Snorkling,
    description: 'Dive into the crystal-clear waters of Honolua Bay and encounter vibrant coral reefs and an array of tropical fish, making it a paradise for snorkelers.',
    price: '$50 per person',
  },
  {
    id: 5,
    title: 'Helicopter Tour over the West Maui Mountains',
    image: Helicopter,
    description: 'Soar above the West Maui Mountains and witness breathtaking views of cascading waterfalls, lush valleys, and secluded beaches from a thrilling helicopter ride.',
    price: '$250 per person',
  },
  {
    id: 6,
    title: 'Sunset Dinner Cruise off the Coast of Wailea',
    image: SunsetCruise,
    description: 'Indulge in a romantic sunset dinner cruise and enjoy gourmet cuisine, live music, and stunning views of the sun setting over the Pacific Ocean.',
    price: '$150 per person',
  },
];

const ThingsToDo = () => {
    return (
      <div className="info-page">
        <h1 className="info-title">Things to Do</h1>
        

        <div className="container">
          <div className="attractions-container">
                    <h2 className="attractions-title">Attractions</h2>

            {attractions.map((attraction) => (
              <div key={attraction.id} className="item">
                <img src={attraction.image} alt={attraction.title} />
                <h3>{attraction.title}</h3>
                <p>{attraction.description}</p>
                <p>Price: {attraction.price}</p>
              </div>
            ))}
          </div>

          <div className="activities-container">
                      <h2 className="activites-title">Activities</h2>
            {activities.map((activity) => (
              <div key={activity.id} className="item">
                <img src={activity.image} alt={activity.title} />
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <p>Price: {activity.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default ThingsToDo;
