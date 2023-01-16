import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import IPhoneList from "./Pages/iPhoneList";
import IPadList from "./Pages/iPadList";
import MacBookList from "./Pages/MacBookList";
import AccList from "./Pages/AccList";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import FindPassword from "./Pages/FindPassword";

// Component
import MainHeader from "./Component/Home/MainHeader";
import MainFooter from "./Component/Home/MainFooter";
import InfoiPhone from "./Component/iPhone/InfoiPhone";
import InfoiPad from "./Component/iPad/InfoiPad";
import InfoMacBook from "./Component/MacBook/InfoMacBook";
import InfoAcc from "./Component/Acc/InfoAcc";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<IPhoneList />} />
        <Route path="/iphone/:id" element={<InfoiPhone />} />
        <Route path="/ipad" element={<IPadList />} />
        <Route path="/ipad/:id" element={<InfoiPad />} />
        <Route path="/macbook" element={<MacBookList />} />
        <Route path="/macbook/:id" element={<InfoMacBook />} />
        <Route path="/acc" element={<AccList />} />
        <Route path="/acc/:id" element={<InfoAcc />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findpassword" element={<FindPassword />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
