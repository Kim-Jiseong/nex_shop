import React, { useEffect, useRef, useState, Suspense } from "react";

import * as S from "./style";
import { useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "../../components/Slick/slick.css";
import "../../components/Slick/slick-theme.css";
import { useNavigate  } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import Body2 from "./components/Body2/index";
// const signature =[{"photo": main0, "title": "봉골레 파스타", "content": "조개 국물로 만든 소스의 오일 파스타", "price":"24000" },{"photo": main0, "title": "페퍼스테이크", "content": "머쉬룸 소스를 곁들인 소고기 안심(후추의 풍미가 일품)\n쉐프 추천으로 가장 맛있게 드실 수 있는 굽기인\n'미디움'으로 준비해드립니다", "price":"52000" },{"photo": main0, "title": "페퍼스테이크", "content": "머쉬룸 소스를 곁들인 소고기 안심(후추의 풍미가 일품)\n쉐프 추천으로 가장 맛있게 드실 수 있는 굽기인\n'미디움'으로 준비해드립니다", "price":"52000" },{"photo": main0, "title": "페퍼스테이크", "content": "머쉬룸 소스를 곁들인 소고기 안심(후추의 풍미가 일품)\n쉐프 추천으로 가장 맛있게 드실 수 있는 굽기인\n'미디움'으로 준비해드립니다", "price":"52000" }]

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
    fade: true,
    // 레이지 로딩할 거야?
    // lazyLoad: true,
    // dots를 감싸고 있는 
    appendDots: (dots) => (
      <div
        style={{
          padding: "50px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
export function HomePresentor({imgs, texts, branchName}) {
  
  const items = [
    { id: 0, title:texts['main0_title'], subTitle: texts['main0_subTitle'], url: imgs["main0"] },
    { id: 1, title:texts['main1_title'], subTitle: texts['main1_subTitle'], url: imgs["main1"] },
    { id: 2, title:texts['main2_title'], subTitle: texts['main2_subTitle'], url: imgs["main2"] },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  // console.log(scrollPosition)
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
  
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  useEffect(() => {
    AOS.init({
        duration : 900
    });
  }
  );
  const isDesktop = useMediaQuery({
    query: `(min-width: 1024px)`,
  });
    return (
        <S.Container>
        <S.SlideContainer>
            <Slider {...settings}>
          {/* {items.map(item => {
            return (
              <div key={item.id}>
                <S.ImageContainer>
                    <S.TextWrapper>
                        <S.Title>{item.title}</S.Title>
                        <S.SubTitle>{item.subTitle}</S.SubTitle>
                    </S.TextWrapper>
                    <S.BlackBG></S.BlackBG> 
                    <S.Image src={item.url}></S.Image>
                </S.ImageContainer>
             </div>
            );
          })} */}
          <div>
              <S.ImageContainer>
                  <S.TextWrapper>
                      <S.Title>{texts['main0_title']}</S.Title>
                      <S.SubTitle>{texts['main0_subTitle']}</S.SubTitle>
                  </S.TextWrapper>
                  <S.BlackBG></S.BlackBG> 
                  <S.Image  className="main0" src={imgs["main0"] }></S.Image>
              </S.ImageContainer>
            </div>
            <div>
            <S.ImageContainer>
                  <S.TextWrapper>
                      <S.Title>{texts['main1_title']}</S.Title>
                      <S.SubTitle>{texts['main1_subTitle']}</S.SubTitle>
                  </S.TextWrapper>
                  <S.BlackBG></S.BlackBG> 
                  <S.Image  className="main1" src={imgs["main1"]}></S.Image>
              </S.ImageContainer>
            </div>
            <div>
              <S.ImageContainer>
                  <S.TextWrapper>
                      <S.Title>{texts['main2_title']}</S.Title>
                      <S.SubTitle>{texts['main2_subTitle']}</S.SubTitle>
                  </S.TextWrapper>
                  <S.BlackBG></S.BlackBG> 
                  <S.Image className="main2" src={imgs["main2"]}></S.Image>
              </S.ImageContainer>
            </div>
            </Slider>
      </S.SlideContainer>
      <S.Body1>
          <S.Xline data-aos="fade-left"  ></S.Xline>
          <S.Body1Text  data-aos="fade-up" >
            <div>
              {texts["body1_0"]}
            </div>
            <div>
            {texts["body1_1"]}
            </div>
          </S.Body1Text>
          <S.Xline data-aos="fade-right"></S.Xline>
      </S.Body1>
      <Body2 pic0={imgs["body2_0"]} pic1={imgs["body2_1"]} title={texts["body2_0"]} content1={texts["body2_1"]} content2={texts["body2_2"]}></Body2>
      <S.Yline></S.Yline>
      <S.Body3 isDesktop={isDesktop} >
          <S.Body3Wrapper>
            <S.Body3ImgWrapper data-aos="fade-down-right" >
              <img src={imgs["body3_0"]}/>
            </S.Body3ImgWrapper>
            <S.Body3ImgWrapper data-aos="fade-down-left">
            <img src={imgs["body3_1"]}/>
            </S.Body3ImgWrapper>
          </S.Body3Wrapper>
          <S.Body3Wrapper>
            <S.Body3ImgWrapper data-aos="fade-up-right"> 
            <img src={imgs["body3_2"]}/>
            </S.Body3ImgWrapper>
            <S.Body3ImgWrapper data-aos="fade-up-left">
            <img src={imgs["body3_3"]}/>
            </S.Body3ImgWrapper>
          </S.Body3Wrapper>
          <S.Body3TextWrapper isDesktop={isDesktop}>
            <div>
              {texts["body3_0"]}
            </div>
            <div>
            {texts["body3_1"]}
            </div>
          </S.Body3TextWrapper>
      </S.Body3>
      <S.Body1 style={{margin:"30rem 0 8rem 0"}}> 
          <S.Xline data-aos="fade-left"  ></S.Xline>
          <S.Body1Text style={{margin:"0"}}  data-aos="fade-up" >
            <div>
              PEOPLE
            </div>
          </S.Body1Text>
          <S.Xline data-aos="fade-right"></S.Xline>
      </S.Body1>
      <S.MenuContainer isDesktop={isDesktop}>
        <S.ImgContainer isDesktop={isDesktop} data-aos-delay="200" data-aos="fade-up">
            <S.ImgWrapper >
                <img src={imgs["home_menu0"]}/>
                <S.Cover>
                    <S.Text style={{fontSize:"2.4rem"}}>
                    {texts["home_menu0_title"]} 
                    </S.Text>
                    <S.Text>
                    {texts["home_menu0_content"]} 
                    </S.Text>
                    {/* <S.MenuYline></S.MenuYline> */}
                    {/* <S.Text style={{margin:"0", marginTop:"4rem"}}>
                    {texts["home_menu0_price"]}₩ 
                    </S.Text> */}
                </S.Cover>
            </S.ImgWrapper>
        </S.ImgContainer >
        <S.ImgContainer isDesktop={isDesktop}  data-aos="fade-up">
            <S.ImgWrapper>
                <img src={imgs["home_menu1"]}/>
                <S.Cover>
                    <S.Text style={{fontSize:"2.4rem"}}>
                    {texts["home_menu1_title"]} 
                    </S.Text>
                    <S.Text>
                    {texts["home_menu1_content"]} 
                    </S.Text>
                    {/* <S.MenuYline></S.MenuYline>
                    <S.Text style={{margin:"0", marginTop:"4rem"}}>
                    {texts["home_menu1_price"]}₩ 
                    </S.Text> */}
                </S.Cover>
            </S.ImgWrapper>
        </S.ImgContainer>
        <S.ImgContainer  isDesktop={isDesktop} data-aos-delay="400" data-aos="fade-up">
            <S.ImgWrapper>
                <img src={imgs["home_menu2"]}/>
                <S.Cover>
                    <S.Text style={{fontSize:"2.4rem"}}>
                    {texts["home_menu2_title"]} 
                    </S.Text>
                    <S.Text>
                    {texts["home_menu2_content"]} 
                    </S.Text>
                    {/* <S.MenuYline></S.MenuYline> */}
                    {/* <S.Text style={{margin:"0", marginTop:"2rem"}}>
                    {texts["home_menu2_price"]}₩ 
                    </S.Text> */}
                </S.Cover>
            </S.ImgWrapper>
        </S.ImgContainer>
      </S.MenuContainer>
      <a target="_blank" href="https://instagram.com/corbany_official?igshid=YmMyMTA2M2Y="><S.More>+ more</S.More></a>
              <S.HeaderSpacer></S.HeaderSpacer>
              <S.HeaderSpacer></S.HeaderSpacer>

        </S.Container>
    );

}

export default HomePresentor;