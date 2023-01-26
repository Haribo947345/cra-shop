import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import IPhoneList from "./Pages/iPhoneList";
import IPadList from "./Pages/iPadList";
import MacBookList from "./Pages/MacBookList";
import AccList from "./Pages/AccList";
import ItemInfo from "./Pages/ItemInfo";
import BuyItem from "./Pages/BuyItem";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import FindPassword from "./Pages/FindPassword";

// Component
import MainHeader from "./Component/Home/MainHeader";
import MainFooter from "./Component/Home/MainFooter";
import Basket from "./Pages/Basket";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<IPhoneList />} />
        <Route path="/iphone/:id" element={<ItemInfo />} />
        <Route path="/ipad" element={<IPadList />} />
        <Route path="/ipad/:id" element={<ItemInfo />} />
        <Route path="/macbook" element={<MacBookList />} />
        <Route path="/macbook/:id" element={<ItemInfo />} />
        <Route path="/acc" element={<AccList />} />
        <Route path="/acc/:id" element={<ItemInfo />} />
        <Route path="/buyitem/:id" element={<BuyItem />} />
        <Route path="/baskets" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findpassword" element={<FindPassword />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
