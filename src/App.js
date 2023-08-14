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
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonMumbai} from 'wagmi/chains'
import { Routes,Router, Route } from "react-router-dom";
import Pools from "./components/Pools";

const chains = [polygonMumbai]
const projectId = '397a95937ac0b7fce6cedb9aea9665f6'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [pooltoggle,setpooltoggle] = useState(false)




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

      
       <WagmiConfig config={wagmiConfig}>
      <Header />
      <Routes>
        <Route path="/pools/BTC:USD" element={<Pools/>}/>
        <Route path="/" element={<Derivex/>}/>
      </Routes>
      {/* <Derivex/> */}
     <Footer />
     </WagmiConfig>
     <Web3Modal themeVariables={{
      "--w3m-z-index" : "1"
     }} projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
}

export default App;
