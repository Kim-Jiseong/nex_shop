import styled,{ css, keyframes }  from "styled-components";
import { colors } from "../../styles/theme";
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Menu = styled.div`
    width: 100%;
    position: fixed;
    height: 8.8rem;
    display: flex;
    max-width: 1920px;
    align-items: center;
    /* border-bottom: 1px solid #eee; */
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    z-index: 1000;
    /* max-width: 1200px; */
    font-family: 'Cafe24Ohsquareair';
    transition: all 0.3s ease-out;
    left: 0;
    right:0;
    margin: 0 auto;
    transition: 0.3s;
    background-color: ${(props) => {
    return props.bgColor;
  }};
    &{
      /* background-color: ${(props) => props.isHovering == 1 && "white"}; */
      div{
        color: ${(props) => (props.isHovering == 1 || props.isHoveringContact ==1) && "#252525"};
      }
    }
`
export const Logo = styled.img`
    max-height:4.5rem;
    margin-right:2rem;
    cursor:pointer;
`
export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Btn = styled.div`
    width: auto;
    height: auto;
    font-size: 2.2rem;
    font-weight: 300;
    cursor: pointer;
    margin-left: 4.2rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    padding-bottom: 3px;

    color: ${(props) => {
    return props.color;
  }};
    &:hover{
        transition: 0.5s;
        border-bottom: 2px solid #f2f2f2;
        border-color: ${(props) => {
    return props.color;
  }};
    }

`
export const langWrapper = styled.div`
  display: flex;
  align-items: center;
  /* max-width: 8.2rem; */
  & > div {
    margin-left: 0.6rem;
    color: #b3b3b3;
    cursor: pointer;
  }
  p {
    margin-left: 0.6rem;
    color: #b3b3b3;
  }
  .ko {
    color: ${(props) => props.language === "ko" && colors.white};
    font-weight: ${(props) => props.language === "ko" && 700};
  }
  .en {
    color: ${(props) => props.language === "en" && colors.white};
    font-weight: ${(props) => props.language === "en" && 700};
  }
`;
export const Dropdown = styled.div`
  width: 100%;
  /* height: 27rem; */
  transition: 0.3s;
  visibility: hidden;
  background-color: white;
  position:fixed;
  max-width: 1920px;
  top:8.8rem;
  z-index: 900;
  opacity: 0;
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-top:1px solid #eee;
  border-bottom:1px solid #eee;
  &{
    opacity: ${(props) => props.isHovering == 1 && 1};
    visibility: ${(props) => props.isHovering == 1 && "visible"};
  }

`
export const DropBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DropBtn = styled(Btn)`
  color:#252525;
  margin-top: 3rem;
  width: auto;
  height: auto;
  font-size: 2.2rem;
  font-weight: 300;
  cursor: pointer;
  margin-left: 4.2rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  padding-bottom: 3px;
  &:hover{
      transition: 0.5s;
      border-bottom: 2px solid #252525;
  }
  &:last-child{
    margin-bottom: 3rem;
  }

`