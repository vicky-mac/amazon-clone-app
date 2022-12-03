import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, iamge */}
      <div className="home__row">
        <Product
          id="1"
          title="Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not!:"
          price={387}
          rating={5}
          image="https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg"
        />
        <Product
          id="2"
          title="2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Space Grey"
          price={108590}
          rating={4}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Samsung Galaxy Watch5 Bluetooth (44 mm, Graphite, Compatible with Android only)"
          price={30999}
          rating={4}
          image="https://m.media-amazon.com/images/I/61Guilj8MEL._SX679_.jpg"
        />
        <Product
          id="4"
          title="Marshall Acton II 60 Watt Wireless Bluetooth Speaker (Black)"
          price={22999}
          rating={5}
          image="https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw7087b641/images/marshall/speakers/stanmore-ii-bt/black/high-res/pos-marshall-stanmore-ii-bt-black-01.png"
        />
        <Product
          id="5"
          title="Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Blue (5th Generation)"
          price={54900}
          rating={4}
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=1765&hei=2000&fmt=jpeg&qlt=95&.v=1645065732688"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          price={155000}
          rating={4}
          image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
