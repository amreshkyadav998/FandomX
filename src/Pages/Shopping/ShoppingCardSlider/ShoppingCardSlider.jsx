import React, { useState } from "react";
import "./ShoppingCardSlider.css";

const productData = [
  {
    id: 1,
    discount: "-20%",
    frontImage: "/assets/i5.webp",
    backImage: "/assets/i5(b).jpg",
    category: "Sports Hoodie",
    title: "Messi Printed Men & Women Cotton Hooded Hoodie White Color",
    price: "90$",
  },
  {
    id: 2,
    discount: "-15%",
    frontImage: "/assets/ss2.jpg",
    backImage: "/assets/ss2(b).jpg",
    category: "Sports Hoodie",
    title: "Messi Printed Men & Women Cotton Hooded Hoodie White Color",
    price: "85$",
  },
  {
    id: 3,
    discount: "-20%",
    frontImage: "/assets/ss3.jpg",
    backImage: "/assets/ss3(b).jpg",
    category: "Sports Hoodie",
    title: "Messi Printed Men & Women Cotton Hooded Hoodie White Color",
    price: "90$",
  },{
    id: 3,
    discount: "-20%",
    frontImage: "/assets/ss4.webp",
    backImage: "/assets/ss4(b).jpg",
    category: "Sports Hoodie",
    title: "Messi Printed Men & Women Cotton Hooded Hoodie White Color",
    price: "90$",
  },{
    id: 3,
    discount: "-20%",
    frontImage: "/assets/i5.webp",
    backImage: "/assets/i5(b).jpg",
    category: "Sports Hoodie",
    title: "Messi Printed Men & Women Cotton Hooded Hoodie White Color",
    price: "90$",
  },{
    id: 3,
    discount: "-20%",
    frontImage: "/assets/i5.webp",
    backImage: "/assets/i5(b).jpg",
    category: "Sports Hoodie",
    title: "Messi Printed Men & Women Cotton Hooded Hoodie White Color",
    price: "90$",
  },
  // You can add more products as needed
];

const ShoppingCardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = productData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="ShoppingCard-Container">
      {/* Slider */}
      <section className="p-slider">
        {/* Heading */}
        <h3 className="product-slider-heading">Explore World Series Champs</h3>

        {/* Glider for slider */}
        <div className="glider-contain">
          <div
            className="glider"
            style={{ transform: `translateX(-${currentSlide * 300}px)` }}
          >
            {/* Use map to create multiple product boxes */}
            {productData.map((product) => (
              <div className="product-box" key={product.id}>
                {/* Discount */}
                <span className="p-discount">{product.discount}</span>
                {/* Image container */}
                <div className="p-img-container">
                  <div className="p-img">
                    <a href="#">
                      <img
                        src={product.frontImage}
                        className="p-img-front"
                        alt="front"
                      />
                      <img
                        src={product.backImage}
                        className="p-img-back"
                        alt="back"
                      />
                    </a>
                  </div>
                </div>

                {/* Text */}
                <div className="p-box-text">
                  {/* Category */}
                  <div className="product-category">
                    <span>{product.category}</span>
                  </div>

                  {/* Title */}
                  <a href="#" className="product-title">
                    {product.title}
                  </a>

                  {/* Price-buy */}
                  <div className="price-buy">
                    <span className="p-price">{product.price}</span>
                    <a href="#" className="p-buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={prevSlide} className="glider-prev" aria-label="Previous">
            «
          </button>
          <button onClick={nextSlide} className="glider-next" aria-label="Next">
            »
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCardSlider;
