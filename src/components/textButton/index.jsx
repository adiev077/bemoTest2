import React from 'react';
import {Button, Typography} from "@mui/material";

function BlockButton() {
  return (
    <div style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      maxWidth: 338,
      width: "100%",
      gap: 20,
      left: 130,
      top: 50,
    }}>
      <div>
        <p style={{
          color: "#2f293e",
          fontSize: 18,
          lineHeight: "normal",
          fontWeight: 500,
          fontFamily: "CeraRoundPro, sans-serif",
          width: "90%"
        }}>
          Experience a New Kind of
          Deposit: Always Growing, Fully Tradable, and DeFi Ready:
        </p>
      </div>
      <Button sx={{
        color: "#fff",
        fontSize: 18,
        fontWeight: 700,
        borderRadius: 5,
        backgroundColor: "#2f293e",
        height: 70,
        width: 240,
        fontFamily: "CeraRoundProBold",
      }}>
        STAKE NOW
      </Button>
    </div>
  );
}

export default BlockButton;