
import "../styles/better.css";

import React, {useState, useEffect, useRef} from 'react'
const App = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const imageRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsExpanded(true);
              observer.unobserve(imageRef.current);
            }
          },
          { threshold: 0.5 } // Trigger the observer when the image is 50% in view
        );
        observer.observe(imageRef.current);
      }, []);
  return (

    <div className="lol" style = {{backgroundColor: '#0F0F10'}}>
         <div  className={`image-container1`}ref={imageRef}>
      <img  className={`imagecard`} src={process.env.PUBLIC_URL + '/Media/Group1.svg'} alt="Image" />
    </div>
    <div className="header3" style = {{marginTop:"5%",fontFamily: 'Benzin-Medium',color:'#ddd',textAlign:'center'}}></div>
      <div className="header"style = {{fontFamily: 'NeueMontreal-Bold', color:'#fff'}}>
        Get yourself the Xade card
      </div>
      <br />
      <div className="topText"style = {{fontFamily: 'Regular',color: '#B3C5BB'}}>
      Get your own non-custodial card powered by Visa to spend globally and to win exclusive rewards </div>
      <br></br>
	  <div className="CardbuttonContainer">
	  <button><b>Apply for card</b></button>
	  </div>
	  <br/>
      {/* <div className="header3" style = {{background:'#121314',marginTop:"2%",fontFamily: 'Benzin-Medium',color:'#ddd',textAlign:'center',paddingTop:'5%'}}>PARTNERS & BACKERS </div>
      <div className="header" style={{background:'#121314',fontFamily: 'Benzin-Bold', color:'#fff'}}>
      We are working with the best
      </div>
      <div className="topText"style = {{fontFamily: 'Regular',color: '#B3C5BB',background:'#121314'}}>
     We are working with the best projects in the space across community,infrastructure and more while we are backed by some reputable companies in the space</div>
      <br></br>
      <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<a href="http://www.google.com" target="_blank"><div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div></a>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
	</div>
</div>
     */}
    </div>
    
  );
};

export default App;