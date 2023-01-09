import { Route, Routes } from "react-router-dom";
import MainHeader from "./Component/Home/MainHeader";
import MainHome from "./Component/Home/MainHome";

import MainiPhone from "./Component/iPhone/MainiPhone";
import MainiPad from "./Component/iPad/MainiPad";
import MainMacBook from "./Component/MacBook/MainMacBook";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/iphone" element={<MainiPhone />} />
        <Route path="/ipad" element={<MainiPad />} />
        <Route path="/macbook" element={<MainMacBook />} />
      </Routes>
    </>
  );
}

export default App;
