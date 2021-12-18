import React from "react";
import "../allStyles/Home.css";
import homepageImage from "../images/homepage.png";
import Product from "./Product";
// import productData from "../productData";

function Home() {
  return (
    <div className="home">
      <img src={homepageImage} alt="" className="home__image" />
      {/* <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero_Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home__image"
      /> */}

      <div className="home__row">
        {/* {productData.map((item, index) => (
          <Product
            key={index}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        ))} */}
        <Product
          id="1"
          title="Apple iPhone 13 Pro (128GB, Sierra Blue) [Locked] + Carrier Subscription"
          price={11.54}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000"
        />

        <Product
          id="2"
          title="Manhattan Wired Computer Keyboard, Black – Basic Keyboard - with 5ft USB-A Cable, 104-keys, Foldable Stands - Compatible for Windows, PC, Laptop - 3 Year Warranty - 179324"
          price={11.54}
          rating={3}
          image="https://m.media-amazon.com/images/I/71R0CmXEpzL._AC_SL1500_.jpg"
        />
        <Product
          id="4"
          title="Ficmax Gaming Chair with Footrest Ergonomic PU Leather Computer Chair for Gaming, Reclining High Back Office Chair with Massage Lumbar Support, Racing Style Gamer Chair Large Size E-Sport Chair(Black)"
          price={200.54}
          rating={4}
          image="https://m.media-amazon.com/images/I/81uBIGwyxNL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="5"
          title="
          HP V222vb FHD Monitor, 1080p VA Display, 75Hz Refresh Rate, 21.5-inch Computer Screen, TÜV Certified Low Blue Light Mode, Ergonomic Tilt, 3000:1 Contrast..."
          price={399.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81+trqjaHOL._AC_SL1500_.jpg"
        />

        <Product
          id="6"
          title="
          Audioengine A2+ Plus Wireless Speaker Bluetooth | Desktop Monitor Speakers | Home Music System aptX Bluetooth, 60W Powered Bookshelf Stereo Speakers | AUX..."
          price={99.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51wIU3zDvwS._AC_SL1080_.jpg"
        />

        <Product
          id="7"
          title="JIKIOU 3 Pack Mouse Pad with Stitched Edge, Comfortable Mouse Pads with Non-Slip Rubber Base, Washable Mousepads Bulk with Lycra Cloth, Mouse Pads for Computers Laptop Mouse 10.2x8.3x0.12inch Black"
          price={11.54}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Q6lkSHsoL._AC_SL1280_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="8"
          title="SAMSUNG 65-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65AU8000FXZA, 2021 Model), Black"
          price={599.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg"
        />

        <Product
          id="9"
          title="Samsung HW-A450/ZA 2.1ch Soundbar with Dolby Audio (2021) , Black"
          price={199.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81f+pCPHwyL._AC_SL1500_.jpg"
        />

        <Product
          id="10"
          title="TV Wall Mount Bracket Full Motion Dual Swivel Articulating Arms Extension Tilt Rotation, Fits Most 26-55 Inch LED, LCD, OLED Flat&Curved TVs, Max VESA 400x400mm and Holds up to 99lbs by Pipishell"
          price={39.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/716R-Dn8L5L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
