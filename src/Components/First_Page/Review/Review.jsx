import React from "react";
import "./Review.css";

const reviews = [
  {
    name: "John",
    image: "/assets/person_2.jpg",
    rating: 5,
    review:
      "FandomX offers a smooth and user-friendly experience for booking sports tickets and venues, with a sleek design and responsive interface.",
  },
  {
    name: "Kethy",
    image: "/assets/person_1.jpg",
    rating: 4,
    review:
      "Great platform for sports fans—easy ticket booking, detailed venue info, and excellent customer support, though site speed could improve.",
  },
  {
    name: "David",
    image: "/assets/person_3.jpg",
    rating: 5,
    review:
      "FandomX provides an excellent, user-friendly experience for booking sports events and venues. The site is intuitive and responsive, making the whole process smooth and enjoyable.",
  },
];

const Review = () => {
  return (
    <div>
      <section id="review" className="review">
        <div className="review-box">
          <h2 className="heading" data-aos="zoom-in-down">
            <span>Client </span>Reviews
          </h2>

          <div className="wrapper" data-aos="zoom-in-up">
            {reviews.map((item, index) => (
              <div className="review-item" key={index}>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <div className="rating">
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <i className="bx bxs-star" id="star" key={i}></i>
                    ))}
                </div>
                <p>{`"${item.review}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
