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
      <TopSection />
      <div className="header3" style = {{marginTop:"5%",fontFamily: 'Benzin-Medium',color:'#ddd',textAlign:'center'}}>RESHAPING FINANCE </div>
      <div className="header"style = {{fontFamily: 'Benzin-Bold', color:'#fff'}}>
      The Super Decentralised Bank
      </div>
      <br />
      <div className="topText"style = {{fontFamily: 'Regular',color: '#B3C5BB'}}>
      Xade is the only DeFi powered alternative to banks which provides all banking services on chain with the user experience indistinguishable from a digital bank powered by our own in-house DeFi Protocols.
      </div>
 <CredSection />
           <CardSection></CardSection>

      <BetterSection />
      <CoinSection />
      <NFT />

      <Stats />
      <Security />	
      <FAQ />
    
      {/* <BottomSection /> */}
      
     <Footer />
    </div>
  );
}

export default App;
