import React from 'react';
// import { HomePresentor } from './pHome.jsx';
import Header from '../../components/Header/index'
import * as S from "./style";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function Home() {

  return (
    <S.Container>
      <Header/>
      test
    </S.Container>
  );
}
