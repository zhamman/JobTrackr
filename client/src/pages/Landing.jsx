import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { FaPhoenixFramework } from "react-icons/fa";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <div className="new-logo">
          <FaPhoenixFramework />
          <h1>JobTrackr</h1>
        </div>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Introducing JobTrackr, the ultimate app for managing job
            applications. Track, organize, and monitor all your applications in
            one place. Stay on top of deadlines, gain insights and stay focused
            on landing your dream job. JobTrackr: Your personalized job
            application assistant.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/ Register
          </Link>
        </div>
        {/* <img src={main} alt="job hunt" className="img main-img" /> */}
        <div className="landing-icon">
          <FaPhoenixFramework />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
