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
