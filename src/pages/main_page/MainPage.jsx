import Hero from "../../components/hero_section/Hero";
import AboutMe from "../../components/about_me/AboutMe";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="MainPage">
      <Hero />
      <AboutMe />
    </div>
  );
}

export default MainPage;
