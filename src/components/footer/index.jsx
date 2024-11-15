import React, {useState} from 'react';

function Footer(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is incorrect");
      setIsSuccess(false);
    } else {
      setError("");
      setIsSuccess(true);
    }
  };
  return (
    <div style={{
      width: "100%",
      height: 440,
      backgroundColor: "#2f293e"
    }}>
      <div style={{
        paddingTop: 60,
        width: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}>
          <p style={{
            color: "#fff",
            fontSize: 18,
          }}>
            Newsletter
          </p>
          <p style={{
            color: "#fff",
            fontSize: 18,
          }}>
            Sign up for our newsletter to
            learn more.
          </p>
          <div style={{
            width: 423,
            height: 60,
          }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                style={{
                  width: "293px",
                  height: "60px",
                  color: "rgb(47, 41, 62)",
                  border: "0px solid rgb(0, 0, 0)",
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: "15px",
                  fontSize: "18px",
                  fontWeight: "400",
                  padding: "0 15px",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0px 15px",
                  display: "block",
                  width: "120px",
                  fontWeight: "600",
                  height: "62px",
                  backgroundColor: "#a334e9",
                  color: "#fff",
                  border: "none",
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
              {error && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginLeft: "10px",
                  }}
                >
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
        <div style={{
          display: "flex",
          gap: 100,
          width: "100%",
          paddingLeft: 200,
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}>
            <p style={{
              color: "#fff",
              fontSize: 18,
            }}>Community</p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}>
              <p style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "CeraRoundPro, sans-serif",
              }}>X</p>
              <p style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "CeraRoundPro, sans-serif",
              }}>Telegram</p>
              <p style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "CeraRoundPro, sans-serif",
              }}>Linkedin</p>
              <p style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "CeraRoundPro, sans-serif",
              }}>Contact</p>
            </div>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}>
            <p style={{
              color: "#fff",
              fontSize: 18,
            }}>Docs</p>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}>
              <p style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "CeraRoundPro, sans-serif",
              }}>Documentation</p>
              <p style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "CeraRoundPro, sans-serif",
              }}>Terms of Use</p>
              <p style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "CeraRoundPro, sans-serif",
              }}>Privacy Policy</p>
              <p style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "CeraRoundPro, sans-serif",
              }}>Disclamer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;