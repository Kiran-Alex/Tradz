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
                            <div className="tvwnsh">
                                <div className='tvwnshl'>
                                    <button>Trades</button>
                                    <button>Orders</button>
                                    <button>History</button>
                                </div>
                                <div className='tvwnshr'>
                                    
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className='tvwp'>
                    <div className='tvwpht'>
                        <button>LONG</button>
                        <button>SHORT</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Derivex