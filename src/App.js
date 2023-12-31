import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Derivex from "./components/Derivex";
import Fab from "@mui/material/Fab";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import Box from "@mui/material/Box";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import "./App.css";
import "../src/styles/better.css";
import "../src/styles/style.css";
import "../src/components/styles.css"
import "../src/components/stylesmobile.css"
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { Routes, Router, Route,useNavigate } from "react-router-dom";
import Pools from "./components/Pools";

const chains = [polygonMumbai];
const projectId = "397a95937ac0b7fce6cedb9aea9665f6";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [pooltoggle, setpooltoggle] = useState(false);
  const [PoolBack,setPoolBack] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Update the width state whenever the window is resized
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <WagmiConfig config={wagmiConfig}>
        <Header />
        <Routes>
          <Route path="/pools/BTC:USD" element={<Pools />} />
          <Route path="/" element={<Derivex />} />
        </Routes>
        {/* <Derivex/> */}
     
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            position: "sticky",
            bottom: 0,
            paddingBottom : 0.5,
            borderWidth : 0
          }}
        >
         {PoolBack ?  <Fab variant="extended" onClick={()=>{navigate("/pools/BTC:USD");setPoolBack(false)}}>
            <OpacityOutlinedIcon sx={{ mr: 1 }} />
            Pools
          </Fab> :<Fab variant="extended" onClick={()=>{navigate("/");setPoolBack(true)}}>
            <KeyboardBackspaceOutlinedIcon sx={{ mr: 1 }} />
            Back
          </Fab> }
        </Box>
      </WagmiConfig>
      <Web3Modal
        themeVariables={{
          "--w3m-z-index": "1",
        }}
        projectId={projectId}
        ethereumClient={ethereumClient}
      />
    </div>
  );
}

export default App;
