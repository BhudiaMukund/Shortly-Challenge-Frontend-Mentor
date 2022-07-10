import React from "react";
import styled from "styled-components";

function Introduction() {
  return (
    <Container>
      <TextWrapper>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          type="button"
          onClick={() => document.getElementById("inputField").focus()}
        >
          Get Started
        </button>
      </TextWrapper>
      <ImgWorking src="/images/illustration-working.svg" />
    </Container>
  );
}

export default Introduction;

const Container = styled.div`
  padding: 39px 0 0 132px;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media only screen and (max-width: 960px) {
    padding: 0 20px;
    flex-direction: column-reverse;
  }
`;

const TextWrapper = styled.div`
  h1 {
    font-size: 78px;
    color: #35323e;
    line-height: 86px;
  }

  p {
    font-size: 24px;
    max-width: 578px;
    color: #9e9aa7;
    margin-top: 10px;
  }

  button {
    outline: none;
    border: none;
    background-color: #2acfcf;
    padding: 8px 32px;
    border-radius: 22px;
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;
    color: whitesmoke;
    margin-top: 20px;
  }

  button:hover {
    background-color: #9be3e2;
  }

  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 42px;
      line-height: 50px;
      text-align: center;
    }

    p {
      font-size: 19px;
      text-align: center;
    }

    button {
      padding: 10px 0;
      width: 62%;
    }
  }
`;

const ImgWorking = styled.img`
  margin-right: -30px;
  @media only screen and (max-width: 960px) {
    width: 132vw;
    margin-right: -145px;
    margin-top: 8px;
  }
`;
