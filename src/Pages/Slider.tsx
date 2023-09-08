import styled from "styled-components";
import pic1 from "../Assets/IMG-20230704-WA0023.jpg";
import pix3 from "../Assets/1105251.jpg"
import pix4 from "../Assets/1431559.jpg"
import pix5 from "../Assets/1800879.jpg"
import pix6 from "../Assets/1965685.jpg"
import pix7 from "../Assets/2292787.jpg"
import pix8 from "../Assets/IMG-20230704-WA0025.jpg"
import pix9 from "../Assets/775118.jpg"
import pix10 from "../Assets/IMG-20230704-WA0028.jpg"
import pic2 from "../Assets/1105232.jpg"
import Marquee from "react-fast-marquee";

const Slider = () =>{
    return <div>
        <Container>
            <Hold>
            <Signup>Sign up to continue</Signup>
            <Signin>or sign in</Signin>
            </Hold>
            <MainSlider>
                <ImageHolder>
                    <Image src={pic1} />Animation
                </ImageHolder>
                <ImageHolder>
                    <Image src={pic2} />Branding
                </ImageHolder>
                <ImageHolder>
                    <Image src={pix3} />Illustration
                </ImageHolder>
                <ImageHolder>
                    <Image src={pix4} />Mobile
                </ImageHolder>
                <ImageHolder>
                    <Image src={pix5} />Print
                </ImageHolder>
                <ImageHolder>
                    <Image src={pix6} />Typography
                </ImageHolder>
                <ImageHolder>
                    <Image src={pix7} />Product Design
                </ImageHolder>

            </MainSlider>
        </Container>
    </div>
}

export default Slider;
const Image = styled.img`
width: 200px;
border-radius: 20px;
height: 200px;
    
`

const Hold = styled.div`
    display: flex;
    align-items: center;
`

const ImageHolder = styled.div`
    width: 200px;
    border-radius: 20px;
    height: 220px;
    /* background-color: blue; */
    margin: 50px;
`

const MainSlider = styled.div`
height: 50vh;
width: 100%;
/* position: absolute; */
display: flex;
animation: slide 30s linear infinite ;
    scroll-behavior: smooth;
@keyframes slide 
    {
        0%{
        transform: translateX(0)
        }50%{
            transform: translateX(-1700px);
        }100%{
            transform: translateX(0);
        }
    }
`

const Signin = styled.div`
    font-size: 15px;
    font-weight: 400;
    margin: 50px;
`

const Signup = styled.div`
border-radius: 50px;
  padding: 13px 26px;
  color: white;
  background-color: #000000;
  font-weight: 500;
  margin: 50px;
  font-size: 14px;`

const Container = styled.div`
height: 75vh;
margin: 35px 0px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;`