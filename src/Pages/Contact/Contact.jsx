
// import "./Contact.css"
// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       /*  */ 
// <div class="form-card1">
//   <div class="form-card2">
//     <form class="form">
//       <p class="form-heading">Get In Touch</p>

//       <div class="form-field">
//         <input required="" placeholder="Name" class="input-field" type="text" />
//       </div>

//       <div class="form-field">
//         <input
//           required=""
//           placeholder="Email"
//           class="input-field"
//           type="email"
//         />
//       </div>

//       <div class="form-field">
//         <input
//           required=""
//           placeholder="Subject"
//           class="input-field"
//           type="text"
//         />
//       </div>

//       <div class="form-field">
//         <textarea
//           required=""
//           placeholder="Message"
//           cols="30"
//           rows="3"
//           class="input-field"
//         ></textarea>
//       </div>

//       <button class="sendMessage-btn">Send Message</button>
//     </form>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Contact;

 import "./Contact.css";
 import React from 'react';
 import animatedImage from '/assets/animated.avif'; // Replace with the actual path to your animated PNG

const Contact = () => {
  return (
    <div className="flex pt-[120px] bg-gray-100 min-h-screen contact_container">
      <div className="flex-1 flex items-center justify-center">
        <form className="form">
          <p className="form-heading">Get In Touch</p>

          <div className="form-field">
            <input required placeholder="Name" className="input-field" type="text" />
          </div>

          <div className="form-field">
            <input required placeholder="Email" className="input-field" type="email" />
          </div>

          <div className="form-field">
            <input required placeholder="Subject" className="input-field" type="text" />
          </div>

          <div className="form-field">
            <textarea required placeholder="Message" cols="30" rows="3" className="input-field"></textarea>
          </div>

          <button className="sendMessage-btn">Send Message</button>
        </form>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center">
        <img src={animatedImage} alt="Animated Visual" className="w-full h-auto" />
      </div> 
       Contact
    </div>
  );
}

export default Contact; 

