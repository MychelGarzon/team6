import Hero from "../Components/Hero.jsx";
import { useEffect } from "react";

function Home() {
  //Page title update
  useEffect(() => {

    document.title = `JUDOMYKA | Home`;

  }, []);


  return (
    <>
      <Hero />
    </>
  );
}

export default Home;
