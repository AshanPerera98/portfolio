import "./MainPage.css";
import Hero from "../../sections/hero_section/Hero";
import AboutMe from "../../sections/about_me/AboutMe";
import Experience from "../../sections/experience/Experience";
import Education from "../../sections/education/Education";
import parse from "rss-to-json";
import { useEffect } from "react";

function MainPage() {
  useEffect(() => {
    parse("https://medium.com/feed/@ashantiwankaperera").then((rss) => {
      console.log(JSON.stringify(rss, null, 3));
    });
  }, []);
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
