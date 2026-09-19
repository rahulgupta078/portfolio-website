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
                <h4>B.Tech in CSE (Data Science)</h4>
                <h5>GL Bajaj Institute of Tech. & Management, Greater Noida</h5>
              </div>
              <h3>2024-28</h3>
            </div>
            <p>
              Undergraduate program specializing in Computer Science and Data Science,
              mastering algorithms, statistical computing, database systems, and software engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Programming Intern</h4>
                <h5>Codezeal Technology, Ranchi</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              October 2024 – November 2024. Developed an e-commerce application utilizing
              Java, HTML, CSS, and JavaScript, implementing core business logic and user interface flows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Data Analyst & Software Engineer</h4>
                <h5>Continuous Projects & Skill Building</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing full-stack and data-driven solutions, deepening expertise across
              AWS Cloud, Generative AI foundation models, and business intelligence analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
