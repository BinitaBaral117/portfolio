import React, { useState } from "react";
import './Hire.css'
import { PiBagFill } from "react-icons/pi";

const Hire = () => {
  const [isResumeVisible, setIsResumeVisible] = useState(false);

  const showResume = () => {
    setIsResumeVisible(true);
  };

  const hideResume = () => {
    setIsResumeVisible(false);
  };

  return (
    <div id='resume'>
      <button onClick={showResume} className="hiremebutton"> <PiBagFill/> Open Resume</button>

      {isResumeVisible && (
        <div>
          <iframe
            className="resume"
            title="Resume Viewer"
            width="50%"
            height="500px"
            src="/resume.pdf" 
          ></iframe>
          <button onClick={hideResume} className="closeresumebutton">Close Resume</button>
        </div>
      )}
    </div>
  );
};

export default Hire;
