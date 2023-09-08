import styled from "styled-components";
import { useState } from "react";
import backvid from "../Assets/Vid.mp4";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div>
      <Wrapper>
        <Background src={backvid} autoPlay loop />
        <Container>
          <ButtonHolder>
            <Button>Discover</Button>
            <Button>Animation</Button>
            <Button>Branding</Button>
            <Button>Illustration</Button>
            <Button>Mobile</Button>
            <Button>Print</Button>
            <Button>Product Design</Button>
            <Button>Typography</Button>
            <Button>Web Design</Button>
          </ButtonHolder>
          <TextHolder>
            <LargeText>
              Explore the world’s leading <br /> design portfolios
            </LargeText>
            <LittleText>
              Millions of designers and agencies around the world showcase their
              portfolio work
              <br /> on Dribbble - the home to the world’s best design and
              creative professionals.
            </LittleText>
          </TextHolder>
          <SearchHolder>
            <Search>
              <SearchIcon>
                <BiSearch />
              </SearchIcon>
              <Input placeholder="Search..." />
            </Search>
          </SearchHolder>
          <TrendSearch>
            Trending searches
            <Trends>landing page</Trends>
            <Trends>ios</Trends>
            <Trends>food</Trends>
            <Trends>landingpage</Trends>
            <Trends>uxdesign</Trends>
            <Trends>appdesign</Trends>
          </TrendSearch>
        </Container>
        <Background />
      </Wrapper>
    </div>
  );
};
export default Hero;

const Trends = styled.div`
  padding: 5px 20px;
  border: 2px solid white;
  border-radius: 40px;
  margin: 0px 7px;
  color: white;
`;

const TrendSearch = styled.div`
  color: white;
  height: 15vh;
  display: flex;
  font-size: 15px;
  font-weight: 400;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 500px;
  height: 60px;
  font-size: 15px;
  color: grey;
  border: none;
  outline: none;
`;

const SearchIcon = styled.div`
  height: 50px;
  width: 30px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  color: grey;
`;

const Search = styled.div`
  width: 600px;
  height: 70px;
  background-color: #ffffff;
  margin-top: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchHolder = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const LittleText = styled.div`
  height: 15vh;
  font-weight: 400;
  font-size: 17px;
  color: #ffffff;
  text-align: center;
`;
const LargeText = styled.div`
  height: 15vh;
  font-weight: 700;
  line-height: 40px;
  font-size: 35px;
  display: flex;
  align-items: end;
  padding: 40px 0px 15px 0px;
  justify-content: center;
  width: 100%;
  color: #ffffff;
  text-align: center;
`;

const TextHolder = styled.div`
  height: 30vh;
`;

const Button = styled.button`
  padding: 18px 22px;
  font-weight: 400;
  color: white;
  background-color: #00000054;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  margin: 0px 7px;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;

const ButtonHolder = styled.div`
  height: 15vh;
  display: flex;
  align-items: end;
  justify-content: center;
`;

const Container = styled.div`
  height: 88.2vh;
  width: 100%;
  position: absolute;
  top: 86px;
  background-color: #ff771646;
`;

const Background = styled.video`
  width: auto;
  height: auto;
  display: flex;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 88.2vh;
`;
