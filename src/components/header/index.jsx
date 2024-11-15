import React from 'react';
import logo from "./../../assets/image/tild3563-3263-4864-b066-373033376131__logo.svg"
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <div style={{
      maxWidth: 1200,
      width: "100%",
      margin: "0 auto",
      paddingTop: 60,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <div>
        <img src={logo} alt="" style={{
          width: 182,
          height: 45,
        }}/>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        gap: 40,
      }}>
        <Link to={"/"} style={{
          color: "#2f293e",
          fontSize: 18,
          fontWeight: 400,
          textDecoration: "none",
          fontFamily: "CeraRoundPro, sans-serif",
        }}>
          How it works
        </Link>
        <Link to={"/"} style={{
          color: "#2f293e",
          fontSize: 18,
          fontWeight: 400,
          textDecoration: "none",
          fontFamily: "CeraRoundPro, sans-serif",
        }}>
          Benefits
        </Link>
        <Link to={"/"} style={{
          color: "#2f293e",
          fontSize: 18,
          fontWeight: 400,
          textDecoration: "none",
          fontFamily: "CeraRoundPro, sans-serif",
        }}>
          Docs
        </Link>
        <Link to={"/"} style={{
          color: "#2f293e",
          fontSize: 18,
          fontWeight: 700,
          textDecoration: "none",
        }}>
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Header;