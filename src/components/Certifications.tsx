import "./styles/Certifications.css";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  skills: string[];
  certificateUrl: string;
}

const certifications: CertificationItem[] = [
  {
    id: "01",
    title: "Data Analyst Certification",
    issuer: "OneRoadmap",
    skills: ["Data Analysis"],
    certificateUrl: "https://www.oneroadmap.io/skills/da/certificate/CERT-5DDB59E9",
  },
  {
    id: "02",
    title: "Developing Generative Artificial Intelligence Solutions",
    issuer: "Amazon Web Services (AWS)",
    skills: ["Generative AI", "Foundation Models"],
    certificateUrl: `https://smallpdf.com/file#s=b37b0745-4f30-49e8-a222-712ea6e9b292`,
  },
  {
    id: "03",
    title: "Introduction to MS Excel",
    issuer: "Simplilearn",
    skills: ["Microsoft Excel"],
    certificateUrl: "https://simpli-web.app.link/e/d7pAMySja6b",
  },
  {
    id: "04",
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    skills: ["Data Analysis", "Data-driven Decision Making"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/records/EV5A1TCSBX7W",
  },
  {
    id: "05",
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    skills: ["Exploratory Data Analysis (EDA)", "Logistic Regression"],
    certificateUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a81ff9e6dfcb5ce7128f9e3_1787003287852_completion_certificate.pdf",
  },
  {
    id: "06",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    skills: ["Cloud Computing", "AWS Cloud Essentials"],
    certificateUrl: "",
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

                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate"
                 >
                  View
                 </a>

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
