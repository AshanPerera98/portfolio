import "./MainPage.css";
import Hero from "../../sections/hero_section/Hero";
import AboutMe from "../../sections/about_me/AboutMe";
import Experience from "../../sections/experience/Experience";
import Education from "../../sections/education/Education";
import Blog from "../../sections/blog/Blog";
import Volunteering from "../../sections/volunteering/Volunteering";
import Footer from "../../components/footer/Footer";

function MainPage() {
  return (
    <div className="MainPage">
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
      <Blog />
      <Volunteering />
      <Footer />
    </div>
  );
}

export default MainPage;
