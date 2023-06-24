import React from 'react'
import "../styles/better.css"

const BlogSection = () => {
    return (
        <>
            <div className="lol">
                <br />
                <br />
                <div className="header" style={{ fontSize: "3rem" }}>
                    Latest updates from our blog
                </div>
                <br />
                <div className="topText" style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
                    Follow the Xade blog updates for product announcements, new cool feature updates, and other useful information about our service</div>
                <br></br>
                <div className="boxfather">
                    <div className="betterbox betterbox6">

                        <div className="headerText"> <span style={{ display: 'inline-block' }}>Sabex:</span><span style={{ display: 'inline-block' }}> Let’s beat inflation</span></div>
                        <br />
                        <br />
                        <div className="circle"></div>
                        <div className="mainText"><span style={{ display: 'inline-block' }}>Learn more about how our money protocol</span><span style={{ display: 'inline-block' }}> works and what benefits our users can get</span><span style={{ display: 'inline-block' }}>from using SabeX features </span><br /><br /></div>
                        <br/>
                        <div className='readNow'>
                            <div className='readNowBtn'>
                                <button>Read now</button>
                            </div>
                            <div className='readNowImg'>
                                <img src={process.env.PUBLIC_URL + '/Media/dollar-front-color.png'} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="betterbox betterbox6">
                        
                        <div className="headerText" ><span style={{ display: 'inline-block' }}>Derivex:</span><span style={{ display: 'inline-block' }}> Trading unleashed</span></div>
                        <br />
                        <br />
                        <div className="mainText"><span style={{ display: 'inline-block' }}>At last - our revolutional perpetual future </span> <span style={{ display: 'inline-block' }}>protocol is live! Learn more about its</span><span style={{ display: 'inline-block' }}> features and why it’s the best solution for </span><span style={{ display: 'inline-block' }}> trading in DeFi at this moment</span> </div>
                        <br/>
                        <br/>
                        <div className='readNow'>
                            <div className='readNowBtn'>
                                <button>Read now</button>
                            </div>
                            <div className='readNowImg'>
                                <img src={process.env.PUBLIC_URL + '/Media/chart-front-color.png'} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                
            </div>
        </>
    )
}

export default BlogSection