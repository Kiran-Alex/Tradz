import React, { useState, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopSection from "./components/TopSection";
import ExploreFeatures from "./components/ExploreFeatures";
import ExploreFeaturesMobile from "./components/ExploreFeaturesMobile";
import BottomSection from "./components/BottomSection";
import FAQ from "./components/FAQ";
import CredSection from "./components/CredSection"
import CredSectionMobile from './components/CredSectionMobile'
import BetterSection from './components/BetterSection';
import NFT from './components/NFTSection';
import CardSection from './components/CardSection'
import CoinSection from './components/CoinsSection'
import Stats from './components/Stats'
import Security from "./components/Security";
import Derivex from "./components/Derivex";
function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the width state whenever the window is resized
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove the event listener on unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      
      <Header />
      <Derivex/>
     <Footer />
    </div>
  );
}

export default App;
