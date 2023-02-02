import { Route, Routes } from "react-router-dom";

// Pages
import ErrorPage from "./Pages/Error";
import Home from "./Pages/Home";
import IPhoneList from "./Pages/iPhoneList";
import IPadList from "./Pages/iPadList";
import MacBookList from "./Pages/MacBookList";
import AccList from "./Pages/AccList";
import ItemInfo from "./Pages/ItemInfo";
import BuyItem from "./Pages/BuyItem";
import Basket from "./Pages/Basket";
import BasketsBuyItem from "./Pages/BasketsBuyItem";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import FindPassword from "./Pages/FindPassword";

// Component
import MainHeader from "./Component/Home/MainHeader";
import MainFooter from "./Component/Home/MainFooter";

// 비로그인 처리
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.user);
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<IPhoneList />} />
        <Route path="/iphone/:id" element={<ItemInfo />} />
        <Route path="/ipad" element={<IPadList />} />
        <Route path="/ipad/:id" element={<ItemInfo />} />
        <Route path="/macbook" element={<MacBookList />} />
        <Route path="/macbook/:id" element={<ItemInfo />} />
        <Route path="/acc" element={<AccList />} />
        <Route path="/acc/:id" element={<ItemInfo />} />
        {isLoggedIn && <Route path="/buyitem/:id" element={<BuyItem />} />}
        {isLoggedIn && <Route path="/baskets" element={<Basket />} />}
        {isLoggedIn && (
          <Route path="/basketsbuyitem" element={<BasketsBuyItem />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findpassword" element={<FindPassword />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
