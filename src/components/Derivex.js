import React from 'react'
import TradingViewWidget from './TradingViewWidget'
import "../styles/better.css"

const Derivex = () => {
    return (
        <>
            <div className='lol' id='derivexlol' style={{ marginTop: "7em" }}>
                {/* twap - trading view widget and panel */}
                <div className='tvwap'>
                    <div className='tvw'>
                        <TradingViewWidget />
                        <div className="tvwns">
                            
                        </div>
                    </div>
                    <div className='tvwp'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Derivex