import React from 'react';
import { HomePresentor } from './pHome.jsx';
import { useTextImgFetch } from '../../hooks/useTextImgFetch';
import { pageName } from '../../constants/pageName';
import { lang } from "../../utils/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function Home() {
  const [nowLang, setNowLang] = useRecoilState(lang);

  const branchName = '선릉';
  const curLang = nowLang;
  const [texts, imgs] = useTextImgFetch(branchName, pageName.home, curLang);

  return (
    <>
      <HomePresentor
        imgs={imgs}
        texts={texts}
        branchName={branchName}
      />
    </>
  );
}
