import React from "react";
import "../styles/pools.css";
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';

const Pools = () => {
  return (
    <>
      <span></span>
      <div className="lol" id="derivexlol">
        <div className="poolmaincont">
          <div className="poolmch">
            <div className="poolmch1">
              <div className="poolmch11" style={{display:"flex",flexDirection : "row"}}>
                <div className="pmch1l">
                    <img src="	https://app.perp.com/assets/coins/btc.svg" alt="BTC"/>
                </div>&nbsp;&nbsp;&nbsp;
                <div className="pmch1c">
                    <span className="pmch1c1" >BTC</span>
                    <span className="pmch1c2" >Bitcoin</span>
                </div>
                </div>

            </div>
            <div className="pmch1s">

</div>
           
          </div>
          <div className="poolinfoliq">
            <div className="poolinfo">
              <div className="infocont"></div>
              <p>Pool Info</p>
              <div className="picont1">
                <div className="picont11"><span>Total Apr</span></div> 
                <div className="picont12"><span>0.0% - 349.7%</span></div>
              </div>
              <hr></hr>
              <div className="picont2">

                <div className="picont21">
                <div className="picont11"><span>Bas Apr</span></div> 
                <div className="picont211"><span>0.0% - 48.7%</span></div>
                </div>
                <div className="picont22">
                <div className="picont11"><span>Rewards Apr</span></div> 
                <div className="picont211"><span>0.0% - 301.0%</span></div>
                </div>
              </div>
              <hr></hr>
              <div className="picont3">
                <div className="picont31">
                    <div className="picont311">
                    <div className="picont11"><span>Market Price</span></div> 
                    <div className="picont3111"><span>$29,353.6</span></div>
                    </div>
                    <div className="picont312">
                    <div className="picont11"><span>TVL</span></div> 
                    <div className="picont3111"><span>$1.9M</span></div>
                    </div>
                </div>
                <div className="picont32">
                <div className="picont311">
                    <div className="picont11"><span>Volume (24h)</span></div> 
                    <div className="picont3111"><span>$888K</span></div>
                    </div>
                    <div className="picont312">
                    <div className="picont11"><span>24h Fees</span></div> 
                    <div className="picont3111"><span>$888.1</span></div>
                    </div>
                </div>
              </div>
            </div>
            <div className="poolliq">
            <p>Provided Liquidity</p>
             

              <div className="picont2 plc2">

                <div className="picont21">
                <div className="picont11"><span>Total Apr</span></div> 
                <div className="picont3111"><div><OpacityOutlinedIcon sx={{color : "rgba(0,181,216,1)",fontSize:30}}/></div>&nbsp;<span>$29,353.6</span></div>
                <div className="picont11"><span>Bronze - Playing it safe.</span></div> 
                </div>
                <div className="picont22">
                <div className="picont11"><span>Net Return</span></div> 
                <div className="picont3111"><div><OpacityOutlinedIcon sx={{color : "rgba(0,181,216,1)",fontSize:30}}/></div>&nbsp;<span>$29,353.6</span></div>
                </div>
              </div>
              <hr></hr>
              <div className="picont3 plc3">
                <div className="picont31">
                    <div className="picont311">
                    <div className="picont11"><span>Market Price</span></div> 
                    <div className="picont3111"><div><OpacityOutlinedIcon sx={{color : "rgba(0,181,216,1)",fontSize:30}}/></div>&nbsp;<span>$29,353.6</span></div>
                    </div>
                    <div className="picont312">
                    <div className="picont11"><span>TVL</span></div> 
                    <div className="picont3111"style={{color :"#3deca7"}}><span>-,---</span></div>
                    <div className="picont11"><span>Bronze - Playing it safe.</span></div> 
                    </div>
                </div>
                <div className="picont32">
                <div className="picont311">
                    <div className="picont11"><span>Volume (24h)</span></div> 
                    <div className="picont3111"><div><OpacityOutlinedIcon sx={{color : "rgba(0,181,216,1)",fontSize:30}}/></div>&nbsp;<span>$0.0</span></div>
                    
                    </div>
                    <div className="picont312">
                    <div className="picont11"><span>24h Fees</span></div> 
                    <div className="picont3111"><div><OpacityOutlinedIcon sx={{color : "rgba(0,181,216,1)",fontSize:30}}/></div>&nbsp;<span>$--</span></div>
                    </div>
                </div>

              </div>
              <hr></hr>
              <div className="plc4">
              <p>Liquidity Positions <span style={{color : "rgba(255, 255, 255, 0.80)"}}>(0/3)</span></p>
              <button>Add Liquidity</button>
              </div>

              <div className="plc5">
                <span>You can have up to 3 liquidity positions.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pools;
