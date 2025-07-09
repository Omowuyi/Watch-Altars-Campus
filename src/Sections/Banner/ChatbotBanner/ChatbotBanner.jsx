import ChatbotBannerStyle from "./ChatbotBanner.style";
import Spline from "@splinetool/react-spline";
import HoggleIcon from "../../../assets/images/chatbot/hoggle-icon.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ChatbotBanner = () => {
  return (
    <ChatbotBannerStyle className="chatbot-banner">
      {/* Fullscreen Background Spline */}
      <div className="spline-bg">
        
      </div>

      <div className="container banner-content-wrapper">
        <ScrollAnimate delay={200}>
          <div className="v8banner-text chatbot-banner-text">
            <div className="cd-intro m-0">
              <h1 className="title">
                Integrity Meets Intelligence — <br />
                <span>
                  Fueled by Faith
                  <img src={HoggleIcon} alt="icon" />
                </span>
              </h1>
            </div>
            <p>
              Empowering businesses with cutting-edge AI solutions rooted
              in wisdom, integrity, and the teachings of Jesus.
            </p>
            <form className="start-free-form">
              <input
                className="form-input"
                type="email"
                placeholder="Email address"
              />
              <input
                className="bg-blue-btn"
                type="submit"
                defaultValue="Start for free"
              />
            </form>
            <ul className="hero-content-list">
              <li>
                <div className="list-item">
                  <span className="iconify" data-icon="bi:check-lg" />
                  <p>Free 14-day trial</p>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <span className="iconify" data-icon="bi:check-lg" />
                  <p>No credit card required</p>
                </div>
              </li>
            </ul>
          </div>
        </ScrollAnimate>

        
      </div>
      

    </ChatbotBannerStyle>
  );
};

export default ChatbotBanner;
