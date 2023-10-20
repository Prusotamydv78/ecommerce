import React from "react"; 
import HeroSection from "./components/HeroSection";
import Truested from './components/TrustedSection'
import Service from './components/Service' 
import FeatureProducts from "./components/FeatureProducts";
const Home = () => {
  
  return (<>
  <HeroSection heading="Our Store"/>
  <FeatureProducts/>
  <Service/>
  <Truested />
 
  </> 
)};

 
export default Home;