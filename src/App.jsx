import React from 'react';
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ScoreCard from './Components/Scorecard/Scorecard'; 
import About from './Pages/About/About';
import Live from './Pages/Live/Live';
import Tickets from './Pages/Tickets/Tickets';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Shopping from './Pages/Shopping/Shopping';
import LandingPage from './Pages/LandingPage/LandingPage'; 
import CardList from './Pages/CardList/CardList';
import Home from './Components/First_Page/Home/Home';
import Services from './Components/First_Page/Services/Services';
import Choose from './Components/First_Page/Choose/Choose';
import Review from './Components/First_Page/Review/Review';
import CustomizedAccordions from './Components/First_Page/Accordian/Accordian';
import Question from './Components/First_Page/Accordian/Question';
import Sports_tour from './Pages/Sports_tour/Sports_tour';
import SportDetails from "./Pages/Tickets/SportDetails.jsx";
import Marqueee from './Components/First_Page/Marquee/Marqueee.jsx';
import Rewards from './Pages/Rewards/Rewards.jsx';
import Play from './Pages/Play/Play.jsx';
import Sponsorship from './Pages/Sponsorship/Sponsorship.jsx'   



// Link Redirection

const RedirectToLinkedIn = () => {
  // Use useEffect to redirect when the component renders
  React.useEffect(() => {
    window.location.href = 'https://www.linkedin.com/company/fandom-future/';
  }, []);

  return null; // No need to render anything
};

// Routing Part

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        {/* <LandingPage/> */}
        {/* <ScoreCard />  */}
        <Home/>
        <Marqueee/>
        <Services/>
        <Choose/>
        <Review/>
        <Question/>
        <Footer />
      </>
    ),
  },
  {
    path: '/About',
    element: (
      <>
        <Navbar />
        <About />/
        {/* <CardList/> */}
        <Footer />
      </>
    ),
  },
  {
    path: '/Live',
    element: (
      <>
        <Navbar />
        <Live />
        <Footer />
      </>
    ),
  },
  {
    path: '/Tickets',
    element: (
      <>
        <Navbar />
        <Tickets />
        <Footer />
      </>
    ),
  },
  {
    path: '/Tickets/:id', // Dynamic route for sport details
    element: (
      <>
        <Navbar />
        <SportDetails />
        <Footer />
      </>
    ),
  },
  {
    path: '/Blog',
    element: (
      <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    ),
  },
  {
    path: '/Contact',
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: '/Explore',
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: '/Shopping',
    element: (
      <>
        <Navbar />
        <Shopping />
        <Footer />
      </>
    ),
  },
  {
    path: '/Sports_tour',
    element: (
      <>
        <Navbar />
        <Sports_tour />
        <Footer />
      </>
    ),
  }, 
   {
    path: '/Rewards',
    element: (
      <>
        <Navbar />
        <Rewards />
        <Footer />
      </>
    ),
  },
  {
    path: '/Play',
    element: (
      <>
        <Navbar />
        <Play/>
        <Footer />
      </>
    ),
  },
  {
    path: '/Sponsorships',
    element: (
      <>
        <Navbar />
        <Sponsorship/>
        <Footer />
      </>
    ),
  },
  {
    path: '/play-store',
    element: (
      <>
        <RedirectToLinkedIn/>
      </>
    ),
  },
  {
    path: '/app-store',
    element: (
      <>
        <RedirectToLinkedIn/>
      </>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
