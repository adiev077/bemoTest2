import React from 'react';
import {Typography} from "@mui/material";

function CenterTextComponent() {
  return (
    <div style={{
      paddingTop: 80,
      maxWidth: 640,
      width: "100%",
      margin: "0 auto",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}>
          <div style={{
            width: 300,
            height: 115,
            backgroundColor: "#2f293e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
          }}>
            <p style={{
              color: "#fff",
              fontSize: 104,
              fontWeight: 700,
              lineHeight: "104px",
            }}>
              bemo
            </p>
          </div>
          <p style={{
            color: "#2f293e",
            fontSize: 104,
            fontWeight: 700,
            margin: 0,
            lineHeight: "104px",
          }}>
            SMART,
          </p>
        </div>
        <div>
          <p style={{
            color: "#2f293e",
            fontSize: 104,
            fontWeight: 700,
            margin: 0,
            lineHeight: "104px",
          }}>
            STAKE NOW
          </p>
        </div>
      </div>
    </div>
  );
}

export default CenterTextComponent;