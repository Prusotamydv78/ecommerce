import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Button = styled.button`
  height: 4rem;
  width: 10rem;
  outline: none;
  border: 2px solid #1c69cd;
  background-color: #4373b2;
  border-radius: 2px;
  color: #f5f5f5;
  font-weight: bold;

  &:hover {
    background-color: #56759d;
    cursor: pointer;
    border-color: #69a1ea;
    color: #ebe9e9;
    transition: 0.3s linear ease-in;
  }
`;
const Span = styled.span`
  position: absolute;
  height: 29rem;
  top: 18rem;
  width: 36rem;
  background: #2ba6cd;
  right: 11vw; 
  z-index: -5;
`;
const image =
  "https://media.istockphoto.com/id/1414502428/photo/smiling-mother-shopping-school-supplies-in-a-store.webp?b=1&s=170667a&w=0&k=20&c=UZvKggR62HbdDIMxNhuhovvTdr-Lhq08zvppx41pThY=";
const HeroSection = (props) => {
  return (
    <wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{props.heading}</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores sunt quis dolore expedita pariatur nihil, iure
              deserunt? Fuga, voluptatibus aspernatur?
            </p>
            <NavLink>
              <Button className="btn">Show Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src={image} className="img-style" alt="this is an" />
              <Span className="background-box"></Span>
            </figure>
          </div>
        </div>
      </div>
    </wrapper>
  );
};
const wrapper = styled.section;
export default HeroSection;
