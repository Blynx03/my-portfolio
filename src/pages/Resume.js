import React from "react";
import "./resume.css";

const Resume = () => {
  function viewPDF() {
    window.open("/images/CRC-resume2023.pdf", "_blank");
  }

  return (
    <div className="resume-container">
      <iframe
        title="My CV"
        src="/images/CRC-resume2023.pdf"
        frameborder="0"
        className="resume-iframe"
      />
      <div className="resume-link-container">
        <div className="resume-link" onClick={() => viewPDF()}>
          View PDF
        </div>
      </div>
    </div>
  );
};

export default Resume;
