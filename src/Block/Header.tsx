import styled from "styled-components";
import logo from "../Assets/Logo.png";

const Header = () => {
  return (
    <div>
      <Container>
        <LogoHolder>
          <Logo src={logo} />
        </LogoHolder>
        <NavHolder>
          <Nav>Find talents</Nav>
          <Nav>For designers</Nav>
          <Nav>Inspiration</Nav>
          <Nav>Learn design</Nav>
          <Nav>Go Pro</Nav>
        </NavHolder>
        <Register>
          <Login>Log in</Login>
          <Signup>Sign up</Signup>
        </Register>
      </Container>
    </div>
  );
};
export default Header;

const Signup = styled.div`
  border-radius: 50px;
  padding: 13px 26px;
  color: white;
  background-color: black;
  font-weight: 500;
  font-size: 14px;
`;

const Login = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding: 10px 30px;
`;

const Register = styled.div`
  position: absolute;
  right: 50px;
  top: 20px;
  display: flex;
  cursor: pointer;
`;

const Nav = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding: 0px 20px;
  cursor: pointer;
`;

const NavHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  padding: 7px 9px 0px 40px;
`;

const LogoHolder = styled.div``;

const Container = styled.div`
  width: 100%;
  max-height: 17vh;
  background-color: #ffffff;
  display: flex;
`;
