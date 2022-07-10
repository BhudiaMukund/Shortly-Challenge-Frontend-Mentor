import React from "react";
import styled from "styled-components";

function Statistics() {
  return (
    <Container>
      <div className="heading">
        <h1>Advanced Statisitics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <CardWrapper>
        <Card>
          <ImgContainer>
            <img src="/images/icon-brand-recognition.svg" alt="" />
          </ImgContainer>
          <CardDetails>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </CardDetails>
        </Card>

        <Card style={{ marginTop: "78px" }}>
          <ImgContainer>
            <img src="/images/icon-detailed-records.svg" alt="" />
          </ImgContainer>
          <CardDetails>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </CardDetails>
        </Card>

        <Card className="lastCard">
          <ImgContainer>
            <img src="/images/icon-fully-customizable.svg" alt="" />
          </ImgContainer>
          <CardDetails>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </CardDetails>
        </Card>
      </CardWrapper>
      <Line></Line>
    </Container>
  );
}

export default Statistics;

const Container = styled.div`
  background-color: #eff1f7;
  background-position: fixed;
  width: 100%;
  margin-top: -70px;
  position: relative;
  z-index: -5;

  .heading {
    padding: 170px 20px 50px 20px;
    width: 500px;
    max-width: 100%;
    text-align: center;
    margin: auto;

    h1 {
      color: #3b3054;
    }

    p {
      color: #9e9aa7;
    }
  }
  @media only screen and (max-width: 960px) {
    font-size: 15px;
    text-align: center;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;

  .lastCard {
    margin-top: "125px";
  }

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: left;
    align-items: center;
    .lastCard {
      margin-top: 68px;
      margin-bottom: 50px;
    }
  }
`;

const Card = styled.article`
  background-color: white;
  width: 350px;
  margin: 25px;
  border-radius: 10px;
  padding: 0 28px 28px 28px;
  min-height: 238px;
  z-index: 1;
  margin-bottom: 100px;

  h3 {
    color: #3b3054;
  }

  p {
    color: #9e9aa7;
    margin-top: 15px;
  }
  @media only screen and (max-width: 960px) {
    width: 90%;
    padding: 0 12px 12px;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 0;
    h3 {
      font-size: 25px;
      margin-top: -12px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: max-content;
  background-color: #3b3054;
  padding: 16px 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -35px;
  left: 12px;

  img {
    width: 38px;
  }

  @media only screen and (max-width: 960px) {
    margin-left: auto;
    left: 0;
    margin-right: auto;
  }
`;

const CardDetails = styled.div``;

const Line = styled.div`
  margin: auto;
  position: relative;
  top: -36vh;
  z-index: 0;
  width: 75%;
  height: 8px;
  background-color: #2acfcf;

  @media only screen and (max-width: 960px) {
    display: none;
  }
`;
