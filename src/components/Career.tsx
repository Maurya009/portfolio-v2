import "./styles/Career.css";
const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Computer Science Engineering</h4>
                <h5>Satyug Darshan Institute of Engineering & Technology</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Pursued B.Tech in Computer Science Engineering from Satyug Darshan 
              Institute of Engineering & Technology, Bhupani Village, affiliated 
              to YMCA University.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development</h4>
                <h5>Self Learning & Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built multiple projects using React, Next.js, Node.js and MongoDB. 
              Focused on developing clean, scalable and modern web applications 
              with great user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fresher - Full Stack Developer</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Recently graduated in 2026 and actively looking for Full Stack 
              Developer roles. Eager to contribute, learn and grow in a 
              professional environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;