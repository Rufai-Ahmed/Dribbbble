import styled from "styled-components";
import { FaAngleDown, FaBookmark, FaEye, FaHeart } from "react-icons/fa";
import { TbEyeFilled } from "react-icons/tb";
import { BiBookmark, BiFilter, BiHeart } from "react-icons/bi";
import pic1 from "../Assets/IMG-20230704-WA0023.jpg";
import pix3 from "../Assets/1105251.jpg";
import pix4 from "../Assets/1431559.jpg";
import pix5 from "../Assets/1800879.jpg";
import pix6 from "../Assets/1965685.jpg";
import pix7 from "../Assets/2292787.jpg";
import pix8 from "../Assets/IMG-20230704-WA0025.jpg";
import pix9 from "../Assets/775118.jpg";
import pix10 from "../Assets/IMG-20230704-WA0028.jpg";
import pic2 from "../Assets/1105232.jpg";
import popup from "../Assets/p.png";
import small from "../Assets/IMG-20230704-WA0029.jpg";
import bubble from "../Assets/bubble.png";
import { useState, useEffect } from "react";
import tem1 from "../Assets/inn.png";
import tem2 from "../Assets/imn.png";
import tem3 from "../Assets/imnn.png";

const Components = () => {
  const [hover, setHover] = useState(false);

  const Show = () => {
    setHover(true);
  };
  const Leave = () => {
    setHover(false);
  };

  const [hover1, setHover1] = useState(false);
  const Show1 = () => {
    setHover1(true);
  };
  const Leave1 = () => {
    setHover1(false);
  };

  const [hover2, setHover2] = useState(false);
  const Show2 = () => {
    setHover2(true);
  };
  const Leave2 = () => {
    setHover2(false);
  };

  const [hover3, setHover3] = useState(false);
  const Show3 = () => {
    setHover3(true);
  };
  const Leave3 = () => {
    setHover3(false);
  };

  let all = [pic1, pic2, pix3, pix4, pix5, pix6, pix7, pix8, pix9, pix10];
  let rand = Math.floor(Math.random() * all.length);
  let rand1 = Math.floor(Math.random() * all.length);
  let rand2 = Math.floor(Math.random() * all.length);
  let rand3 = Math.floor(Math.random() * all.length);

  return (
    <div>
      <Container>
        <PandF>
          <Popular>
            Popular
            <FaAngleDown style={{ marginTop: "4px", marginLeft: "6px" }} />
          </Popular>
          <Filter>
            <BiFilter style={{ marginTop: "2px", marginRight: "6px" }} />
            Filter
          </Filter>
        </PandF>
        <BoxHolder>
          <Box>
            <Cover bg={all[rand]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover ? (
                  <Containee onMouseEnter={Show} onMouseLeave={Leave}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show} onMouseLeave={Leave} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
          <Box>
            <Cover bg={all[rand1]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover1 ? (
                  <Containee onMouseEnter={Show1} onMouseLeave={Leave1}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show1} onMouseLeave={Leave1} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
          <Box>
            <Cover bg={all[rand2]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover2 ? (
                  <Containee onMouseEnter={Show2} onMouseLeave={Leave2}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show2} onMouseLeave={Leave2} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
          <Box>
            <Cover bg={all[rand3]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover3 ? (
                  <Containee onMouseEnter={Show3} onMouseLeave={Leave3}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show3} onMouseLeave={Leave3} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
        </BoxHolder>
        <BoxHolder>
          <Box>
            <Cover bg={all[rand]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover ? (
                  <Containee onMouseEnter={Show} onMouseLeave={Leave}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show} onMouseLeave={Leave} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
          <Box>
            <Cover bg={all[rand1]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover1 ? (
                  <Containee onMouseEnter={Show1} onMouseLeave={Leave1}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show1} onMouseLeave={Leave1} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
          <Box>
            <Cover bg={all[rand2]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover2 ? (
                  <Containee onMouseEnter={Show2} onMouseLeave={Leave2}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show2} onMouseLeave={Leave2} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
          <Box>
            <Cover bg={all[rand3]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover3 ? (
                  <Containee onMouseEnter={Show3} onMouseLeave={Leave3}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show3} onMouseLeave={Leave3} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
        </BoxHolder>
        <BoxHolder>
          <Box>
            <Cover bg={all[rand]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover ? (
                  <Containee onMouseEnter={Show} onMouseLeave={Leave}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show} onMouseLeave={Leave} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
          <Box>
            <Cover bg={all[rand1]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover1 ? (
                  <Containee onMouseEnter={Show1} onMouseLeave={Leave1}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show1} onMouseLeave={Leave1} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
          <Box>
            <Cover bg={all[rand2]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover2 ? (
                  <Containee onMouseEnter={Show2} onMouseLeave={Leave2}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show2} onMouseLeave={Leave2} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
          <Box>
            <Cover bg={all[rand3]}>
              <Image>
                Mystical Pizzeria
                <Icon>
                  <BiBookmark />
                </Icon>
                <Icon>
                  <BiHeart />
                </Icon>
              </Image>
            </Cover>
            <IconHolder>
              <Left>
                {hover3 ? (
                  <Containee onMouseEnter={Show3} onMouseLeave={Leave3}>
                    <Bar>
                      <Holder>
                        <div style={{ display: "flex" }}>
                          <Dp src={small} />
                          <Info>
                            <Name>Jay Master</Name>
                            <City>Ajegunle, FA</City>
                          </Info>
                        </div>
                        <FollowBtn>Follow</FollowBtn>
                      </Holder>
                      <GridHold>
                        <Pic src={tem1} />
                        <Pic src={tem2} />
                        <Pic src={tem3} />
                      </GridHold>
                    </Bar>
                  </Containee>
                ) : null}
                <Hold>
                  <Form onMouseEnter={Show3} onMouseLeave={Leave3} />
                  <SmallImg src={small} /> Jay Master
                </Hold>
              </Left>
              <Right>
                <FaHeart
                  style={{
                    marginRight: "3px",
                    marginTop: "4px",
                    fontSize: "20px",
                  }}
                />
                130
                <TbEyeFilled
                  style={{
                    marginLeft: "7px",
                    marginTop: "4px",
                    marginRight: "3px",
                    fontSize: "20px",
                  }}
                />
                15.6k
              </Right>
            </IconHolder>
          </Box>
        </BoxHolder>
      </Container>
    </div>
  );
};

export default Components;

const Pic = styled.img`
  width: 120px;
  border-radius: 7px;
`;

const GridHold = styled.div`
  display: grid;
  align-items: center;
  gap: 0;
  margin-top: 30px;
  margin-left: 20px;
  grid-template-columns: auto auto auto;
`;

const Containee = styled.div`
  z-index: 1;
  display: flex;
`;

const FollowBtn = styled.div`
  padding: 15px 30px;
  border: 1px solid black;
  font-weight: 500;
  border-radius: 40px;
  color: black;
  margin-right: 30px;

  transition: all 350ms;
  &:hover {
    color: grey;
  }
`;

const City = styled.div`
  color: grey;
`;

const Name = styled.div`
  font-weight: 400;
  margin: 7px 0px;
  color: black;
  font-size: 18px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Dp = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 20px;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40%;
  justify-content: space-between;
`;

const Hold = styled.div`
  /* background-color: blue; */
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1;
`;

const Bar = styled.div`
  width: 450px;
  height: 230px;
  background-color: white;
  box-shadow: 3px 3px 10px silver;
  z-index: 3;
  /* position: relative; */
  transition: all 350ms;
  margin-bottom: 300px;
  margin-left: 7px;
  border-radius: 6px;
`;
const Form = styled.div`
  width: 40px;
  height: 40px;
  /* background-color: #c91111; */
  position: absolute;
  bottom: 0;
  opacity: 1;
  cursor: pointer;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0px 0 0 5px;
  background-color: white;
  color: navy;
  font-weight: 900;
  font-size: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cover = styled.div<{ bg?: string }>`
  width: 270px;
  background-color: yellow;
  height: auto;
  border-radius: 20px 20px 0px 0px;
  background-image: url(${({ bg }) => bg});
`;

const SmallImg = styled.img`
  border-radius: 360px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  transition: all 350ms;
  &:hover ${Bar} {
    opacity: 0;
  }
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  color: grey;
  margin-right: 10px;
  font-weight: 900px;
`;
const Left = styled.div`
  color: grey;
  width: 60%;
  font-weight: 900px;
  display: flex;
  align-items: center;
`;

const IconHolder = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.div`
  height: 220px;
  width: 100%;
  font-size: 20px;
  display: flex;
  color: white;
  font-weight: 600;
  align-items: end;
  justify-content: center;
  cursor: pointer;
  padding: 0px 0px 40px 0px;
  transition: all 500ms ease-in-out;
  content-visibility: hidden;
  &:hover {
    content-visibility: visible;
    background: linear-gradient(to top, #00000078, #ffffff55, #ffffff6c);
    color: white;
  }
`;

const Box = styled.div`
  margin: 50px 60px 40px 50px;
  width: 270px;
  height: 100%;
  border-radius: 20px;
  display: flex;
  transition: all 500ms ease-in-out;
  flex-direction: column;
  // background-color: aliceblue;
`;

const BoxHolder = styled.div`
  height: 320px;
  margin-bottom: 40px;
  display: flex;
  /* justify-content: space-around; */
  width: 100%;
`;

const Filter = styled.div`
  padding: 22px 20px;
  margin: 20px 50px;
  border: 2px solid silver;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
`;

const Popular = styled.div`
  border-radius: 10px;
  align-items: center;
  border: 2px solid silver;
  display: flex;
  justify-content: center;
  padding: 22px 22px;
  margin: 20px 50px;
  cursor: pointer;
`;

const PandF = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* padding: 30px 40px; */
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;
