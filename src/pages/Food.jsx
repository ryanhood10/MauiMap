import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/Food.css';
import DinosGourmet from '../assets/images/Dinos-Gourmet.jpg';
import ThaiMeeUp from '../assets/images/Thai-Mee-Up.jpg';
import Kiawe from '../assets/images/Kiawe-Wood-Fire-Grill.jpg';
import lineRamen from '../assets/images/Iine-Ramen.jpg';
import LikePoke from '../assets/images/Poke.jpg';
import KaleisLunchbox from '../assets/images/Kaleis-Lunchbox.jpg';
import MoOnoHawaii from '../assets/images/Anle-On-Maui-food-truck.jpg';

const FoodTruckRestaurantPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const foodTrucks = [
    { title: 'Dinos Gourmet', description: 'Hours: 10:30 am to 7:00 pm Mon-Sat, closed Sun' },
    { title: 'Thai Mee Up', description: 'Hours: 10 am to 8 pm every day' },
    { title: 'Kiawe Wood Fire Grill', description: 'Hours: 11 to 4:30 pm Mon-Fri, closed Sat and Sun' },
    { title: 'lineRamen', description: 'Hours: 10:30 am to 8 pm Mon-Tue, 10:30 am to 9 pm Wed-Fri, 10:30 am to 6:30 pm Sat, closed Sun' },
    { title: 'Like Poke', description: '10:30 am to 4 pm Mon, 10:30 to 6 pm Tue-Fri, 10:30 am to 3 pm Sat, Closed Sun' },
    { title: `Kalei's Lunchbox`, description: 'Hours: 8 am to 8 pm every day' },
    { title: 'Mo Ono Hawaii', description: 'Hours: 10 am to 8 pm Tue-Thu; 10 am to 5 pm Fri, 10 am to 4 pm Sat, closed Sun & Mon' },
    { title: 'Mo Ono Hawaii', description: 'Description for Food Truck 8' },
    { title: 'Food Truck 9', description: 'Description for Food Truck 9' },
    { title: 'Food Truck 10', description: 'Description for Food Truck 10' },
    { title: 'Food Truck 11', description: 'Description for Food Truck 11' },
    { title: 'Food Truck 12', description: 'Description for Food Truck 12' },
    // Add more food trucks here
  ];

  const restaurants = [
    { title: 'Dx', description: 'x' },
    { title: 'x', description: 'Description for Restaurant 2' },
    { title: 'Restaurant 3', description: 'Description for Restaurant 3' },
    { title: 'Restaurant 4', description: 'Description for Restaurant 4' },
    { title: 'Restaurant 5', description: 'Description for Restaurant 5' },
    { title: 'Restaurant 6', description: 'Description for Restaurant 6' },
    { title: 'Restaurant 7', description: 'Description for Restaurant 7' },
    { title: 'Restaurant 8', description: 'Description for Restaurant 8' },
    { title: 'Restaurant 9', description: 'Description for Restaurant 9' },
    { title: 'Restaurant 10', description: 'Description for Restaurant 10' },
    { title: 'Restaurant 11', description: 'Description for Restaurant 11' },
    { title: 'Restaurant 12', description: 'Description for Restaurant 12' },
    // Add more restaurants here
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const renderFoodTruckCarouselItem = (item, index) => (
    <div key={index} className="carousel-item" onClick={() => handleItemClick(item)}>
      <h3>{item.title}</h3>
      {index === 0 && <img src={DinosGourmet} alt="Dinos Gourmet" />}
      {index === 1 && <img src={ThaiMeeUp} alt="Thai Mee Up" />}
      {index === 2 && <img src={Kiawe} alt="Kiawe Wood Fired Grill" />}
      {index === 3 && <img src={lineRamen} alt="lineRamen" />}
      {index === 4 && <img src={LikePoke} alt="LikePoke" />}
      {index === 5 && <img src={KaleisLunchbox} alt="Kalei's Lunchbox" />}
      {index === 6 && <img src={ThaiMeeUp} alt="Thai Mee Up" />}
      {index === 7 && <img src={MoOnoHawaii} alt="Mo Ono Hawaii" />}
      <p>{item.description}</p>
      <div className="rating">★★★☆☆</div>
    </div>
  );

  const renderRestaurantCarouselItem = (item, index) => (
    <div key={index} className="carousel-item" onClick={() => handleItemClick(item)}>
      <h3>{item.title}</h3>
      {/* No images for restaurants */}
      <p>{item.description}</p>
      <div className="rating">★★★☆☆</div>
    </div>
  );

  return (
    <div className="food-truck-restaurant-page">
      <h2>Food Trucks</h2>
      <Slider className="carousel" slidesToShow={3} slidesToScroll={1}>
        {foodTrucks.map((item, index) => renderFoodTruckCarouselItem(item, index))}
      </Slider>

      <h2>Restaurants</h2>
      <Slider className="carousel" slidesToShow={3} slidesToScroll={1}>
        {restaurants.map((item, index) => renderRestaurantCarouselItem(item, index))}
      </Slider>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Food Truck/Restaurant Info"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedItem && (
          <>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <button onClick={closeModal}>Close</button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default FoodTruckRestaurantPage;
