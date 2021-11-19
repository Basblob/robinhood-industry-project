import "../Hero/Hero.scss";
import img from "../../assets/images/Rh-heroimg.png";
import disicon from "../../assets/icons/Info-Icon.svg";

function Hero() {
  return (
    <main className="hero">
      <section className="hero__left">
        <div className="hero__text">
          <h1 className="hero__h1">Money. Redifined.</h1>
          <p className="hero__p">
            Robinhood believes in monetary freedom for everyone.
          </p>
          <p className="hero__p">That includes you.</p>
        </div>
        <div className="hero__buttons">
          <a href="https://robinhood.com/signup" className="hero__bttn">
            Get Started
          </a>
          <a href="https://learn.robinhood.com/library/" className="hero__bttn">
            Learn More
          </a>
        </div>
        <div className="hero__disclosure">
          <img className="hero__discicon" src={disicon} alt="disclosure icon" />
          <a
            href="https://robinhood.com/us/en/about/crypto/"
            className="hero__cryptodisc"
          >
            Crypto Disclosure
          </a>
        </div>
      </section>
      <section className="hero__right">
        <img
          className="hero__img"
          alt="cellphone showing bitcoin stocks"
          src={img}
        ></img>
      </section>
    </main>
  );
}

export default Hero;
