import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import MainHome from "./MainHome";

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
