import { Route, Routes } from "react-router-dom";
import MainHeader from "./Component/Home/MainHeader";
import MainHome from "./Component/Home/MainHome";
import MainFooter from "./Component/Home/MainFooter";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<MainHome />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
