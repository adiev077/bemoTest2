import React from 'react';
import Header from "../../components/header";
import CenterTextComponent from "../../components/centerText";
import bg from "./../../assets/image/tvl-bg.webp";
import BlockButton from "../../components/textButton";
import img1 from "./../../assets/image/tild6637-6632-4861-a463-303363323237__stickers_v12.png";
import img2 from "./../../assets/image/tild3561-6230-4839-b539-333031393135__8d8c35e5-f407-4b15-b.png";
import img3 from "./../../assets/image/tild6335-3437-4562-a137-333139316666__blue_ton.png";
import SecondBlockComponents from "../../components/secondBlock";
import ThirdBlock from "../../components/thirdBlock";
import LastBlock from "../../components/lastBlock";
import Footer from "../../components/footer";

function HomePage(props) {
  return (
    <div>
      <div style={{
        height: 800,
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <Header />
        <CenterTextComponent />
        <img src={img1} alt="" style={{
          width: 185,
          height: 185,
          position: "absolute",
          right: 150,
          top: 170,
        }} />
        <img src={img2} alt="" style={{
          width: 270,
          height: 260,
          position: "absolute",
          right: 283,
          top: 360,
        }} />
        <img src={img3} alt="" style={{
          width: 300,
          height: 290,
          position: "absolute",
          right: 510,
          top: 465,
        }} />
        <BlockButton />
      </div>

      <div style={{
        backgroundColor: "#fff",
        paddingTop: 80,
      }}>
        <SecondBlockComponents/>
        <ThirdBlock/>
        <LastBlock/>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
