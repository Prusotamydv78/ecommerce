import React from "react";
import { NavLink } from "react-router-dom";
import FormatePrice from '../Helpers/FormatePrice'
import styled from "styled-components";
function Product(curElem) {
  const { id, name, image, price, category } = curElem;
  return (
    <>
      <NavLink to={`/singleproduct/:${id}`}>
        <div className="card">
          <figure>
            <Image src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data-price"><FormatePrice price={price}/></p>
          </div>
        </div>
      </NavLink>
    </>
  );
}
const Image = styled.img`
  
  &::after {
        content: "";
        position: absolute;
        height: 100rem;
        width: 10%;
        background-color: #29292947;
        top: 93rem;
        left: 20.8rem;
        /* z-index: 2; */
       }
      &:hover::after {
        height: 21rem;
        transition: linear ease 0.3s;
        width: 31.5rem;
      } 
`

export default Product;
