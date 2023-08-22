import React, { useState } from "react";
import { useEffect } from "react";
import * as FaIcon from "react-icons/fa";
import { SidebarData } from "./data";
import { LeftCircleOutlined, UserOutlined } from "@ant-design/icons";

import "./work.css";

import { Link } from "react-router-dom";

import * as AiIcon from "react-icons/ai";
import * as BiIcon from "react-icons/bi";



//  here i define dashboard design  or as we can say layout 

const Desboard = () => {
 

  const user = JSON.parse(localStorage.getItem("user"));

  
  const [selected, setSelected] = useState(0);
  const [sidebar, setSidebar] = useState(true);
  const [expanded, setExpaned] = useState(true);

  useEffect(() => {
  
  }, []);
  
  const getProduct1 = async () => {
  
    let result = await fetch("http://localhost:5000/getitemchart", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("authentication")),
      },
    });
    result = await result.json();

    console.log(result, "hh");
  
    
  }
  
  const getProduct = async () => {
  
    let result = await fetch("http://localhost:5000/getitem", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("authentication")),
      },
    });
    result = await result.json();
    // console.log(result, "ll");
    
  }
  
  const showSidebar = () => {
    setSidebar(true);
  };
  const hideSlider = () => {
    setSidebar(false);
  };

  const LogOut = () => {
    localStorage.clear();
  };

  const user1 = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div>
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpaned(!expanded)}
        >
          <FaIcon.FaBars onClick={showSidebar} />

          <h1
            style={{
              position: "absolute",
              top: "3px",
              left: "41%",
              fontSize: "4rem",
              fontFamily: "monospace",
              color: "white",
            }}
          >
            {" "}
            ..Dashb
            <span
              style={{
                color: "rgb(72 116 188)",
                margin: "1px",
                fontSize: "67px",
                filter: "drop-shadow(-1px 5px 6px gray",
              }}
            >
              O
            </span>
            ard..
          </h1>
        </div>

        {/* <LeftCircleOutlined  className="cross" onClick={hideSlider}style={{
           marginLeft: "210px",
          //  zIndex: "11",
           position: "absolute",
           marginTop:" -44px",
           color:"antiquewhite"
          
        }}/> */}

        <nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          style={{  borderRight: "2px solid white" }}
        >
          <ul
            className="nav-menu-items"
            style={{ width: "101%", position: "relative", left: "-3px" }}
          >
            <li className="navbar-toggle">
              <Link
                to="#"
                className="manu-bars1"
                style={{ fontSize: "3.5rem" }}
              ></Link>

              <LeftCircleOutlined
                className="cross"
                onMouseEnter={hideSlider}
                style={{ color: "black" }}
              />
            </li>
            <div className="cross1">
              {" "}
              <AiIcon.AiOutlineInbox
                style={{
                  fontSize: "4rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <span>
                Sh
                <span className="logo1" style={{ fontSize: "2rem" }}>
                  o
                </span>
                p
              </span>
            </div>
            <div className="menu">
              {SidebarData.map((item, index) => {
                return (
                  <div
                    className={
                      selected === index ? "menuItem active" : "menuItem"
                    }
                    style={{}}
                    key={index}
                    onClick={() => setSelected(index)}
                  >
                    <item.icon style={{ color:"#8f8c88"}}/>

                    <Link to={item.Link} className="heading">
                      <span>{item.heading}</span>
                    </Link>
                  </div>
                );
              })}
              <Link  className="heading">
                {user1 ? (
                  <span>
                    
                    <UserOutlined className="uselogo" />
                    <span
                      style={{
                        position: "relative",
                        left: "91px",
                        top: "112px",
                      }}
                    >
                      {user}
                    </span>
                  </span>
                ) : (
                  <Link  className="heading"></Link>
                )}
              </Link>
              <Link
                className="heading"
                style={{
                  position: "relative",
                  left: "-34px",
                  bottom: "-181px",
                }}
              >
                {user1 ? (
                  <Link to="/"className="heading">
                   <span onClick={LogOut} style={{ fontSize: "2rem" }}>
                    <BiIcon.BiLogOutCircle />
                  </span>
                  </Link>
                 
                ) : (
                  <Link to="/" className="heading">
                    <span></span>
                  </Link>
                )}
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Desboard;
