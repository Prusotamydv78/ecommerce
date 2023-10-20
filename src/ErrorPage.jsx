import React from "react";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
 import {Button} from '../src/styles/Button'
const Wrapper = styled.section`
.container{
  padding: 9rem 0;
  text-align: center;
  h1{
    font-size: 10rem;
  }
  h3{
    font-size: 4rem;
  }
  p{
    margin: 2rem 0;
  }
}
`
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>We Think! You Are Lost</h3>
          <p>
            The page you are looking for does not avilable. Click the button
            below to go back to home , Thanks you!
          </p>
          <Button className="btn">
            <NavLink to="/">Go Back</NavLink>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
