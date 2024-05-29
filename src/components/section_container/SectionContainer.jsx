/* eslint-disable react/prop-types */
import "./SectionContainer.css";
function SectionContainer(props) {
  return (
    <section className="hero bg-grey-100" id={props.id}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="section-title">{props.title}</p>
        </div>
        <div className="apply-font">{props.children}</div>
      </div>
    </section>
  );
}

export default SectionContainer;
