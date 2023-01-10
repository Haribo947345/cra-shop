import { Route, Routes } from "react-router-dom";
import MainHeader from "./Component/Home/MainHeader";
import MainHome from "./Component/Home/MainHome";
import MainFooter from "./Component/Home/MainFooter";

import MainiPhone from "./Component/iPhone/MainiPhone";
import MainiPad from "./Component/iPad/MainiPad";
import MainMacBook from "./Component/MacBook/MainMacBook";
import MainAcc from "./Component/Acc/MainAcc";
import MainLogin from "./Component/Login/MainLogin";

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
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
