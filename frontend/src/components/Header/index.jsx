import React, { useEffect, useRef, useState, Suspense } from "react";
import * as S from "./style";
import { useNavigate } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";

function Header() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <S.MenuContainer       
    color={
      scrollPosition > 100
        ? "white"
        : "transparent"
    }>
      <S.Logo 
      color={
        scrollPosition > 100
          ? "#252525"
          : "white"
      }
      >SAZA</S.Logo>

    </S.MenuContainer>
  );
}

export default Header;
