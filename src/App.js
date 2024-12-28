import "./App.css";
import "aos/dist/aos.css"; // Nhớ import CSS của AOS

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Profile from "./pages/profile/Profile";

import Base from "./component/Base/Base";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Intro></Intro>}></Route> */}
        <Route
          path="/"
          element={<Base children={<Profile></Profile>}></Base>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
