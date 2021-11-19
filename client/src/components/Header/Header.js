import "./Header.scss";
import logo from "../../Assets/logo/rh_logo.png";
import { Link } from "react-router-dom";
import chevron from "../../Assets/icons/chevron.right.svg";

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <Link className="navbar__link" to="/">
          <img className="navbar__logo" src={logo} alt="robinhood logo" />
        </Link>
        <div className="subnav">
          <button className="subnavbtn">
            Products <i className="fa fa-caret-down"></i>
            <img src={chevron} className="subnav__chevron" alt="chevron" />
          </button>
          <div className="subnav-content">
<<<<<<< HEAD
            <a href="https://robinhood.com/us/en/about/#our-products">
              Stocks &amp; Funds
            </a>
=======
            <a href="https://robinhood.com/us/en/about/#our-products">Stocks &amp; Funds</a>
>>>>>>> bars
            <a href="https://robinhood.com/us/en/about/options/">Options</a>
            <a href="https://robinhood.com/us/en/about/gold/">Gold</a>
            <a href="https://robinhood.com/us/en/about/cash-management/">Cash Management</a>
            <a href="#|">|</a>
            <a href="http://localhost:3000/#">Crypto</a>
            <a href="https://robinhood.com/us/en/download/">Download</a>
          </div>
        </div>
        <div className="subnav">
          <button className="subnavbtn">
            Learn <i className="fa fa-caret-down"></i>
            <img src={chevron} className="subnav__chevron" alt="chevron" />
          </button>
          <div className="subnav-content">
            <a href="https://learn.robinhood.com/">Investing basics</a>
            <a href="https://learn.robinhood.com/library/">Library</a>
            <a href="https://snacks.robinhood.com/">Snacks</a>
          </div>
        </div>

        <div className="subnav">
<<<<<<< HEAD
          <button
            href="https://robinhood.com/us/en/support/"
            className="subnavbtn"
          >
=======
          <button href="https://robinhood.com/us/en/support/" className="subnavbtn">
>>>>>>> bars
            Support<i className="fa fa-caret-down"></i>
          </button>
        </div>

        <div className="subnav">
          <button className="subnavbtn">
            Who we are <i className="fa fa-caret-down"></i>
            <img src={chevron} className="subnav__chevron" alt="chevron" />
          </button>
          <div className="subnav-content">
            <a href="https://robinhood.com/us/en/about-us/">About us</a>
            <a href="https://robinhood.com/us/en/our-commitments/">Our commitments</a>
            <a href="https://robinhood.com/us/en/our-customers/">Our customers</a>
            <a href="https://press.robinhood.com/">Press</a>
            <a href="https://blog.robinhood.com/">Blog</a>
          </div>
        </div>
      </div>

      <section className="header__login">
        <a className="header__login--login" href="https://robinhood.com/login">
          Log In
        </a>
<<<<<<< HEAD
        <button
          className="header__login--signup"
          href="https://robinhood.com/signup"
        >
=======
        <a className="header__login--signup" href="https://robinhood.com/signup">
>>>>>>> bars
          Sign Up
        </button>
      </section>
    </header>
  );
}

export default Header;
