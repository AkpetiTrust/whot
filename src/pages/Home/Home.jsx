import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import mockup from "./assets/mockup.png";
import { Footer } from "../../components";

function Home() {
  return (
    <section className="home">
      <div className="shapes">
        <div className="circle">
          <svg
            width="159"
            height="120"
            viewBox="0 0 159 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M184.087 61.0926C185.559 57.5701 186.821 53.9687 187.873 50.3148L70.159 -67.3987C66.5051 -66.3735 62.9038 -65.1118 59.3813 -63.6134L184.087 61.0926Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M176.017 76.3392C177.989 73.3424 179.75 70.2406 181.327 67.0861L53.3615 -60.8794C50.2071 -59.3022 47.1051 -57.541 44.1084 -55.5694L176.017 76.3392Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M165.739 89.3776C168.131 86.8277 170.339 84.199 172.39 81.4651L38.9828 -51.9418C36.2489 -49.8914 33.6202 -47.657 31.0703 -45.2912L165.739 89.3776Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M6.04395 54.994C10.5916 68.3742 18.1886 80.9395 28.8611 91.612C39.5337 102.285 52.0989 109.882 65.479 114.429L6.04395 54.994Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M115.03 -69.1862C109.615 -70.264 104.147 -70.8686 98.6533 -71L191.473 21.8197C191.342 16.3257 190.737 10.858 189.659 5.44282L115.03 -69.1862Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M189.582 43.27C190.449 39.0115 191.001 34.7267 191.291 30.4156L90.059 -70.8159C85.7479 -70.5268 81.4368 -69.9747 77.2046 -69.1073L189.582 43.27Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M139.082 109.329C142.237 107.752 145.339 105.991 148.335 104.019L16.4529 -27.8629C14.4814 -24.8661 12.7203 -21.7643 11.1431 -18.6098L139.082 109.329Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M77.4405 117.636C82.8556 118.714 88.3233 119.319 93.8173 119.45L0.997559 26.6303C1.12899 32.1243 1.7336 37.5919 2.81137 43.0071L77.4405 117.636Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M122.312 115.875C125.966 114.85 129.567 113.588 133.09 112.09L8.35745 -12.6426C6.88538 -9.12014 5.62375 -5.51887 4.57227 -1.86497L122.312 115.875Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M102.413 119.292C106.724 119.003 111.035 118.451 115.268 117.584L2.864 5.17999C1.99652 9.4385 1.44443 13.7233 1.15527 18.0343L102.413 119.292Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
            <path
              d="M153.462 100.392C156.196 98.3415 158.825 96.1071 161.375 93.7412L26.7323 -40.9012C24.3401 -38.3514 22.1319 -35.7227 20.0815 -32.9889L153.462 100.392Z"
              fill="#F9F871"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <div className="lines">
          <svg
            width="232"
            height="39"
            viewBox="0 0 232 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200.237 0L168.24 31.918L136.224 0L104.227 31.918L72.2307 0L44.0097 28.1526L15.7693 0L-16.2273 31.918L-48.2435 0L-80.2402 31.918L-112.237 0L-144 31.6838L-140.458 35.2346L-112.237 7.08204L-80.2402 39L-48.2435 7.08204L-16.2273 39L15.7693 7.08204L44.0097 35.2541L72.2307 7.08204L104.227 39L136.224 7.08204L168.24 39L200.237 7.08204L228.477 35.2346L232 31.6838L200.237 0Z"
              fill="#BB93B4"
              fillOpacity="0.33"
            />
          </svg>
        </div>
      </div>

      <div className="top">
        <h1 className="title">
          NAIJA <span>WHOT</span>
        </h1>
        <p className="subtitle">
          Play the classic game of Naija Whot with friends and relive childhood
          memories!
        </p>
      </div>
      <main>
        <div className="image-container">
          <img src={mockup} alt="mockup" />
        </div>
        <div className="btn-group">
          <Link to="/play-computer">PLAY COMPUTER</Link>
          <p>OR</p>
          <Link to="/copylink">PLAY FRIEND</Link>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Home;
