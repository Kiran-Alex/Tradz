import React, { useState } from 'react';
import '../styles/better.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= blogs.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = blogs.length - 1;
      }
      return newIndex;
    });
  };

  const blogs = [
    {
      title: 'Sabex: Let’s beat inflation',
      description: 'Learn more about how our money protocol works and what benefits our users can get from using SabeX features',
      buttonText: 'Read now',
    },
    {
      title: 'Derivex: Trading unleashed',
      description:
        'At last - our revolutional perpetual future protocol is live! Learn more about its features and why it’s the best solution for trading in DeFi at this moment',
      buttonText: 'Read now ',
    },
    {
      title: 'Introducing: Xade Star',
      description:
        'The Xade Finance Affiliate Program allows individuals to earn tokens and cash prizes by completing various content creation tasks.',
      buttonText: 'Read now',
    },
    {
      title: 'RemmiteX: Payments Reimagined',
      description:
        'Effortlessly send global payments with RemmiteX: the gasless, fiat-pegged stablecoin protocol powered by Biconomy.',
      buttonText: 'Read now',
    },
    {
      title: 'What is Xade and why do you need it?',
      description:
        'Xade is a DeFi-powered platform serving as a bridge between traditional banking and DeFi protocols, offering on-chain banking services.',
      buttonText: 'Read now',
    },
    {
      title : "The Xade Explorers are here",
      description : "Xade Explorers: Unleash finance's new era in the Xade Mobile App with reduced fees, increased rewards, liquidation bots, events, private sales, and more!",
      buttonText: 'Read now',
    },
    {
      title : "Meet Our Team",
      description : "Xade Explorers: Unleash finance's new era in the Xade Mobile App with reduced fees, increased rewards, liquidation bots, events, private sales, and more!",
      buttonText: 'Read now',
    }
  ];

  return (
    <div className="lol">
      <br />
      <br />
      <div className="header" style={{ fontSize: '3rem' }}>
        Latest updates from our blog
      </div>
      <br />
      <div className="topText" style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
        Follow the Xade blog updates for product announcements, new cool feature updates, and other useful information about our service
      </div>
      <br></br>
      <div className="blogContainer">
        <button className="blogButton" onClick={handlePrevious}>
          <ArrowBackIosIcon sx={{ color: 'white' }} />
        </button>
        <div className="boxfather">
          <div className={`betterbox betterbox6 ${currentIndex === 0 ? 'slide-in' : 'slide-out'}`}>
            <div className="headerText">
              <span style={{ display: 'inline-block' }}>{blogs[currentIndex].title}</span>
            </div>
            <br />
            <br />
            <div className="circle"></div>
            <br />
            <div className="topText">
              <span style={{ display: 'inline-block' }}>{blogs[currentIndex].description}</span>
            </div>
            <br />
            <br />
            <br />
            <div className="readNow">
              <div className="readNowBtn">
                <button>{blogs[currentIndex].buttonText}</button>
              </div>
            </div>
          </div>

          <div className={`betterbox betterbox6 ${currentIndex === blogs.length - 1 ? 'slide-in' : 'slide-out'}`}>
            <div className="headerText">
              <span style={{ display: 'inline-block' }}>{blogs[currentIndex === blogs.length - 1 ? 0 : currentIndex + 1].title}</span>
            </div>
            <br />
            <br />
            <div className="circle"></div>
            <br />
            <div className="topText">
              <span style={{ display: 'inline-block' }}>{blogs[currentIndex === blogs.length - 1 ? 0 : currentIndex + 1].description}</span>
            </div>
            <br />
            <br />
            <div className="readNow">
              <div className="readNowBtn">
                <button>{blogs[currentIndex === blogs.length - 1 ? 0 : currentIndex + 1].buttonText}</button>
              </div>
            </div>
          </div>
        </div>
        <button className="blogButton" onClick={handleNext} style={{ backgroundColor: 'none' }}>
          <ArrowForwardIosIcon sx={{ color: 'white' }} />
        </button>
      </div>
      <br />
      <div className="blogbtncontainer">
        <div className="blogvtbutton">
          <button className="bvtb1" onClick={handlePrevious}>
            <ArrowBackIosIcon sx={{ color: 'white' }} />
          </button>
          <button className="bvtb1" onClick={handleNext}>
            <ArrowForwardIosIcon style={{ backgroundColor: 'none' }} sx={{ color: 'white' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
