import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" />
      </Routes>
    </>
  );
}

export default App;
