import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { downloadResumePdf } from "../lib/resumePdf";

const ResumeLink = () => {
  return (
    <div className="resume-icon">
      <button
        type="button"
        onClick={downloadResumePdf}
        aria-label="Download resume (PDF)"
        data-tooltip="Resume (PDF)"
      >
        <FontAwesomeIcon icon={faFilePdf} />
      </button>
    </div>
  );
};

export default ResumeLink;
