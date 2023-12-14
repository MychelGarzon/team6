import { useEffect } from 'react';

function About() {
  //Page title update
  useEffect(() => {
    document.title = `About | JUDOMYKA`;
  }, []);

  return (
    <main className="about-main">
      <h1 className="about-title">About</h1>
      <h2>JudoMyka catalogue site</h2>
      <h3>Description</h3>
      <p>
        This project was created as an assignment for the &quot;Software Development Team Project&quot; class at <a href="https://www.bc.fi">Business College Helsinki</a>, REACT23S Full Stack Web Developer program. The purpose of this assignment was
        to practice working as a software development team, communication, and learning about widely used project management, development, and design tools.
      </p>
      <p>Timespan of the project: 26.10. &ndash; 14.12.2023.</p>
      <p>The application represents a basic catalogue website for sports clothing featuring:</p>
      <ul className="about-list">
        <li>landing page with a carousel</li>
        <li>products page that showcases all the products from a database</li>
        <li>search to filter products</li>
        <li>details page for each product</li>
        <li>sign in to view restricted content</li>
        <li>dashboard for users</li>
        <li>responsive layout</li>
      </ul>
      <h3>Contributors with team roles</h3>
      <ul className="about-list">
        <li>Mychel Garzon (@MychelGarzon): tech lead and front-end developer</li>
        <li>Jubair Hossain (@meJubair): product owner and full-stack developer</li>
        <li>Kati Perkiö (@katiperkio)</li>
        <li>Dóra Tokai (@tdora28): designer and front-end developer</li>
      </ul>
      <h3>Tools</h3>
      <ul className="about-list">
        <li>Version control: Git, GitHub</li>
        <li>Project management: Trello</li>
        <li>Communication: MS Teams, WhatsApp</li>
        <li>UI/UX: Figma</li>
        <li>Database: Firebase</li>
        <li>Front-end library: ReactJS</li>
        <li>Package manager: npm</li>
      </ul>
      <h3>Disclaimer</h3>
      <p>Please note that this project is designed for learning purposes. It is a demonstration of concepts, techniques, and skills developed in an educational setting.</p>
      <p>
        The creators of this project do not claim ownership of any products or images that have been used throughout its development. All products, images, and related materials incorporated into this project are the property of their respective
        owners. These assets have been utilized strictly for non-commercial, educational purposes under the context of academic study and learning. This project does not aim to infringe upon any copyright or intellectual property rights. The use of
        these assets is solely intended for the demonstration of academic concepts and should not be construed as an endorsement by the product owners. Any trademarks, logos, and brand names shown or implied within this project belong to their
        respective owners and their inclusion here is for educational purposes only.
      </p>
    </main>
  );
}

export default About;
