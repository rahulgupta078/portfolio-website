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
                <h4>Diploma in CSE</h4>
                <h5>Jharkhand University of technology - Ranchi</h5>
              </div>
              <h3>2022-25</h3>
            </div>
            <p>
              Completed a Diploma in Computer Science & Engineering, building a strong foundation in programming,
              database, web development, computer networks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Programming intern</h4>
                <h5>Codezeal Technology, Ranchi</h5>
              </div>
              <h3>2024 </h3>
            </div>
            <p>
              Completed a Java Programming Internship at Codezeal Technology,
              gaining hands-on experience in Java and web development while working on a FashionHub e-commerce website.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (Data Science)</h4>
                <h5>GL Bajaj Institute of Tech. & Management - AKTU</h5>
              </div>
              <h3>2025-28</h3>
            </div>
            <p>
              Undergraduate program specializing in Computer Science and Data Science,
              mastering algorithms, statistical computing, database systems, and software engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Analyst & Software Engineer</h4>
                <h5>Continuous Projects & Skill Building</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Aspiring Data Analyst skilled in Python, SQL, Business Intelligence, and data visualization,
              with knowledge of AWS Cloud and Generative AI & Foundation Models. Passionate about transforming data into meaningful insights.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
