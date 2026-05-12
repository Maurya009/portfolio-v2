import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;
  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    // eslint-disable-next-line prefer-const
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }
  setTranslateX();
  // eslint-disable-next-line prefer-const
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });
  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>RYDEX</h4>
                  <p>Vehicle Booking Web App</p>
                </div>
              </div>
              <h4>Tools and Features</h4>
              <p>Next.js, React, Node.js, MongoDB</p>
              <div style={{marginTop: "1rem", display: "flex", gap: "1rem"}}>
                <a href="https://rydex-booking.vercel.app/" target="_blank" style={{color: "white"}}>Live →</a>
                <a href="https://github.com/Maurya009" target="_blank" style={{color: "white"}}>GitHub →</a>
              </div>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="RYDEX" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>DEV PORTFOLIO</h4>
                  <p>Personal Portfolio Website</p>
                </div>
              </div>
              <h4>Tools and Features</h4>
              <p>React, Vite, GSAP, Three.js</p>
              <div style={{marginTop: "1rem", display: "flex", gap: "1rem"}}>
                <a href="https://github.com/Maurya009" target="_blank" style={{color: "white"}}>GitHub →</a>
              </div>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Portfolio" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>COMING SOON</h4>
                  <p>Full Stack Project</p>
                </div>
              </div>
              <h4>Tools and Features</h4>
              <p>Next.js, Node.js, MongoDB, Tailwind</p>
              <div style={{marginTop: "1rem", display: "flex", gap: "1rem"}}>
                <a href="https://github.com/Maurya009" target="_blank" style={{color: "white"}}>GitHub →</a>
              </div>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Coming Soon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;