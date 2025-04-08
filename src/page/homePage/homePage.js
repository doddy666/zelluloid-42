import React, { useState, useEffect } from "react";
import Background from "./background/background";
import "./homePage.css"
import PromoBox from '../homePage/promoBox/promoBox';


const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <Background />
      <PromoBox />
    </div>
  );
};
export default HomePage;
