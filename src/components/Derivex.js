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
                                                color : "white"
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
                                                <input className='tvwpht2-s2-1-c' type='text' placeholder='PRICE'/>
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
                                                <input className='tvwpht2-t2-1-c' type='text' placeholder='PRICE'/>
                                            </div>
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