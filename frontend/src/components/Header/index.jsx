import React, { useEffect, useRef, useState, Suspense } from "react";
import * as S from "./style";
import WhiteLOGO from "../../assets/img/Ykang_white.png";
import BlackLOGO from "../../assets/img/Ykang_black.png";
import { useNavigate } from "react-router";
import { lang } from "../../utils/atoms";
import { store } from "../../utils/atoms";
import { contact } from "../../utils/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

function Header() {
  const navigate = useNavigate();
  const [language, setLanguage] = useRecoilState(lang);
  const [nowContact, setNowContact] = useRecoilState(contact);
  const [nowStore, setNowStore] = useRecoilState(store);
  const [isHovering, setIsHovering] = useState(0);
  const [isHoveringContact, setIsHoveringContact] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // console.log(language)
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <S.MenuContainer>
      <S.Menu
        bgColor={
          isHoveringContact || isHovering || scrollPosition > 100
            ? "white"
            : "transparent"
        }
        isHovering={isHovering}
        isHoveringContact={isHoveringContact}
      >
        <S.Logo
          onClick={() => {
            navigate("/");
          }}
          src={
            isHoveringContact || isHovering || scrollPosition > 100
              ? BlackLOGO
              : WhiteLOGO
          }
        />
        <S.BtnWrapper>
          {/* <Link to="/about">
                <S.Btn>회사소개</S.Btn>
            </Link> */}
          <S.Btn
            color={
              isHoveringContact || isHovering || scrollPosition > 100
                ? "#252525"
                : "white"
            }
            onClick={() => {
              navigate("/");
            }}
          >
            About
          </S.Btn>
          <S.Btn
            color={
              isHoveringContact || isHovering || scrollPosition > 100
                ? "#252525"
                : "white"
            }
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
          >
            매장
          </S.Btn>
          <S.Btn
            color={
              isHoveringContact || isHovering || scrollPosition > 100
                ? "#252525"
                : "white"
            }
            onClick={() => {
              navigate("/menu");
            }}
          >
            메뉴
          </S.Btn>
          <S.Btn
            color={
              isHoveringContact || isHovering || scrollPosition > 100
                ? "#252525"
                : "white"
            }
            // onClick={()=>{navigate("/open", { replace: true})
            // setNowContact("창업절차")}}
            onMouseOver={() => setIsHoveringContact(1)}
            onMouseOut={() => setIsHoveringContact(0)}
          >
            창업안내
          </S.Btn>
          {/* <S.Btn color={(isHoveringContact||isHovering|| scrollPosition > 100) ? "#252525" : "white"} 
>CONTACT</S.Btn> */}
        </S.BtnWrapper>
        <S.langWrapper language={language}>
          <div className="ko" onClick={() => setLanguage("ko")}>
            KOR
          </div>
          <p>|</p>
          <div className="en" onClick={() => setLanguage("en")}>
            ENG
          </div>
        </S.langWrapper>
      </S.Menu>
      <S.Dropdown
        isHovering={isHovering}
        onMouseOver={() => setIsHovering(1)}
        onMouseOut={() => setIsHovering(0)}
      >
        <S.DropBtnWrapper>
          <S.DropBtn
            onClick={() => {
              navigate("/store/선릉", { replace: true });
              setNowStore("선릉");
            }}
          >
            선릉점
          </S.DropBtn>
          <S.DropBtn
            onClick={() => {
              navigate("/store/신사가로수길", { replace: true });
              setNowStore("신사가로수길");
            }}
          >
            신사가로수길점
          </S.DropBtn>
        </S.DropBtnWrapper>
      </S.Dropdown>
      <S.Dropdown
        isHovering={isHoveringContact}
        onMouseOver={() => setIsHoveringContact(1)}
        onMouseOut={() => setIsHoveringContact(0)}
      >
        <S.DropBtnWrapper>
          <S.DropBtn
            onClick={() => {
              navigate("/open");
              setNowContact("창업상담문의");
            }}
          >
            CORBANY 가맹점주 모집
          </S.DropBtn>
          <S.DropBtn
            onClick={() => {
              setNowStore("문의");
              navigate("/contact");
            }}
          >
            CORBANY 매장 투자
          </S.DropBtn>
        </S.DropBtnWrapper>
      </S.Dropdown>
    </S.MenuContainer>
  );
}

export default Header;
