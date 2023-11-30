function Hero() {
  const scrollDown = () => {
    // TODO: check scrolling when layout is finished
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  return (
    <div className="hero">
      <div className="hero__title">
        <h1>JudoMyka</h1>
        <p>Elevate your style</p>
      </div>
      <button onClick={scrollDown}>
        <span className="hero__btn material-symbols-outlined">expand_circle_down</span>
      </button>
    </div>
  );
}
export default Hero;
