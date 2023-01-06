import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
