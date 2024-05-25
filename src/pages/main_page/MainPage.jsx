import Hero from "../../sections/hero_section/Hero";
import AboutMe from "../../sections/about_me/AboutMe";
import "./MainPage.css";
import Experience from "../../sections/experience/Experience";

function MainPage() {
  return (
    <div className="MainPage">
      <Hero />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default MainPage;
