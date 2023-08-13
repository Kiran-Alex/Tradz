import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import "../styles/better.css";
import { Col, InputNumber, Row, Space } from "antd";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Drawer from "@mui/material/Drawer";
import { encodeErrorResult, parseEther,stringToHex } from 'viem'
import Button from "@mui/material/Button";
import { ethers } from "ethers";
import {
  CLEARING_HOUSE_ADDRESS,
  BTC_BASE_TOKEN_ADDRESS,
  QUOTE_TOKEN_ADDRESS,
  ORDER_BOOK_ADDRESS,
  VAULT_ADDRESS,
  XUSD_ADDRESS,
} from "../constants/constants";
import clearingHouseABI from "../constants/abis/clearingHouseABI.json";
import xusdABI from "../constants/abis/xusdABI.json";
import vaultABI from "../constants/abis/vaultABI.json";

const Derivex = () => {
  const [inputValue, setInputValue] = useState(1);
  const { address, connector: activeConnector, isConnected } = useAccount();
  const [value, setValue] = React.useState(1);
  const [tab, setTab] = useState(true);
  const [Menu, setMenu] = useState(1);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [Arrow, setArrow] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const { open, close } = useWeb3Modal();
  const [tohmenu, setTohmenu] = useState(1);

  const amountArg =  56 ;
  const deadline = 1912176727 ; 

  const params = {
    baseToken: BTC_BASE_TOKEN_ADDRESS,
    isBaseToQuote: true, 
    isExactInput: true,  
    amount: parseEther("1.0"), 
    oppositeAmountBound:parseEther("0.5"), 
    deadline: Math.floor(Date.now() / 1000) + 60 * 20,  //  20 minutes from now
    sqrtPriceLimitX96: 0,
    referralCode: stringToHex(
      'Hello world', 
      { size: 32 }
    ) // Convert string referral code to bytes32
};

  const { config: setOpenPositionLongConfig } = usePrepareContractWrite({
    address: CLEARING_HOUSE_ADDRESS,
    abi: clearingHouseABI,
    // overrides: {
    //   gasLimit: 690000, // Keeping this here just in case you need to modify the gas limit
    // },
    functionName: "openPosition",
    args: [params
      // {
      //   baseToken:  BTC_BASE_TOKEN_ADDRESS,
      //   isBaseToQuote: false,
      //   isExactInput: true,
      //   amount: amountArg,
      //   oppositeAmountBound: 0,
      //   deadline : deadline,
      //   sqrtPriceLimitX96: 0,
      //   referralCode: ethers.constants.HashZero,
      // },
    ], // TODO: Change args from "56" to an amountArg variable
  });

  const { write: submitOpenPositionLong } = useContractWrite({
    ...setOpenPositionLongConfig,
    async onSuccess(data) {
      // You can add Snackbar notifications such as from https://notistack.com/
      await enqueueSnackbar('Success')
    },
    async onError(data) {
      // You can add Snackbar notifications such as from https://notistack.com/
       await enqueueSnackbar('Failure')
    },
  });

  const [rows1, setRows] = useState([
    {
      type: "Buy",
      pair: "BTC/USD",
      leverage: "1:100",
      collateral: "$1000",
      openPrice: "$45000",
      price: "$45500",
      liqSl: "45000",
      takeProfit: "46000",
      netPnl: "$200",
      icon: "https://gains.trade//_next/static/media/btc.fdaa3ece.svg", // Replace with the path to your custom icon
    },
    {
      type: "Buy",
      pair: "BTC/USD",
      leverage: "1:100",
      collateral: "$1000",
      openPrice: "$45000",
      price: "$45500",
      liqSl: "45000",
      takeProfit: "46000",
      netPnl: "$200",
      icon: "https://gains.trade//_next/static/media/btc.fdaa3ece.svg", // Replace with the path to your custom icon
    },
    {
      type: "Buy",
      pair: "BTC/USD",
      leverage: "1:100",
      collateral: "$1000",
      openPrice: "$45000",
      price: "$45500",
      liqSl: "45000",
      takeProfit: "46000",
      netPnl: "$200",
      icon: "https://gains.trade//_next/static/media/btc.fdaa3ece.svg", // Replace with the path to your custom icon
    },
    {
      type: "Buy",
      pair: "BTC/USD",
      leverage: "1:100",
      collateral: "$1000",
      openPrice: "$45000",
      price: "$45500",
      liqSl: "45000",
      takeProfit: "46000",
      netPnl: "$200",
      icon: "https://gains.trade//_next/static/media/btc.fdaa3ece.svg", // Replace with the path to your custom icon
    },
    // Add more data objects here if needed
  ]);

  const createData = (size, time, price) => {
    return { size, time, price };
  };

  const rows = [
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
    createData(0.0904743, "7/19 15:17", "30,020.9"),
  ];

  const handleDeleteRow = (index, event) => {
    // Create a new array without the row to be deleted
    const updatedRows = rows1.filter((_, i) => i !== index);

    setRows(updatedRows);
    if (isNarrowScreen) {
      event.stopPropagation();
    }
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const Table = ({ data }) => {
    return (
      <table className="table2">
        <thead>
          <tr>
            <th>Size</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ color: "rgba(94,217,151,1)" }}>{item.size}</td>
              <td style={{ color: "#747677" }}>{item.time}</td>
              <td>{item.price}</td>
              {/* Add your Market Trade data here, e.g., <td>{item.marketTrade}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const Input = styled(MuiInput)`
    width: 42px;
  `;

  const innerRef = useRef();
  const outerRef = useRef();
  const oRef = useRef();

  function LeftButton({ show, onClick }) {
    return (
      show && (
        <button className="scroll-button" onClick={onClick}>
          <KeyboardArrowLeftIcon sx={{ color: "white" }} />
        </button>
      )
    );
  }

  function RightButton({ show, onClick }) {
    return (
      show && (
        <button id="sb" onClick={onClick}>
          <KeyboardArrowRightIcon sx={{ color: "white" }} />
        </button>
      )
    );
  }

  useEffect(() => {
    const computedStyle = window.getComputedStyle(outerRef.current);
    const displayStatus = computedStyle.getPropertyValue("display");
    const bodyWidth = document.body.clientWidth;
    if (bodyWidth <= 660) {
      setArrow(true);
      console.log(displayStatus);
      console.log(Arrow);
    } else {
      setArrow(false);
      console.log(Arrow);
      console.log("a" + displayStatus);
    }
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 804);
      if (innerRef.current.scrollWidth > innerRef.current.clientWidth) {
        setShowRight(true);
      } else {
        setShowRight(false);
      }
    };

    const handleScroll = () => {
      if (innerRef.current.scrollLeft === 0) {
        setShowLeft(false);
      } else {
        setShowLeft(true);
      }

      if (
        innerRef.current.scrollLeft + innerRef.current.clientWidth ===
          innerRef.current.scrollWidth ||
        innerRef.current.scrollLeft !== 0
      ) {
        setShowRight(false);
      } else {
        setShowRight(true);
      }
    };

    innerRef.current.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      innerRef.current.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [Arrow]);

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
      <Tooltip enterTouchDelay={0} placement="bottom" title={value}>
        {children}
      </Tooltip>
    );
  }

  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };

  const onIChange = (value) => {
    console.log("changed", value);
  };

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 125,
      label: "125",
    },
  ];

  function valuetext(value) {
    onChange(value);
    return `${value}°C`;
  }

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLeftScroll = () => {
    innerRef.current.scrollTo({
      left: innerRef.current.scrollLeft - 100,
      behavior: "smooth",
    });
  };

  const handleRightScroll = () => {
    innerRef.current.scrollTo({
      left: innerRef.current.scrollLeft + 100,
      behavior: "smooth",
    });
  };

  return (
    <>
    <SnackbarProvider />
      <div className="lol" id="derivexlol">
        {/* twap - trading view widget and panel */}
        <div className="tvwap">
          <div className="tvw">
            <div className="tvwc">
              <div className="tvwch">
                <div className=" tvwch-1">
                  <div className="tvwch-1c">
                    <img src="https://gains.trade//_next/static/media/btc.fdaa3ece.svg" />
                    <span>BTC/USD</span>
                  </div>
                </div>
                <div className="  tvwch-2">
                  <div className="tvwch-2-1">
                    <span>30838.4</span>
                  </div>
                  <div className="tvwch-2-2">
                    <span>+429.2</span>
                  </div>
                </div>

                <div className="tvwhm" ref={Arrow === false ? innerRef : oRef}>
                  <LeftButton show={showLeft} onClick={handleLeftScroll} />
                  <div className=" tv tvwch-2">
                    <span className="oi">Mark Price</span>

                    <span className="oid">14.6M / 22M</span>
                  </div>

                  <div className=" tv tvwch-2">
                    <span className="oi">Index Price</span>

                    <span className="oid">361.6k / 22M</span>
                  </div>

                  <div className="tv tvwch-2">
                    <div className="tvwch-3-1">
                      <span>Volume (24h)</span>
                    </div>
                    <div className="tvwch-4-2">
                      <span>0.0067%</span>
                    </div>
                  </div>

                  

                  <div className="tv tvwch-2">
                    <div className="tvwch-3-1">
                      <span id="vq1">Funding Rate (8h)</span>
                    </div>
                    <div className="tvwch-5-2">
                      <span>0.0033%</span>
                    </div>
                  </div>
                </div>
                {Arrow === false ? (
                  <RightButton show={showRight} onClick={handleRightScroll} />
                ) : null}
              </div>
              <div className="tvwamtc">
                <div className="tvwnshmt1">
                  <div
                    className="tvwnshl"
                    id="tvwnshm1"
                    style={{ textAlign: "center", alignItems: "center" }}
                  >
                    Market Trades
                  </div>
                  <div className="tablecontainer">
                    <Table data={rows} />
                  </div>
                </div>
                <TradingViewWidget />
              </div>
              <div className="tvhmn" ref={outerRef}>
                <div className="tvwhm" ref={Arrow === true ? innerRef : oRef}>
                  <LeftButton show={showLeft} onClick={handleLeftScroll} />
                  <div className=" tv tvwch-2">
                    <span className="oi">Open Interest(L)</span>

                    <span className="oid">14.6M / 22M</span>
                  </div>

                  <div className=" tv tvwch-2">
                    <span className="oi">Open Interest(S)</span>

                    <span className="oid">361.6k / 22M</span>
                  </div>

                  <div className="tv tvwch-2">
                    <div className="tvwch-3-1">
                      <span>Borrowing (L)</span>
                    </div>
                    <div className="tvwch-4-2">
                      <span>0.0067%</span>
                    </div>
                  </div>

                  <div className="tv tvwch-2">
                    <div className="tvwch-3-1">
                      <span>Borrowing (S)</span>
                    </div>
                    <div className="tvwch-4-2">
                      <span>0.0000%</span>
                    </div>
                  </div>

                  <div className="tv tvwch-2">
                    <div className="tvwch-3-1">
                      <span id="vq1">Rollover</span>
                    </div>
                    <div className="tvwch-5-2">
                      <span>0.0033%</span>
                    </div>
                  </div>
                  <RightButton show={showRight} onClick={handleRightScroll} />
                </div>
              </div>
              <div className="tvwp" id="tvwp1">
                <div className="tvwpht">
                  <div className="tvwpht1">
                    <button
                      onClick={() => setTab(true)}
                      id={tab ? "tvwphtll" : ""}
                    >
                      LONG
                    </button>
                    <button
                      onClick={() => setTab(false)}
                      id={tab == false ? "tvwphtls" : ""}
                    >
                      SHORT
                    </button>
                  </div>
                  <div className="tvwpht2">
                    <div className="tvwpht2-m">
                      <button
                        onClick={() => setMenu(1)}
                        id={Menu === 1 ? "tvwpht2-mb" : ""}
                      >
                        Market
                      </button>
                      <button
                        onClick={() => setMenu(2)}
                        id={Menu === 2 ? "tvwpht2-mb" : ""}
                      >
                        Limit
                      </button>
                      <button
                        onClick={() => setMenu(3)}
                        id={Menu === 3 ? "tvwpht2-mb" : ""}
                      >
                        Stop
                      </button>
                    </div>
                    <div className={Menu !== 1 ? "tscs" : "tscsn"}>
                      <span>Coming Soon</span>
                    </div>
                    <div
                      className={
                        Menu === 1 ? "tvwphtcontainer" : "tvwphtcontainer23"
                      }
                    >
                      <div className="tvwpht2-c">
                        <div className="tvwpht2-c1">
                          Collateral <span>(50-250k)</span>
                        </div>
                        <div className="tvwpht2-c2">
                          <input type="text" value={50}></input>
                        </div>
                      </div>
                      <div className="tvwpht2-r">
                        <div className="tvwpht2-r1">
                          <div className="tvwpht2-r1-1">
                            Leverage<span> (1-10x)</span>
                          </div>
                          <div className="tvwpht2-r1-2">
                            <Col span={4}>
                              <Input
                                value={value}
                                size="small"
                                onChange={onChange}
                                onBlur={handleBlur}
                                inputProps={{
                                  min: 1,
                                  max: 10,
                                  type: "number",
                                  "aria-labelledby": "Custom marks",
                                }}
                                sx={{
                                  "& .MuiInput-input": {
                                    color: "white",
                                    backgroundColor: "black",
                                    width: 82,
                                    height: 20, // Update the height here
                                    borderRadius: 1,
                                  },
                                  ".MuiInputBase-input": {
                                    width: 77,
                                    paddingLeft: 1.8,
                                  },
                                  "&.MuiInputBase-root": {
                                    width: 101,
                                    marginTop: 0.5,
                                  },
                                }}
                              />
                            </Col>
                          </div>
                        </div>
                        <div className="tvwpht2-r2">
                          {/* <Slider
                            aria-label="Custom marks"
                            defaultValue={1}
                            max={10}
                            getAriaValueText={valuetext}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            marks={marks}
                            sx={{
                              " .MuiSlider-markLabel": {
                                color: "#82828F", // Set the desired mark label color here
                              },
                              ".MuiSlider-rail": {
                                color: "#282C3B",
                                height: "10px",
                              },
                              "& .MuiSlider-thumb": {
                                width: 15,
                                height: 15,
                                border: " 2px solid white",
                                color: "#282C3B",
                              },
                              "	.MuiSlider-track": {
                                backgroundColor: "#D65CD9",
                                height: "10px",
                                border: "0px",
                              },
                              ".MuiSlider-valueLabel:before": {
                                width: "0px",
                              },
                            }}
                          /> */}
                        </div>
                      </div>

                      <div className="tvwpht2-p">
                        <div className="tvwpht2-p1">
                          <div className="tvwpht2-p1-1">Price</div>
                          <div className="tvwpht2-p1-2">Slippage(%)</div>
                        </div>
                        <div className="tvwpht2-p2">
                          <div className="tvwpht2-p2-1">
                            <span>30415</span>
                          </div>
                          <div className="tvwpht2-p2-2">
                            <InputNumber
                              min={1}
                              id="p2-2i"
                              defaultValue={1}
                              style={{
                                marginRight: 6,
                                marginTop: 3,
                                backgroundColor: "black",
                                outline: "none",
                                borderStyle: "none",
                                color: "white",
                              }}
                              onChange={onIChange}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className='tvwpht2-s'>

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

                                        </div> */}
                      {/* <div className='tvwpht2-t'>

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

                                        </div> */}
                      {/* onClick={() => submitOpenPositionLong?.()} */}
                      <div className="tvwpht2-btn">
                        {isConnected ? (
                          <button>
                            MARKET (LONG)
                          </button>
                        ) : (
                          <div
                            className="bcont"
                            onClick={() => {
                              open();
                            }}
                          >
                            <span>CONNECT WALLET</span>
                          </div>
                        )}
                      </div>

                      <div className="tvwphyt2-mc">
                        <div className="tvwphyt2-m">
                          <span
                            className="tvwphyt2-m-spanl"
                            id="tvwphyt2-m-spanl-hl"
                          >
                            BTC/USD
                          </span>
                          {isConnected ? (
                            <span
                              className="tvwphyt2-m-spanr"
                              id="tvwphyt2-m-spanl-hr"
                            >
                              POSITION SIZE {"<"} {"  "} 1,500 DAI
                            </span>
                          ) : (
                            <span
                              className="tvwphyt2-m-spanr"
                              id="tvwphyt2-m-spanl-hr"
                            >
                              WALLET NOT CONNECTED
                            </span>
                          )}
                        </div>
                        <div className="tvwphyt2-m">
                          <span className="tvwphyt2-m-spanl">
                            EST. EXECUTION PRICE
                          </span>
                          <span className="tvwphyt2-m-spanr">30740.6</span>
                        </div>
                        <div className="tvwphyt2-m">
                          <span className="tvwphyt2-m-spanl">SPREAD</span>
                          <span className="tvwphyt2-m-spanr">0.04%</span>
                        </div>
                        <div className="tvwphyt2-m">
                          <span className="tvwphyt2-m-spanl">
                            POSITION SIZE
                          </span>
                          <span className="tvwphyt2-m-spanr">100 DAI</span>
                        </div>
                        <div className="tvwphyt2-m">
                          <span className="tvwphyt2-m-spanl">FEES</span>
                          <span className="tvwphyt2-m-spanr">0.1 DAI</span>
                        </div>
                        <div className="tvwphyt2-m">
                          <span className="tvwphyt2-m-spanl">LIQ. PRICE</span>
                          <span className="tvwphyt2-m-spanr">16907.6</span>
                        </div>
                        <div className="tvwphyt2-m">
                          <span className="tvwphyt2-m-spanl">
                            EST. BORROWING FEE / H
                          </span>
                          <span className="tvwphyt2-m-spanr">0.0 DAI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tvwns">
              <div className="tvwnsh">
                <div className="tvwnshl">
                  &nbsp;&nbsp;&nbsp;
                  <button
                    onClick={() => {
                      setTohmenu(1);
                    }}
                  >
                    Trades
                  </button>
                  <button
                    onClick={() => {
                      setTohmenu(2);
                    }}
                  >
                    Orders
                  </button>
                  <button
                    onClick={() => {
                      setTohmenu(3);
                    }}
                  >
                    History
                  </button>
                </div>

                {isConnected ? (
                  <div className="tvwnshr1" id={tohmenu === 1 ? "q" : "were"}>
                    <table className="table1">
                      <thead>
                        <tr>
                          {isNarrowScreen ? (
                            <>
                              <th>Type</th>
                              <th>Pair</th>
                              <th>SL/TP</th>
                              <th>Net Pnl</th>
                              <th>Close</th>
                            </>
                          ) : (
                            <>
                              <th>Type</th>
                              <th>Pair</th>
                              <th>Leverage</th>
                              <th>Collateral</th>
                              <th>Open Price</th>
                              <th>Price</th>
                              <th>Liq/SL</th>
                              <th>Take Profit</th>
                              <th>Net Pnl</th>
                              <th>Close</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {rows1.map((item, index) => (
                          <tr key={index} onClick={() => handleRowClick(item)}>
                            {isNarrowScreen ? (
                              <>
                                <td>{item.type}</td>
                                <td>
                                  <span>
                                    {item.icon && (
                                      <img
                                        style={{
                                          width: "15px",
                                          marginRight: "5px",
                                        }}
                                        src={item.icon}
                                        alt="Icon"
                                      />
                                    )}
                                  </span>
                                  {item.pair}
                                </td>
                                <td>SL/TP</td>
                                <td>{item.netPnl}</td>
                                <td className="tdclose">
                                  <button
                                    onClick={(event) =>
                                      handleDeleteRow(index, event)
                                    }
                                  >
                                    x
                                  </button>
                                </td>
                              </>
                            ) : (
                              <>
                                <td>{item.type}</td>
                                <td>
                                  <span>
                                    {item.icon && (
                                      <img
                                        style={{
                                          width: "15px",
                                          marginRight: "5px",
                                        }}
                                        src={item.icon}
                                        alt="Icon"
                                      />
                                    )}
                                  </span>
                                  {item.pair}
                                </td>
                                <td>{item.leverage}</td>
                                <td>{item.collateral}</td>
                                <td>{item.openPrice}</td>
                                <td>{item.price}</td>
                                <td>{item.liqSl}</td>
                                <td>{item.takeProfit}</td>
                                <td>{item.netPnl}</td>
                                <td className="tdclose">
                                  <button
                                    onClick={() => handleDeleteRow(index)}
                                  >
                                    x
                                  </button>
                                </td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="tvwnshr">
                    <span style={{ color: "#82828F" }}>
                      Wallet not connected
                    </span>{" "}
                    &nbsp;&nbsp;{" "}
                    <button
                      onClick={() => {
                        open();
                      }}
                    >
                      Connect
                    </button>
                  </div>
                )}

                {isNarrowScreen && (
                  <Drawer
                    anchor="bottom"
                    open={isDrawerOpen}
                    onClose={handleDrawerClose}
                    sx={{
                      "& .MuiDrawer-paper": {
                        borderRadius: "15px 15px 0 0",
                        borderColor: "#121216",
                        outline: "none",
                        borderTop: "0.5px solid #3deca7;",
                      },
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#121216",
                        width: "100%",
                        padding: 16,
                        paddingBottom: 6,
                        height: "70vh",
                      }}
                    >
                      <div className="drawerheader">
                        <div className="dh1">
                          <div>
                            <img src="https://gains.trade//_next/static/media/btc.fdaa3ece.svg" />
                            &nbsp;<span>BTC/USD</span>
                          </div>
                        </div>
                        <span>LONG</span>
                      </div>
                      <div className="maincontentdrawer">
                        <table className="drawertable">
                          <tbody>
                            {selectedRow && (
                              <>
                                <tr>
                                  <th>Type</th> <td>{selectedRow.type}</td>
                                </tr>

                                <tr>
                                  <th>Leverage</th>{" "}
                                  <td>{selectedRow.leverage}</td>
                                </tr>
                                <tr>
                                  <th>Collateral</th>{" "}
                                  <td>{selectedRow.collateral}</td>
                                </tr>
                                <tr>
                                  <th>Open Price</th>{" "}
                                  <td>{selectedRow.openPrice}</td>
                                </tr>
                                <tr>
                                  <th>Price</th> <td>{selectedRow.price}</td>
                                </tr>
                                <tr>
                                  <th>Liq/SL</th> <td>{selectedRow.liqSl}</td>
                                </tr>
                                <tr>
                                  <th>Take Profit</th>{" "}
                                  <td>{selectedRow.takeProfit}</td>
                                </tr>
                                <tr>
                                  <th>Net Pnl</th> <td>{selectedRow.netPnl}</td>
                                </tr>
                              </>
                            )}
                          </tbody>
                        </table>
                        <div className="sharebtn">
                          <button>Share Trade</button>
                        </div>
                      </div>
                    </div>
                  </Drawer>
                )}
              </div>
              <div className="tvwnshm">
                <div
                  className="tvwnshl"
                  id="tvwnshm1"
                  style={{ textAlign: "center", alignItems: "center" }}
                >
                  Market Trades
                </div>
                <div className="tablecontainer">
                  <Table data={rows} />
                </div>
              </div>
            </div>
          </div>

          <div className="tvwp" id="tvwp2">
            <div className="tvwpht">
              <div className="tvwpht1">
                <button onClick={() => setTab(true)} id={tab ? "tvwphtll" : ""}>
                  LONG
                </button>
                <button
                  onClick={() => setTab(false)}
                  id={tab == false ? "tvwphtls" : ""}
                >
                  SHORT
                </button>
              </div>
              <div className="tvwpht2">
                <div className="tvwpht2-m">
                  <button
                    onClick={() => setMenu(1)}
                    id={Menu === 1 ? "tvwpht2-mb" : ""}
                  >
                    Market
                  </button>
                  <button
                    onClick={() => setMenu(2)}
                    id={Menu === 2 ? "tvwpht2-mb" : ""}
                  >
                    Limit
                  </button>
                  <button
                    onClick={() => setMenu(3)}
                    id={Menu === 3 ? "tvwpht2-mb" : ""}
                  >
                    Stop
                  </button>
                </div>
                <div className={Menu !== 1 ? "tscs" : "tscsn"}>
                  <span>Coming Soon</span>
                </div>
                <div
                  className={
                    Menu === 1 ? "tvwphtcontainer" : "tvwphtcontainer23"
                  }
                >
                  <div className="tvwpht2-c">
                    <div className="tvwpht2-c1">
                      Collateral <span>(50-250k)</span>
                    </div>
                    <div className="tvwpht2-c2">
                      <input type="text" value={50}></input>
                    </div>
                  </div>
                  <div className="tvwpht2-r">
                    <div className="tvwpht2-r1">
                      <div className="tvwpht2-r1-1">
                        Leverage<span> (1-10x)</span>
                      </div>
                      <div className="tvwpht2-r1-2">
                        <Col span={4}>
                          <Input
                            value={value}
                            size="small"
                            onChange={onChange}
                            onBlur={handleBlur}
                            inputProps={{
                              min: 1,
                              max: 10,
                              type: "number",
                              "aria-labelledby": "Custom marks",
                            }}
                            sx={{
                              "& .MuiInput-input": {
                                color: "white",
                                backgroundColor: "black",
                                width: 82,
                                height: 20, // Update the height here
                                borderRadius: 1,
                              },
                              ".MuiInputBase-input": {
                                width: 77,
                                paddingLeft: 1.8,
                              },
                              "&.MuiInputBase-root": {
                                width: 101,
                                marginTop: 0.5,
                              },
                            }}
                          />
                        </Col>
                      </div>
                    </div>
                    <div className="tvwpht2-r2">
                      {/* <Slider
                        aria-label="Custom marks"
                        defaultValue={1}
                        max={10}
                        getAriaValueText={valuetext}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        marks={marks}
                        sx={{
                          " .MuiSlider-markLabel": {
                            color: "#82828F", // Set the desired mark label color here
                          },
                          ".MuiSlider-rail": {
                            color: "#282C3B",
                            height: "10px",
                          },
                          "& .MuiSlider-thumb": {
                            width: 15,
                            height: 15,
                            border: " 2px solid white",
                            color: "#282C3B",
                          },
                          "	.MuiSlider-track": {
                            backgroundColor: "#D65CD9",
                            height: "10px",
                            border: "0px",
                          },
                          ".MuiSlider-valueLabel:before": {
                            width: "0px",
                          },
                        }}
                      /> */}
                    </div>
                  </div>

                  <div className="tvwpht2-p">
                    <div className="tvwpht2-p1">
                      <div className="tvwpht2-p1-1">Price</div>
                      <div className="tvwpht2-p1-2">Slippage(%)</div>
                    </div>
                    <div className="tvwpht2-p2">
                      <div className="tvwpht2-p2-1">
                        <span>30415</span>
                      </div>
                      <div className="tvwpht2-p2-2">
                        <InputNumber
                          min={1}
                          id="p2-2i"
                          defaultValue={1}
                          style={{
                            marginRight: 6,
                            marginTop: 3,
                            backgroundColor: "black",
                            outline: "none",
                            borderStyle: "none",
                            color: "white",
                          }}
                          onChange={onIChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className='tvwpht2-s'>

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

                                </div> */}
                  {/* <div className='tvwpht2-t'>

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

                                </div> */}
                  <div className="tvwpht2-btn">
                    {isConnected ? (
                      <button >MARKET {tab ? "(LONG)" : "(SHORT)"}</button>
                    ) : (
                      <div
                        className="bcont"
                        onClick={() => {
                          open();
                        }}
                      >
                        <span>CONNECT WALLET</span>
                      </div>
                    )}
                  </div>
                  <div className="tvwphyt2-mc">
                    <div className="tvwphyt2-m">
                      <span
                        className="tvwphyt2-m-spanl"
                        id="tvwphyt2-m-spanl-hl"
                      >
                        BTC/USD
                      </span>
                      {isConnected ? (
                        <span
                          className="tvwphyt2-m-spanr"
                          id="tvwphyt2-m-spanl-hr"
                        >
                          POSITION SIZE {"<"} {"  "} 1,500 DAI
                        </span>
                      ) : (
                        <span
                          className="tvwphyt2-m-spanr"
                          id="tvwphyt2-m-spanl-hr"
                        >
                          WALLET NOT CONNECTED
                        </span>
                      )}
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">
                        EST. EXECUTION PRICE
                      </span>
                      <span className="tvwphyt2-m-spanr">30740.6</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">SPREAD</span>
                      <span className="tvwphyt2-m-spanr">0.04%</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">POSITION SIZE</span>
                      <span className="tvwphyt2-m-spanr">100 DAI</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">FEES</span>
                      <span className="tvwphyt2-m-spanr">0.1 DAI</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">LIQ. PRICE</span>
                      <span className="tvwphyt2-m-spanr">16907.6</span>
                    </div>
                    <div className="tvwphyt2-m">
                      <span className="tvwphyt2-m-spanl">
                        EST. BORROWING FEE / H
                      </span>
                      <span className="tvwphyt2-m-spanr">0.0 DAI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Derivex;
