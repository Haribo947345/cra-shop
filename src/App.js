import { Route, Routes } from "react-router-dom";

// 메인페이지
import MainHeader from "./Component/Home/MainHeader";
import MainHome from "./Component/Home/MainHome";
import MainFooter from "./Component/Home/MainFooter";

// 메뉴진입
import MainiPhone from "./Component/iPhone/MainiPhone";
import MainiPad from "./Component/iPad/MainiPad";
import MainMacBook from "./Component/MacBook/MainMacBook";
import MainAcc from "./Component/Acc/MainAcc";
import MainLogin from "./Component/Member/Login/MainLogin";
import MainSignUp from "./Component/Member/SignUp/MainSignUp";
import MainFindPassword from "./Component/Member/Password/MainFindPassword";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/iphone" element={<MainiPhone />} />
        <Route path="/ipad" element={<MainiPad />} />
        <Route path="/macbook" element={<MainMacBook />} />
        <Route path="/acc" element={<MainAcc />} />
        <Route path="/login" element={<MainLogin />} />
        <Route path="/signup" element={<MainSignUp />} />
        <Route path="/findpassword" element={<MainFindPassword />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
