import React from "react";
import "../styles/style.css";
// import video from "../assets/Video.mp4";



export default function TopSection() {
  return (
    <>
      <div className="video-container">
        {/* <video autoPlay={true} muted={true} loop={true}> */}
          {/* <source src={video} type="video/mp4" /> */}
        {/* </video> */}
        <div className="leftsection"style = {{marginTop:"5%"}}>
        <div className="header3" style = {{fontFamily: 'Benzin-Medium'}}>BETA MAINNET IS LIVE </div>
          <div className="header1" style = {{fontFamily: 'Benzin-Bold',width:'95%'}}>Introducing a New Era of Finance </div>
          <br />
          <div className="subhead2" style = {{fontFamily: 'Medium', color:"#B3C5BB"}}>
          The decentralised bank providing all traditional banking services powered by in-house DeFi protocols.{" "}
          </div>
          <br />
          {/* <br />
          <br /> */}
          <br />
          <div className="button89"style = {{padding: 0, marginRight: '0.8rem',color:'#5AF698'}}>
            <a
              href="https://bit.ly/xadefinance"
              style={{ textDecoration: "none", color:'#5AF698'}}
            >
              <img src = {process.env.PUBLIC_URL + '/Media/i1.png'} style = {{marginRight: '0.7rem', height:'1.2rem', marginBottom: '4px'}}/>
              Get Started
            </a>
          </div>
          <div className="button89">
            <a
              href="https://medium.com/@XadeFinance/what-is-xade-and-why-do-you-need-it-b483f46ba5a1"
              style={{ textDecoration: "none", color:'#5AF698' }}
            >
                <img src = {process.env.PUBLIC_URL + '/Media/i2.png'} style = {{marginRight: '0.7rem', height:'1.2rem', marginBottom: '4px'}}/>
              What is Xade?
            </a>
          </div>
        </div>
      <div style = {{color: 'white'}} className="rightsection">
        <img src = {process.env.PUBLIC_URL + '/Media/firstpage.png'} alt="xade"/>
      </div>
      </div>
    </>
  );
}
