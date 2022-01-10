import "./about.css";
import im from "../../image/profile2.jpg";
import java from "../../image/js.png";
import react from "../../image/react.png";
import html from "../../image/html.jpg";
import mongo from "../../image/mongo2.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={im} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello! My name is Suraj and I enjoy creating things that live on the
          internet.
        </p>
        <p className="a-desc">
          My interest in web development started back last year when I was
          trying to edit things on the web — taught me a lot about HTML & CSS!.
          Fast Forwarding to today, I built a number of web applications and 4
          major projects. Learned a great deal about teamwork, leadership, and
          communication. After months of rigorous training, here I am looking
          for an opportunity as a full stack web developer.
        </p>
        <div className="a-award">
          <img src={java} alt="" className="a-award-img" />
          <img src={html} alt="" className="a-award-img" />
          <img src={react} alt="" className="a-award-img" />
          <img src={mongo} alt="" className="a-award-img" />

          <div className="a-award-texts">
            <h4 className="a-award-title">Proficiencies In</h4>
            <p className="a-award-disc">
              So far, I have learned JavaScript, HTML, CSS, Bootstrap, MongoDB,
              Node.JS, and Express.JS. There's certainly yet more to learn, yet
              more problems to solve, and yet this more to build.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
