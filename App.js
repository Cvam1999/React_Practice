import React from 'react';
import ReactDOM from 'react-dom/client';
import { jsx } from 'react/jsx-runtime';

const Header = () => {
  return (
    <div className='header'>   
    <div className='logo-container'>
      <img className='logo' src='https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg' />
    </div>
    <div className='nav-items'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>cart</li>
        </ul>
    </div>
    </div>
 
  );
}

const RestaurantCard = () =>{
    return (
        <div className='res-card'>
        <img className='res-logo' alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/a279200a-1f52-4143-a31b-ce55e0df9caf_640147.JPG' />
        <h2>Restaurant Name</h2>
        <p>Rating: 4.5 stars</p>
        <p>Cuisine: Italian</p>
        </div>
    );
}
const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);