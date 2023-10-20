import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
 import {Context} from "./ContextApi/Product";
const About = () => {
  const a = useContext(Context)
  return <>
   <HeroSection heading="About Us"/>
  </>
};

export default About;