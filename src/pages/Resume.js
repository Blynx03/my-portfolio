import "./resume.css";
import resume from "../images/CRC-resume2026.pdf"

const Resume = () => {
  function viewPDF() {
    window.open(resume, "_blank");
  }

  return (
    <article className="resume-article-container">
      <iframe
        title="My CV"
        src={resume}
        frameBorder="0"
        className="resume-iframe"
      />
      <div className="resume-link-container">
        <div className="resume-link" onClick={viewPDF}>
          View PDF
        </div>
      </div>
    </article>
  );
};

export default Resume;
