import React from 'react';
import {OtherLogo} from "../../assets/icons";
import eyes from "./../../assets/image/eyes.svg"

function LastBlock(props) {
  return (
    <div style={{
      padding: 40,
      width: "1200px",
      margin: "0 auto",
      height: 287,
      display: "flex",
      flexDirection: "column",
      gap: 30,
    }}>
      <p style={{
        fontSize: 50,
        color: "#2f293e",
      }}>
        Security Audit
      </p>
      <div style={{
        width: 561,
        height: 76,
        border: "1px solid #6257a1",
        borderRadius: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <OtherLogo/>
        </div>
        <div style={{
          backgroundColor: "#6257a1",
          backgroundPosition: "center center",
          borderColor: "transparent",
          borderStyle: "solid",
          width: "1px",
          height: "80%",
          transform: "scaleX(0.1)",
        }}></div>
        <p style={{
          fontSize: 18,
          color: "#2f293e",
          width: 185,
          height: 25,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          Audit Completed
        </p>
        <div style={{
          backgroundColor: "#6257a1",
          backgroundPosition: "center center",
          borderColor: "transparent",
          borderStyle: "solid",
          width: "1px",
          height: "80%",
          transform: "scaleX(0.1)",
        }}></div>
        <p style={{
          fontSize: 18,
          color: "#2f293e",
          fontFamily: "CeraRoundPro, sans-serif",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10
        }}>
          <img src={eyes} alt="" style={{
            width: 25,
            height: 15,
          }}/>
          View
          report
        </p>
      </div>
    </div>
  );
}

export default LastBlock;