import "./App.scss";
<<<<<<< HEAD
import { React } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
=======
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/homePage/homePage";
>>>>>>> bars
import Crypto from "./pages/cryptoPage/cryptoPage";

function App() {
  return (
<<<<<<< HEAD
    <article>
      <Router>
        <Routes>
          <Route exact path="/" element={<Crypto />} />
        </Routes>
      </Router>
    </article>
=======
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </Router>
>>>>>>> bars
  );
}

export default App;
