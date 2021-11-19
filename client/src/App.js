import "./App.scss";
import { React } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/homePage/homePage";
import Crypto from "./pages/cryptoPage/cryptoPage";

function App() {
  return (
    <article>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
        </Routes>
      </Router>
    </article>
  );
}

export default App;
