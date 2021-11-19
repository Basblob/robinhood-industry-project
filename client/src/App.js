import "./App.scss";
<<<<<<< HEAD
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/homePage/homePage";
=======
import { React } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
>>>>>>> develop
import Crypto from "./pages/cryptoPage/cryptoPage";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </Router>
=======
    <article>
      <Router>
        <Routes>
          <Route exact path="/" element={<Crypto />} />
        </Routes>
      </Router>
    </article>
>>>>>>> develop
  );
}

export default App;
