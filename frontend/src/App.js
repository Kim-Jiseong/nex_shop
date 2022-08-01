import React, { useEffect, Suspense } from "react";
import Router from "./Router";
import { RecoilRoot } from "recoil";
import "./App.css"
import GlobalStyle from "./GlobalStyle";
function App() {
  return (
    <GlobalStyle>
      <RecoilRoot>
        <Suspense fallback={<>로딩</>}>
          <Router />
        </Suspense>
      </RecoilRoot>
    </GlobalStyle>
  );
}

export default App;
