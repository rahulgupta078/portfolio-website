import "./styles/Certifications.css";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  skills: string[];
}

const certifications: CertificationItem[] = [
  {
    id: "01",
    title: "Data Analyst Certification",
    issuer: "OneRoadmap",
    skills: ["Data Analysis"],
  },
  {
    id: "02",
    title: "Developing Generative Artificial Intelligence Solutions",
    issuer: "Amazon Web Services (AWS)",
    skills: ["Generative AI", "Foundation Models"],
  },
  {
    id: "03",
    title: "Introduction to MS Excel",
    issuer: "Simplilearn",
    skills: ["Microsoft Excel"],
  },
  {
    id: "04",
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    skills: ["Data Analysis", "Data-driven Decision Making"],
  },
  {
    id: "05",
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    skills: ["Exploratory Data Analysis (EDA)", "Logistic Regression"],
  },
  {
    id: "06",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    skills: ["Cloud Computing", "AWS Cloud Essentials"],
  },
];

const Certifications = () => {
  return (
    <div
      className="certifications-section section-container"
      id="certifications"
    >
      <div className="certifications-container">
        <h2>
          Certifications <span>&</span> Learning
        </h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.id}>
              <div className="cert-header">
                <span className="cert-index">{cert.id}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-skills">
                {cert.skills.map((skill, index) => (
                  <span className="cert-tag" key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
