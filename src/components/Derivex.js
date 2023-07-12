import React from 'react'
import TradingViewWidget from './TradingViewWidget'
import "../styles/better.css"
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { useState } from "react";
import { Margin } from '@mui/icons-material';
import { background } from '@chakra-ui/react';

const Derivex = () => {
    const [inputValue, setInputValue] = useState(1);

    const longButtonRef = React.useRef(null)
    const marketButtonRef = React.useRef(null);

    React.useEffect(() => {
        marketButtonRef.current.focus();
        longButtonRef.current.focus();
    }, []);

    const onIChange = (value) => {
        console.log('changed', value);
    };

    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    return (
        <>
            <div className='lol' id='derivexlol' style={{ marginTop: "7em" }}>
                {/* twap - trading view widget and panel */}
                <div className='tvwap'>
                    <div className='tvw'>
                        <div className="tvwc">
                            <div className='tvwch'>
                                <div className='tvwch-1'>
                                    <div className='tvwch-1c'>
                                        <img src='https://gains.trade//_next/static/media/btc.fdaa3ece.svg'/>
                                        <span>BTC/USD</span>
                                    </div>
                                </div>
                                <div className='tvwch-2'>
                                        <div className='tvwch-2-1'>
                                            <span>30838.4</span>
                                        </div>
                                        <div className='tvwch-2-2'>
                                           <span>+429.2</span>
                                        </div>
                                </div>
                                <div className='tvwch-2'>
                                        <div className='tvwch-3-1'>
                                            <span>Open Interest (L)</span>
                                        </div>
                                        <div className='tvwch-3-2'>
                                           <span>14.6M / 22M</span>
                                        </div>
                                </div>

                                <div className='tvwch-2'>
                                        <div className='tvwch-3-1'>
                                            <span>Open Interest (S)</span>
                                        </div>
                                        <div className='tvwch-3-2'>
                                           <span>361.6k / 22M</span>
                                        </div>
                                </div>

                                <div className='tvwch-2'>
                                        <div className='tvwch-3-1'>
                                            <span>Borrowing (L)</span>
                                        </div>
                                        <div className='tvwch-4-2'>
                                           <span>0.0067%</span>
                                        </div>
                                </div>

                                <div className='tvwch-2'>
                                        <div className='tvwch-3-1'>
                                            <span>Borrowing (S)</span>
                                        </div>
                                        <div className='tvwch-4-2'>
                                           <span>0.0000%</span>
                                        </div>
                                </div>

                                <div className='tvwch-2'>
                                        <div className='tvwch-3-1'>
                                            <span>Rollover</span>
                                        </div>
                                        <div className='tvwch-5-2'>
                                           <span>0.0033%</span>
                                        </div>
                                </div>
                                
                            </div>
                            <TradingViewWidget />
                        </div>
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
                            <div className='tvwpht1'>
                                <button ref={longButtonRef}>LONG</button>
                                <button>SHORT</button>
                            </div>
                            <div className='tvwpht2'>
                                <div className='tvwpht2-m'>
                                    {<button ref={marketButtonRef}>Market</button>}
                                    <button>Limit</button>
                                    <button>Stop</button>
                                </div>
                                <div className='tvwpht2-c'>
                                    <div className='tvwpht2-c1'>
                                        Collateral <span>(50-250k)</span>
                                    </div>
                                    <div className='tvwpht2-c2'>
                                        <input type='text' value={50}></input>
                                    </div>
                                </div>
                                <div className='tvwpht2-r'>
                                    <div className='tvwpht2-r1' >
                                        <div className='tvwpht2-r1-1' >
                                            Leverage{" "}<span> (50-250k)</span>
                                        </div>
                                        <div className='tvwpht2-r1-2'>
                                            <Col span={4}>
                                                <InputNumber
                                                    id='r1-2i'
                                                    min={1}
                                                    max={20}
                                                    style={{
                                                        marginRight: 6,
                                                        marginTop: 3,
                                                        backgroundColor: "black",
                                                        outline: "none",
                                                        borderStyle: "none"
                                                    }}
                                                    value={inputValue}
                                                    onChange={onChange}
                                                />
                                            </Col>
                                        </div>
                                    </div>
                                    <div className="tvwpht2-r2">
                                        <Col span={12}>
                                            <Slider
                                                id='r2-2r'
                                                min={1}
                                                max={150}

                                                onChange={onChange}
                                                value={typeof inputValue === 'number' ? inputValue : 0}
                                                trackStyle={{ background: "#2DD2B4", height: 7, alignSelf: "center" }}
                                                handleStyle={{ background: "black" }}
                                                style={{
                                                    background: '#282C3B',
                                                    height: 10,
                                                    cursor: "auto",
                                                    marginLeft: 15,
                                                }}


                                                tooltipPlacement="bottom"
                                            />

                                        </Col>
                                    </div>
                                </div>

                                <div className='tvwpht2-p'>
                                    <div className='tvwpht2-p1'>
                                        <div className='tvwpht2-p1-1'>
                                            Price
                                        </div>
                                        <div className='tvwpht2-p1-2'>
                                            Slippage(%)
                                        </div>
                                    </div>
                                    <div className='tvwpht2-p2'>
                                        <div className='tvwpht2-p2-1'>
                                            <span>30415</span>
                                        </div>
                                        <div className='tvwpht2-p2-2'>
                                            <InputNumber min={1} id='p2-2i' defaultValue={1} style={{
                                                marginRight: 6,
                                                marginTop: 3,
                                                backgroundColor: "black",
                                                outline: "none",
                                                borderStyle: "none",
                                                color: "white"
                                            }} onChange={onIChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className='tvwpht2-s'>

                                    <div className='tvwpht2-s1'>
                                        <div className='tvwpht2-s1-1'>
                                            Stop Loss <span className='tvwpht2-s1-span'>(None)</span>
                                        </div>
                                        <div className='tvwpht2-s1-2'>
                                            <span className='tvwpht2-s1-span'>None</span>
                                        </div>
                                    </div>
                                    <div className='tvwpht2-s2'>

                                        <div className='tvwpht2-s2-1'>

                                            <button className='tvwpht2-s2-1-c' >NONE</button>
                                            <button className='tvwpht2-s2-1-c' >-10%</button>
                                            <button className='tvwpht2-s2-1-c' >-25%</button>
                                            <button className='tvwpht2-s2-1-c' >-50%</button>
                                            <button className='tvwpht2-s2-1-c' >-75%</button>
                                            <input className='tvwpht2-s2-1-c' type='text' placeholder='PRICE' />
                                        </div>
                                    </div>

                                </div>
                                <div className='tvwpht2-t'>

                                    <div className='tvwpht2-t1'>
                                        <div className='tvwpht2-t1-1'>
                                            Take Profit <span className='tvwpht2-t1-span'>(168166)</span>
                                        </div>
                                        <div className='tvwpht2-t1-2'>
                                            <span className='tvwpht2-t1-span'>None</span>
                                        </div>
                                    </div>
                                    <div className='tvwpht2-t2'>

                                        <div className='tvwpht2-t2-1'>

                                            <button className='tvwpht2-t2-1-c' >25%</button>
                                            <button className='tvwpht2-t2-1-c' >50%%</button>
                                            <button className='tvwpht2-t2-1-c' >100%</button>
                                            <button className='tvwpht2-t2-1-c' >300%</button>
                                            <button className='tvwpht2-t2-1-c' >900%</button>
                                            <input className='tvwpht2-t2-1-c' type='text' placeholder='PRICE' />
                                        </div>
                                    </div>

                                </div>

                                <div className="tvwphyt2-mc">
                                    <div className='tvwphyt2-m'>
                                        <span className='tvwphyt2-m-spanl' id='tvwphyt2-m-spanl-hl'>
                                            BTC/USD
                                        </span>
                                        <span className='tvwphyt2-m-spanr' id='tvwphyt2-m-spanl-hr'>
                                            WALLET NOT CONNECTED
                                        </span>
                                    </div>
                                    <div className='tvwphyt2-m'>
                                        <span className='tvwphyt2-m-spanl'>
                                            EST. EXECUTION PRICE
                                        </span>
                                        <span className='tvwphyt2-m-spanr'>
                                            30740.6
                                        </span>
                                    </div>
                                    <div className='tvwphyt2-m'>
                                        <span className='tvwphyt2-m-spanl'>
                                            SPREAD
                                        </span>
                                        <span className='tvwphyt2-m-spanr'>
                                            0.04%
                                        </span>
                                    </div>
                                    <div className='tvwphyt2-m'>
                                        <span className='tvwphyt2-m-spanl'>
                                            POSITION SIZE

                                        </span>
                                        <span className='tvwphyt2-m-spanr'>
                                            100 DAI
                                        </span>
                                    </div>
                                    <div className='tvwphyt2-m'>
                                        <span className='tvwphyt2-m-spanl'>
                                            FEES
                                        </span>
                                        <span className='tvwphyt2-m-spanr'>
                                            0.1 DAI
                                        </span>
                                    </div>
                                    <div className='tvwphyt2-m'>
                                        <span className='tvwphyt2-m-spanl'>
                                            LIQ. PRICE
                                        </span>
                                        <span className='tvwphyt2-m-spanr'>
                                            16907.6
                                        </span>
                                    </div>
                                    <div className='tvwphyt2-m'>
                                        <span className='tvwphyt2-m-spanl'>
                                            EST. BORROWING FEE / H
                                        </span>
                                        <span className='tvwphyt2-m-spanr'>
                                            0.0 DAI
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Derivex