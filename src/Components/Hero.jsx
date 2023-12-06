function Hero() {
  const scrollDown = () => {
    let pageHeight = window.innerHeight;
    window.scrollTo(0, pageHeight);
  };

  return (
    <div className="hero">
      <div className="hero__title">
        <h1>JudoMyka</h1>
        <p>Elevate your style</p>
      </div>
      <button className="hero__btn" onClick={scrollDown}>
        <span className="hero__btn__icon material-symbols-outlined">expand_circle_down</span>
      </button>
    </div>
  );
}
export default Hero;
