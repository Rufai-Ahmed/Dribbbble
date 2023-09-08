import styled from "styled-components";
import logo from "../Assets/Logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return <div>
    <Container>
      <First>
      <LogoHolder>
          <Logo src={logo} />
        </LogoHolder>
        <NavHolder>
          <Nav>For designers</Nav>
          <Nav>Hire talents</Nav>
          <Nav>Inspiration</Nav>
          <Nav>Advertising</Nav>
          <Nav>Blog</Nav>
          <Nav>About</Nav>
          <Nav>Careers</Nav>
          <Nav>Support</Nav>
        </NavHolder>
        <IconHolder>
          <Icon><FaTwitter/></Icon>
          <Icon><FaFacebook/></Icon>
          <Icon><FaInstagram/></Icon>
          <Icon><FaPinterest/></Icon>
        </IconHolder>
      </First>
      <Second>
        <Left>
          <Foot>© 2023 Dribbble.</Foot>
          <Foot>Terms</Foot>
          <Foot>Privacy</Foot>
          <Foot>Cookies</Foot>
        </Left>
        <Right>
          <Foot>Jobs</Foot>
          <Foot>Designers</Foot>
          <Foot>Freelancers</Foot>
          <Foot>Tags</Foot>
          <Foot>Places</Foot>
          <Foot>Resources</Foot>
        </Right>
      </Second>
    </Container>
  </div>;
};
export default Footer;
const Foot = styled.div`
  padding: 15px;
  cursor: pointer;
`

const Right = styled.div`
  color: grey;
  font-weight: 400;
  font-size: 15px;
  position: absolute;
  right: 60px;
  display: flex;
  `
const Left = styled.div`
  color: grey;
  font-weight: 200;
  font-size: 15px;
  position: absolute;
  left: 60px;
  display: flex;
  `

const Second = styled.div`
display: flex;
height: 10vh;
align-items: start;
`

const Icon = styled.div`
  color: #0d0c22ff;
  padding: 30px 0px 0px 20px;
  font-size: 20px;
  cursor: pointer;
  `

const IconHolder = styled.div`
margin-left: 55px;
  display: flex;
`

const Nav = styled.div`
  font-weight: 600;
  font-size: 14px;
  padding: 0px 20px;
  cursor: pointer;
`;

const NavHolder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
`;

const Logo = styled.img`
  width: 100px;
  padding: 7px 9px 0px 60px;
`;

const LogoHolder = styled.div``;

const First = styled.div`
display: flex;
margin: 50px 0px;
`

const Container = styled.div`
height: 30vh;
width: 100%;

`