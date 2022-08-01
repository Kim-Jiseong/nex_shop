import React, { useEffect, useRef, useState, Suspense } from "react";

import * as S from "./style";
import { useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate  } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";


  // const settings = {
  //   // 아래 dots 줄 것인가
  //   dots: true,
  //   // 좌우 화살표 줄 것인가
  //   arrows: false,
  //   // 마지막 슬라이드에서 처음 슬라이스로
  //   infinite: true,
  //   speed: 2000,
  //   // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
  //   slidesToShow: 1,
  //   // 스크롤 할 때마다 몇 장씩 넘길 것인가
  //   slidesToScroll: 1,
  //   // 자동 넘김을 할 것인가. 한다면 스피드는?
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
  //   pauseOnHover: true,
  //   // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
  //   fade: true,
  //   // 레이지 로딩할 거야?
  //   // lazyLoad: true,
  //   // dots를 감싸고 있는 
  //   appendDots: (dots) => (
  //     <div
  //       style={{
  //         padding: "50px",
  //       }}
  //     >
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </div>
  //   ),
  // };
export function HomePresentor({imgs, texts, branchName}) {
    return (
      <>
      </>
    );

}

export default HomePresentor;