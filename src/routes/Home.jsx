import Hero from "../Components/Hero.jsx";
import { useEffect } from "react";
import ProductCarousel from "../Components/ProductCarousel.jsx";

function Home() {
  //Page title update
  useEffect(() => {

    document.title = `JUDOMYKA | Home`;

  }, []);


  return (
    <>
      <Hero />
      <ProductCarousel/>
    </>
  );
}

export default Home;
