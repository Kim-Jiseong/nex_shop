import React, { forwardRef } from "react";
import * as S from "./style";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

const Body2 = forwardRef((props, ref) => {
    const isDesktop = useMediaQuery({
        query: `(min-width: 1024px)`,
      });
    return (
        <>
        <S.Container ref={ref}>
            {isDesktop && <>
            <S.TextContainer isDesktop={isDesktop}>
                <S.CoverImg isDesktop={isDesktop} data-aos="fade-right">
                    <img src={props.pic0}/>
                </S.CoverImg>
                <S.TextWrapper data-aos="fade-left">
                    <div>{props.title}</div>
                    <div>{props.content1}</div>
                </S.TextWrapper>
            </S.TextContainer>
            <S.TextContainer2 isDesktop={isDesktop}>

                <S.TextWrapper2 isDesktop={isDesktop} data-aos="fade-right">
                    <div>{props.content2}</div>
                </S.TextWrapper2>
                <S.CoverImg isDesktop={isDesktop} data-aos="fade-left">
                    <img src={props.pic1}/>
                </S.CoverImg>
            </S.TextContainer2></>}
            {(isDesktop == false) && <>
            <S.TextContainer isDesktop={isDesktop}>
                <S.CoverImg isDesktop={isDesktop} data-aos="fade-right">
                    <img src={props.pic0}/>
                </S.CoverImg>
                <S.TextWrapper isDesktop={isDesktop} data-aos="fade-left">
                    <div>{props.title}</div>
                    <div>{props.content1}</div>
                </S.TextWrapper>
                <S.TextWrapper2 isDesktop={isDesktop} data-aos="fade-right">
                    <div>{props.content2}</div>
                </S.TextWrapper2>
            </S.TextContainer>
            </>}
        </S.Container>
        </>
    )
})
export default Body2;