import { useState, useEffect } from 'react';

function BackToTop() {
  // Hiding elements on scroll: https://plainenglish.io/blog/hiding-dom-elements-in-react-based-on-scrolling-d9a9ef1f1f5
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  function listenToScroll() {
    let heightToShowFrom = 1000;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShowFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isVisible && (
        <div className="back-to-top" onClick={scrollUp}>
          <span className="back-to-top__icon material-symbols-outlined">arrow_upward</span>
        </div>
      )}
    </>
  );
}

export default BackToTop;
