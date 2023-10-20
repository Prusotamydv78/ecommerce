import React from "react";
import { useProductContaxt } from "../ContextApi/Product";
import styled from "styled-components";
import Product from "./Product";
function FeatureProducts() {
  const { isLoading, featureProducts } = useProductContaxt();
  if (isLoading) {
    return <h1>........Loading</h1>;
  }
  return (
    <>
      <Wrapper>
        <div className="container main">
          <div className="intro-data">Check Now</div>
          <div className="common-heading">Our Featuers Services</div>
          <div className="gird grid-three-column card-parent ">
            {featureProducts.map((curElem) => {
              return <Product className="card" key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  background: #f6f6f6;
  .main {
    .intro-data {
      font-size: 1.5rem;
    }
    .common-heading {
    }
    a {
      margin-right: 5rem;
      background: #eeeeee;
      border: 2px solid #bdbdbd4a;
      border-radius: 0.5rem;

      padding: 1rem;
 
      /* &::after {
        content: "";
        position: absolute;
        height: 100rem;
        width: 10%;
        background-color: #29292947;
        top: 93rem;
        left: 20.8rem;
        /* z-index: 2; */
      /* }
      &:hover::after {
        height: 21rem;
        transition: linear ease 0.3s;
        width: 31.5rem;
      } */ 
    }
  }
  .card-parent {
    display: flex;
    .card {
      position: relative;
      overflow: hidden;
      div {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        margin: 0.7rem 0;
      }
    }
    img {
      height: 20rem;
      width: 30rem;
      border-radius: 0.5rem;
      position: relative;
    }
  }
`;

export default FeatureProducts;
