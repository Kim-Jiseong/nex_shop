import React, { useEffect, useRef, useState,  Suspense } from "react";
import Header from '../../components/Header/index'
import ListItem from './components/index'
import * as S from "./style";
import axios from "axios";
import { BASE_URL } from '../../config/config';
import carosel1 from "../../assets/img/carosel1.jpg"
import carosel2 from "../../assets/img/carosel2.jpg"
import carosel3 from "../../assets/img/carosel3.jpg"
import { useRecoilState, useSetRecoilState } from "recoil";
import Slider from "react-slick";
import "../../components/Slick/slick.css";
import "../../components/Slick/slick-theme.css";
export default function Home() {
  const items =[{
    "carosel1_img": carosel1, 
    "carosel1_text": "테스트1", 
    "carosel2_img": carosel2, 
    "carosel2_text": "테스트2", 
    "carosel3_img": carosel3, 
    "carosel3_text": "테스트3", 
}]

  const [products, setProducts] = useState()
  const [carosel, setCarosel] = useState(items);
//  useEffect(()=>{
//   axios.get(`${BASE_URL}/main/products`)
//  .then(function (response) {
//    console.log(response)  
//    setProducts(response.data)
//  }).catch(function (error) {
//     console.log(error)
//    console.log(`${BASE_URL}/main/products`)
//  })},[]) 
  useEffect(()=> {
    TestApiCall()
  }, [])
 const TestApiCall = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/main/products`)
    setProducts(response.data);
    console.log("response >>", response.data)
  } catch(err) {
    console.log("Error >>", err);
  }
}
// useEffect(()=> {

// },[products])

  const settings = {
    // 아래 dots 줄 것인가
    dots: true,
    // 좌우 화살표 줄 것인가
    arrows: false,
    // 마지막 슬라이드에서 처음 슬라이스로
    infinite: true,
    speed: 2000,
    // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
    slidesToShow: 1,
    // 스크롤 할 때마다 몇 장씩 넘길 것인가
    slidesToScroll: 1,
    // 자동 넘김을 할 것인가. 한다면 스피드는?
    autoplay: true,
    autoplaySpeed: 4000,
    // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
    pauseOnHover: true,
    // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
    fade: false,
    // 레이지 로딩할 거야?
    // lazyLoad: true,
    // dots를 감싸고 있는 
    appendDots: (dots) => (
      <div
        style={{          
          padding: "40px",
        }}
      >
        <ul style={{ margin: "0px", padding:"0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <S.Container>
      <Header/>
      <S.SlideContainer>
        <Slider {...settings}>
        <div>
            <S.ImageContainer>
                  <S.TextWrapper>
                      <S.Title>{carosel[0]['carosel1_text']}</S.Title>
                  </S.TextWrapper>
                  <S.BlackBG></S.BlackBG> 
                  <S.Image src={carosel[0]['carosel1_img']}></S.Image>
              </S.ImageContainer>
            </div>
        <div>
            <S.ImageContainer>
                  <S.TextWrapper>
                      <S.Title>{carosel[0]['carosel2_text']}</S.Title>
                  </S.TextWrapper>
                  <S.BlackBG></S.BlackBG> 
                  <S.Image src={carosel[0]['carosel2_img']}></S.Image>
              </S.ImageContainer>
            </div>
        <div>
            <S.ImageContainer>
                  <S.TextWrapper>
                      <S.Title>{carosel[0]['carosel3_text']}</S.Title>
                  </S.TextWrapper>
                  <S.BlackBG></S.BlackBG> 
                  <S.Image src={carosel[0]['carosel3_img']}></S.Image>
              </S.ImageContainer>
            </div>
        </Slider>
      </S.SlideContainer>

      
        {/* {products &&   products.map(()=>(<li>test</li>))} */}
        {products && products.map((product) => (
        // <div>
        //   <li>{product.name}</li>
        //   <li>{product.price}</li>
        //   <li>{product.main_img}</li>
        //   <img src={product.main_img}></img>
        // </div>  
          <ListItem product={product}>

          </ListItem>
          )
        )}
    </S.Container>
  );
}
