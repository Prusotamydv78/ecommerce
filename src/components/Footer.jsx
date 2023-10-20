import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, GitHub, FiPhoneCall } from "@mui/icons-material";
import styled from "styled-components";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  const Footer = styled.section`
    margin-top: 10rem;
    footer {
      .footer-icon {
      }
    }
    .contact-short {
      display: flex;
      justify-content: center;
      .footer-icon {
      }
    }
    .footer-container {
      background: #00003f;
      padding: 12rem 15rem 6rem 15rem;
      color: white;
      max-width: 100vw;
      margin-top: -6rem;
      .p {
        color: white;
        margin-top: 3rem;
      }
      .footerSocial {
        .footer-social-icons {
          margin: 1.5rem 0;
          height: 4rem;
          width: 4rem;
          border: 3px solid lightgray;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s linear;
          &:hover {
            border-color: #2179d7;
          }
        }
      }
      .footer-icon {
        cursor: pointer;
        color: white;
        font-size: 2.5rem;
        &:hover {
          color: #299b59;
        }
      }
      .a {
        color: white;
        font-size: 1.7rem;
        display: flex;
        align-items: center;
        margin-top: 1rem;
        font-weight: bold;
        &:hover {
          color: #299b59;
        }
      }
    }
    .footer-bottom-section {
      background-color: #00003f;
      margin-top: 2px;
    }
    .bottom-footer{
        display: flex;
        align-items: center;
    justify-content: space-evenly;
    height: 13vh;
    }
    .p{
color: white;
    }
  `;
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

  return (
    <Footer>
      <div className="contact-short">
        <div className="grid grid-two-column footerclass">
          <div>
            <h3>Ready to get Started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to="/contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <footer className="container grid grid-four-column footer-container">
        <div className="footer-about">
          <h3>Prusotam Ydv</h3>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            doloribus magnam ea expedita? Autem, rerum?
          </p>
        </div>
        <div className="footer-subscirbe">
          <h3>Subscribe to connect us</h3>
          <form action="#" className="p">
            <input type="email" placeholder="Email" name="" id="" />
            <input type="submit" value="Subscribe" name="" id="" />
          </form>
        </div>
        <div className="footerSocial">
          <h3>Follow Us</h3>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/purshotam.yadav.543908"
              target="_blank"
            >
              <Facebook className="footer-icon" />
            </a>
          </div>
          <div className="footer-social-icons">
            <a href="#">
              <GitHub className="footer-icon" />
            </a>
          </div>
          <div className="footer-social-icons">
            <a href="#">
              <FaTiktok className="footer-icon" />
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Call Us Now</h3>
          <a className="a" href="tel:9801622232">
            <Facebook className="footer-icon" />
            <span>+977 9801622232</span>
          </a>
        </div>
      </footer>
      <div className="footer-bottom-section bottom-footer">
        <div className="  grid-two-column">
          <p className="p">@{new Date().getFullYear()} PrusotamYadav. All Rights Reserved </p>
        </div>
        <div>

        <p className="p">PRIVACY POLICY</p>
        <p className="p">TERMS & CONDITIONS</p>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
