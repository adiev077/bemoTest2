import React from 'react';
import imgWallet from "./../../assets/image/tild3763-6664-4962-b037-386537623065__wallet.png"

function SecondBlockComponents(props) {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 780,
    }}>
      <div style={{
        position: "relative",
        left: 135,
        top: "-130px"
      }}>
        <p style={{
          fontSize: 50,
          fontWeight: 700,
          width: 398,
          height: 316,
          textAlign: "right"
        }}>
          Put Your TON Tokens to Work,
          staying liquid!
        </p>
      </div>
      <div style={{
        width: "425px",
        height: "482px",
        position: "absolute",
        display: "table",
        left: 475,
      }}>
        <div style={{
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(${imgWallet})`,
          backgroundRepeat: "no-repeat",
          borderColor: "transparent",
          borderStyle: "solid",
          display: "table-cell",
          verticalAlign: "middle",
          width: "100%",
        }}>
        </div>
      </div>
      <div style={{
        position: "relative",
        right: 125,
      }}>
        <p style={{
          fontSize: 50,
          fontWeight: 700,
          width: 378,
          height: 252,
          textAlign: "left",
        }}>
          Stake, Earn, and Enjoy the
          Rewards.
        </p>
        <p style={{
          color: "#2f293e",
          fontSize: 18,
          width: 315,
          height: 150,
          fontFamily: "CeraRoundPro, sans-serif",
        }}>
          Experience the Growth of Your
          TON Balance Right in Your Wallet. Want to learn more?
          <br/>
          <br/>
          Scroll down to
          discover how it works and its key benefits.
        </p>
      </div>
    </div>
  );
}

export default SecondBlockComponents;