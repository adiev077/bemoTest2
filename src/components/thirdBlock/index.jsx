import React from 'react';
import {Diamond} from "@mui/icons-material";
import {Arrow, Reverse, Rocket} from "../../assets/icons";

function ThirdBlock() {
  return (
    <div style={{
      width: "1200px",
      margin: "0 auto",
      height: 817,
      display: "flex",
      flexDirection: "column",
      gap: 120,
    }}>
      <div style={{
        width: 340,
        height: 106,
      }}>
        <p style={{
          fontSize: 50,
          fontWeight: 700,
        }}>
          The benefits you get
        </p>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}>
          <Arrow/>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}>
            <p style={{
              fontSize: "25px",
              fontWeight: 700,
            }}>
              Liquidity
            </p>
            <p style={{
              width: 315,
              fontSize: 18,
              color: "#2f293e",
              fontFamily: "CeraRoundPro, sans-serif",
            }}>
              With stTON tokens, your
              staked TONs are always at your fingertips in your wallet. Forget the hassle
              of unstaking or enduring cool-down periods. Transfer, trade, or dive into
              the DeFi ecosystem at your convenience.
            </p>
          </div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}>
          <Reverse/>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}>
            <p style={{
              fontSize: "25px",
              fontWeight: 700,
            }}>
              Low entry barrier
            </p>
            <p style={{
              width: 313,
              fontSize: 18,
              color: "#2f293e",
              fontFamily: "CeraRoundPro, sans-serif",
            }}>
              With bemo staking becomes
              accessible to everyone. You can start
              your staking journey with just 1 TON,
              bypassing the traditional minimum
              stake requirement of 10,000 TONs.
              Don't miss out - with bemo,
              everyone gets a seat at the staking
              table.
            </p>
          </div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}>
          <Rocket/>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}>
            <p style={{
              fontSize: "25px",
              fontWeight: 700,
            }}>
              DeFi Benefits
            </p>
            <p style={{
              width: 330,
              fontSize: 18,
              color: "#2f293e",
              fontFamily: "CeraRoundPro, sans-serif",
            }}>
              Enhance the yield on your
              stTON tokens by participating in liquidity provision on decentralized
              exchanges or by lending them out via lending applications. This way, you're
              not just earning through staking, but also contributing to the DeFi
              ecosystem and earning additional returns. With bemo, your tokens work harder
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdBlock;