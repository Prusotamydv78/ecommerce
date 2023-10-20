import React from "react";
import styled from "styled-components";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SecurityIcon from "@mui/icons-material/SecurityOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PriceCheckTwoToneIcon from '@mui/icons-material/PriceCheckTwoTone';
const Service = () => {
  const Wrapper = styled.section`
    .gird {
      gap: 4.8rem;
    }
    .services-1,
    .services-2,
    .services-3 {
      width: auto;
      height: 30rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      background-color: #f2f2f2;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
          font-size: 5rem;
          background: #cacaca;
          border-radius: 50%;
          padding: 1rem;
          color: #345f6d;
          margin: 2rem 0.5rem;
        }
      }
    }
    .services-2 {
      gap: 4rem;
      background-color: transparent;
      box-shadow: none;
      .services-column-2 {
        background-color: #f2f2f2;
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        align-content: center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
        div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
      }
    }
  `;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <LocalShippingIcon className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>
          <div className="services-2">
            <div className="services-column-2">
              <div>
                <SecurityIcon className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-column-2">
              <CurrencyExchangeIcon className="icon" />
              <h3>Money-back Guaranteed</h3>
            </div>
          </div>
          <div className="services-3">
            <div>
              <PriceCheckTwoToneIcon className="icon"/>
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Service;
