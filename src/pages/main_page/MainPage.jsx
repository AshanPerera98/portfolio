import "./MainPage.css";
import Hero from "../../sections/hero_section/Hero";
import AboutMe from "../../sections/about_me/AboutMe";
import Experience from "../../sections/experience/Experience";
import Education from "../../sections/education/Education";

function MainPage() {
  return (
    <div className="MainPage">
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
    </div>
  );
}

export default MainPage;
