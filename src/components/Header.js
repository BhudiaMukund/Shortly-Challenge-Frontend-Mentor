import React, { useState } from "react";
import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <Container>
      <LogoImg src="/images/logo.svg" />
      <DesktopWrapper>
        <LinksContainer>
          <span>Features</span>
          <span>Pricing</span>
          <span>Resources</span>
        </LinksContainer>
        <ButtonContainer>
          <LoginBtn>Login</LoginBtn>
          <SignUpBtn>Sign Up</SignUpBtn>
        </ButtonContainer>
      </DesktopWrapper>
      <MobileWrapper>
        <IoMdMenu
          style={{
            color: "9e9aa7",
            fontSize: "36px",
            position: "relative",
            zIndex: "15",
          }}
          onClick={() => handleMenu()}
        />
        <MobileMenuContainer visible={mobileMenu} onClick={() => handleMenu()}>
          <MobileMenu>
            <span>Features</span>
            <span>Pricing</span>
            <span>Resources</span>
            <hr />
            <MobileLoginBtn>Login</MobileLoginBtn>
            <MobileSignUpBtn>Sign Up</MobileSignUpBtn>
          </MobileMenu>
        </MobileMenuContainer>
      </MobileWrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 132px;
  max-width: 100%;

  @media only screen and (max-width: 960px) {
    justify-content: space-between;
    padding: 26px 20px 0 20px;
  }
`;

const LogoImg = styled.img``;

const DesktopWrapper = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const LinksContainer = styled.div`
  font-size: 17px;
  font-weight: 700;
  flex: 1;
  margin-left: 32px;

  span {
    color: #9e9aa7;
    padding: 0 15px;

    &:hover {
      color: #232127;
      cursor: pointer;
    }
  }
`;

const MobileWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 960px) {
    display: block;
  }
`;

const ButtonContainer = styled.div`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const LoginBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 15px;
  font-weight: 700;
  color: #9e9aa7;
  margin-right: 50px;
  cursor: pointer;
`;
const SignUpBtn = styled.button`
  outline: none;
  border: none;
  background-color: #2acfcf;
  font-size: 15px;
  font-weight: 700;
  color: white;
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 20px;
`;

const MobileMenuContainer = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 250ms;
  z-index: 0;
`;

const MobileMenu = styled.nav`
  display: ${(props) => (props.visible ? "block" : "none")};
  background-color: #3b3054;
  border-radius: 10px;
  opacity: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 85px;
  width: 90%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 28px;
  color: white;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: 1.2px;
  font-size: 20px;

  span {
    margin: 10px;
  }

  hr {
    width: 100%;
    margin-top: 8px;
    height: 0.2px;
    border: 0.2px solid #9e9aa7;
  }
`;

const MobileLoginBtn = styled(LoginBtn)`
  font-size: inherit;
  margin-top: 20px;
  text-align: center;
  margin-right: 0px;
  color: inherit;
`;
const MobileSignUpBtn = styled(SignUpBtn)`
  font-size: inherit;
  margin-top: 20px;
  padding: 8px 0;
  width: 90%;
`;
