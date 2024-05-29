import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaBehance,
  FaYoutube,
} from "react-icons/fa6";
import profilePic from "./../../assets/ashan_top.webp";
import "./AboutMe.css";
import SectionContainer from "./../../components/section_container/SectionContainer";

function AboutMe() {
  const onClickSocial = (url) => () => {
    window.open(url, "_blank");
  };

  return (
    <SectionContainer title="Wanna Know Me?" id="about">
      <div className="container about-block">
        <div className="columns is-desktop">
          <div className="column is-one-third-fullhd is-one-third-widescreen is-one-third-desktop">
            <img src={profilePic} className="profile-pic" />
            <div className="social-icon-section">
              <div className="social-icon-group">
                <FaLinkedin
                  role="button"
                  onClick={onClickSocial(
                    "https://www.linkedin.com/in/ashan-perera-b00742195/"
                  )}
                  className="social-icon"
                />
                <FaGithub
                  role="button"
                  onClick={onClickSocial("https://github.com/AshanPerera98")}
                  className="social-icon"
                />
                <FaMedium
                  role="button"
                  onClick={onClickSocial(
                    "https://medium.com/@ashantiwankaperera"
                  )}
                  className="social-icon"
                />
                <FaBehance
                  role="button"
                  onClick={onClickSocial(
                    "https://www.behance.net/ashanperera1"
                  )}
                  className="social-icon"
                />
                <FaYoutube
                  role="button"
                  onClick={onClickSocial(
                    "https://www.youtube.com/@ashanperera1703"
                  )}
                  className="social-icon"
                />
              </div>
            </div>
          </div>
          <div className="column has-text-left">
            <p>
              Multi-faceted developer and designer with expertise in software
              engineering specialized in fron-tend development, UI/UX, graphic
              design, and video editing. Skilled in crafting logos, branding
              elements, and user interfaces that resonate with target audiences.
              Leverage more than 3 years of front-end development experience and
              nearly half-decade of designing experience to translate user needs
              into intuitive and visually compelling products, marketing
              materials, and digital experiences.
            </p>
            <div className="columns details-section">
              <div className="column">
                <div className="columns ">
                  <div className="column is-two-fifths">
                    <p className="strong-details">Name :</p>
                  </div>
                  <div className="column">
                    <p className="normal-details">Ashan Perera</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-two-fifths">
                    <p className="strong-details">Pronouns :</p>
                  </div>
                  <div className="column">
                    <p className="normal-details">He / Him</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-two-fifths">
                    <p className="strong-details">Ethnicity :</p>
                  </div>
                  <div className="column">
                    <p className="normal-details">Sri Lankan (Asian)</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-two-fifths">
                    <p className="strong-details">DOB :</p>
                  </div>
                  <div className="column">
                    <p className="normal-details">12th March 1998</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <p className="strong-details">Email :</p>
                  </div>
                  <div className="column">
                    <p className="normal-details">
                      ashantiwankaperera@gmail.com
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-one-quarter">
                    <p className="strong-details">Mobile :</p>
                  </div>
                  <div className="column">
                    <p className="normal-details">(+94) 77 254 0901</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-one-quarter">
                    <p className="strong-details">Based :</p>
                  </div>
                  <div className="column">
                    <p className="normal-details">Galle, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default AboutMe;
