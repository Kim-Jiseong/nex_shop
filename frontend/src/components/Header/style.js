import styled,{ css, keyframes }  from "styled-components";
// import { colors } from "../../styles/theme";
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: blue;
    height: 56px;
    align-items: center;
`
export const Logo = styled.div`
    margin-right:2rem;
    cursor:pointer;
    margin-left: 10%;
    font-size: 2.4rem;
    color: ${(props) => (props.color)};
`
// export const Menu = styled.div`
//     width: 100%;
//     position: fixed;
//     height: 8.8rem;
//     display: flex;
//     max-width: 1920px;
//     align-items: center;
//     /* border-bottom: 1px solid #eee; */
//     justify-content: space-between;
//     padding-left: 10%;
//     padding-right: 10%;
//     z-index: 1000;
//     /* max-width: 1200px; */
//     font-family: 'Cafe24Ohsquareair';
//     transition: all 0.3s ease-out;
//     left: 0;
//     right:0;
//     margin: 0 auto;
//     transition: 0.3s;
//     background-color: ${(props) => {
//     return props.bgColor;
//   }};
//     &{
//       /* background-color: ${(props) => props.isHovering == 1 && "white"}; */
//       div{
//         color: ${(props) => (props.isHovering == 1 || props.isHoveringContact ==1) && "#252525"};
//       }
//     }
// `

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
`