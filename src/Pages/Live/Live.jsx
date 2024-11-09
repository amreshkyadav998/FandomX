import React, { useState } from "react";
import ReactCardSlider from "react-card-slider-component"; // Ensure this library is installed
import "./Live.css"; // Make sure the CSS file is linked correctly

const Live = () => {
  const [modalVideo, setModalVideo] = useState(null); // State for managing the video link

  const closeModal = () => {
    setModalVideo(null); // Close the modal
  };

  const sliderClick = (slide) => {
    alert(`You clicked on: ${slide.title}`);
  };

  const slides = [
    {
      image: "/assets/s1.jpg",
      title: "India V/S Australia",
      description: "Description 1",
      clickEvent: () => sliderClick({ title: "India V/S Australia" }),
    },
    {
      image: "/assets/s2.jpg",
      title: "Ronaldo V/S Messi",
      description: "Description 2",
      clickEvent: () => sliderClick({ title: "Ronaldo V/S Messi" }),
    },
    {
      image: "/assets/s5.jpg",
      title: "RCB V/S MI",
      description: "Description 3",
      clickEvent: () => sliderClick({ title: "RCB V/S MI" }),
    },
    {
      image: "/assets/s3.jpg",
      title: "India V/S England",
      description: "Description 4",
      clickEvent: () => sliderClick({ title: "India V/S England" }),
    },
    {
      image: "/assets/s4.jpg",
      title: "India V/S Iran",
      description: "Description 5",
      clickEvent: () => sliderClick({ title: "India V/S Iran" }),
    },
    {
      image: "https://picsum.photos/200/300",
      title: "Fifth Title",
      description: "Description 6",
      clickEvent: () => sliderClick({ title: "Fifth Title" }),
    },
    {
      image: "https://picsum.photos/800/700",
      title: "Sixth Title",
      description: "Description 7",
      clickEvent: () => sliderClick({ title: "Sixth Title" }),
    },
    {
      image: "https://picsum.photos/300/400",
      title: "Seventh Title",
      description: "Description 8",
      clickEvent: () => sliderClick({ title: "Seventh Title" }),
    },
  ];

  const videoSlides = [
    {
      title: "India V/S Australia (Video)",
      videoLink: "https://www.youtube.com/embed/AUzzBuQdz_I", // Embed link for video
      image: "/assets/s1.jpg", // Image for the video
    },
    {
      title: "Ronaldo V/S Messi (Video)",
      videoLink: "https://www.youtube.com/embed/aZsicM8i_OI", // Replace with actual link
      image: "/assets/s2.jpg", // Image for the video
    },
    {
      title: "RCB V/S MI (Video)",
      videoLink: "https://www.youtube.com/embed/DDenYXhdSOo", // Replace with actual link
      image: "/assets/s3.jpg", // Image for the video
    },
    {
      title: "India V/S England (Video)",
      videoLink: "https://www.youtube.com/embed/DDenYXhdSOo", // Replace with actual link
      image: "/assets/s3.jpg", // Image for the video
    },
    {
      title: "India V/S Iran (Video)",
      videoLink: "https://www.youtube.com/embed/DDenYXhdSOo", // Replace with actual link
      image: "/assets/s3.jpg", // Image for the video
    },
    {
      title: "Fifth Title (Video)",
      videoLink: "https://www.youtube.com/embed/DDenYXhdSOo", // Replace with actual link
      image: "/assets/s3.jpg", // Image for the video
    },
    {
      title: "Sixth Title (Video)",
      videoLink: "https://www.youtube.com/embed/DDenYXhdSOo", // Replace with actual link
      image: "/assets/s3.jpg", // Image for the video
    },
    {
      title: "Seventh Title (Video)",
      videoLink: "https://www.youtube.com/embed/example8", // Replace with actual link
      image: "/assets/s3.jpg", // Image for the video
    },
  ];

  return (
    <div className="slider-container1 pl-36 ">
      <h1 className="text-4xl font-bold mb-4"> <span>Watch</span> Live Shows</h1>
      <ReactCardSlider slides={slides} />
      {/* Render the video card slider */}
      <h1 className="text-4xl font-bold mb-4 mt-8"> <span>Watch</span> Videos</h1>
      <ReactCardSlider
        slides={videoSlides.map((slide) => ({
          image: slide.image,
          title: slide.title,
          clickEvent: () => setModalVideo(slide.videoLink), // Set video link on click
        }))}
        renderSlide={(slide) => (
          <div 
            className="video-card relative bg-cadetblue rounded-lg shadow-md p-4 overflow-hidden cursor-pointer" 
            onClick={slide.clickEvent}
          >
            <h2 className="text-xl font-semibold mb-2">{slide.title}</h2>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="video-image w-full h-40 object-cover rounded-md" 
            />
            <div className="absolute top-2 right-2">
              <button className="text-black bg-red-600 p-2 rounded-full hover:bg-red-700 transition duration-200">
                <i className="fas fa-video text-lg">HI</i>
              </button>
            </div>
          </div>
        )}
      />

      {/* Modal for displaying video */}
      {modalVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-red-600">
              X
            </button>
            <iframe
              width="560"
              height="315"
              src={modalVideo}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <h1 className="text-4xl font-bold mb-4">Ronaldo <span>V/S</span> Messi</h1>
      <ReactCardSlider slides={slides} />
    </div>
  );
};

export default Live;
