import styled, { css, keyframes } from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  /* max-width: 2000px; */
  /* min-height: 100vh; */
`;
export const HeaderSpacer = styled.div`
  width: 100%;
  height: 8.8rem;
`;
// export const Banner = styled.div`
//     width: 100%;
//     height: 80vh;
// `

export const SlideContainer = styled.div`
  overflow: hidden;
  /* margin-bottom: 20rem; */
  /* width: 100vw; */
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

export const ImageContainer = styled.div`
  /* width: 100vw; */
  height: 100vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  /* overflow: hidden; */
  background: rgba(18, 18, 29, 0.6);
  /* background-size: cover; */
  /* margin: 0 16px; */
`;
export const TextWrapper = styled.div`
  position: absolute;
  width: 100vw;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  color: #f2f2f2;
  font-weight: 300;
  font-size: 9.6rem;
  text-align: center;
`;
export const SubTitle = styled(Title)`
  font-weight: 300;
  font-size: 2.2rem;
  margin-top: 3.6rem;
`;
export const BlackBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: rgba(18, 18, 29, 0.3);
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* max-height:100%; */
`;
export const Body1 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Xline = styled.div`
  width: 50%;
  height: 1px;
  background: #252525;
`;
export const Yline = styled.div`
  width: 1px;
  height: 30vh;
  background: #252525;
  margin: 0 auto;
  margin-bottom: 14rem;
`;
export const Body1Text = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  text-align: center;
  width: 100%;
  margin: 20rem 3.3rem 20rem 3.3rem;
  & div {
    width: 100%;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 162%;
  }
  & div:first-child {
    font-size: 4.4rem;
    font-weight: 100;
  }
`;

export const Body3 = styled.div`
  width: 80%;
  height: 140rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  ${(props) =>
    (props.isDesktop == false) &&
    css`
        height: 70vh;
  `}
`;
export const Body3Wrapper = styled.div`
  width: 100%;
  height: 49%;
  display: flex;
  justify-content: space-between;
`;
export const Body3ImgWrapper = styled.div`
  width: 49%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Body3TextWrapper = styled.div`
  transform: translate(-50%, -50%);
  width: 60%;
  height: 40%;
  position: absolute;
  background: #fff;
  left: 50%;
  top: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    text-align: center;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 162%;
    letter-spacing: 0.05em;

    color: #252525;
  }
  & div:first-child {
    margin-bottom: 4rem;
    font-size: 4.4rem;
  }
  ${(props) =>
    (props.isDesktop == false) &&
    css`
        width: 80%;
        & div:first-child {
          margin-bottom: 4rem;
          font-size: 3rem;
  }
  `}
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  ${(props) =>
    (props.isDesktop == false) &&
    css`
        flex-direction: column;
        
    `}
`;

export const ImgContainer = styled.div`
  width: calc(50% - 4rem);
  /* padding-bottom: 100%; */
  background: #eee;
  /* border:1px solid #000; */
  display: inline-block;
  object-fit: cover;
  margin: 2rem;
  overflow: hidden;
  /* padding:1rem; */
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  ${(props) =>
    (props.isDesktop == false) &&
    css`
      width: calc(100% - 4rem);
        
    `}
`;
export const ImgWrapper = styled.div`
  width: 96%;
  height: 96%;
  object-fit: cover;
  /* position: absolute; */
  overflow: hidden;

  & img {
    position: absolute;
    width: 100%;
    object-fit: cover;
    height: 100%;
    overflow: hidden;
  }
  & div {
    opacity: 0;
  }
  &:hover div {
    opacity: 1;
    transition: 0.5s;
  }

`;
export const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
`;
export const MenuYline = styled.div`
  width: 1px;
  height: 10%;
  background: #252525;
  margin: 0 auto;
`;
export const Text = styled.div`
  width: 80%;
  text-align: center;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 162%;
  /* or 162% */
  color: #252525;
  margin-bottom: 3rem;
`;
export const More = styled.div`
  width: 80%;
  margin-top: 4rem;
  margin: 0 auto;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 125%;
  text-align: right;
  color: #252525;
  cursor: pointer;
`;
