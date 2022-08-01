import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Menu from "./pages/Menu/index";
import Store from "./pages/Store/index";
import Open from "./pages/Open/index";
import StoreMain from "./pages/StoreMain/index";
import Contact from "./pages/Contact/index";
import ScrollTop from "./components/ScrollTop/index";
import AdminHeader from "./components/AdminHeader";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import AdminMenu from "./pages/Admin/Menu";
import AdminHome from "./pages/Admin/Home";
import { Login } from "./pages/Admin/Login";
import AdminOpen from "./pages/Admin/Open";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "./utils/atoms";
import AdminContact from "./pages/Admin/Contact";
import MobileHeader from "./components/MobileHeader";

function Router() {
  const [user, setUser] = useRecoilState(userState);
  const isLogin = localStorage.getItem("YkangId");
  // 반응형 헤더를 위한 데스크탑 여부 확인
  const isDesktop = useMediaQuery({
    query: `(min-width: 1024px)`,
  });

  if (!isLogin) {
    return (
      <BrowserRouter>
        {isDesktop ? <Header /> : <MobileHeader />}
        <ScrollTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/store/:storeid" element={<Store />} />
          <Route exact path="/open" element={<Open />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        {isDesktop ? <AdminHeader /> : <MobileHeader />}
        <ScrollTop />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/store/:storeid" element={<Store />} />
          <Route exact path="/open" element={<Open />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admin/menu" element={<AdminMenu />} />
          <Route exact path="/admin/home" element={<AdminHome />} />
          <Route exact path="/admin/open" element={<AdminOpen />} />
          <Route exact path="/admin/contact" element={<AdminContact />} />
          {/* <Route exact path="/admin" element={<Admin/>} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}
export default Router;
