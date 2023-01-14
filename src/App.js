import { Route, Routes } from "react-router-dom";

// 메인페이지
import MainHeader from "./Component/Home/MainHeader";
import Home from "./Pages/Home";
import MainFooter from "./Component/Home/MainFooter";

// 메뉴진입
import IPhoneList from "./Pages/iPhoneList";
import IPadList from "./Pages/iPadList";
import MacBookList from "./Pages/MacBookList";
import AccList from "./Pages/AccList";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import FindPassword from "./Pages/FindPassword";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<IPhoneList />} />
        <Route path="/ipad" element={<IPadList />} />
        <Route path="/macbook" element={<MacBookList />} />
        <Route path="/acc" element={<AccList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findpassword" element={<FindPassword />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
