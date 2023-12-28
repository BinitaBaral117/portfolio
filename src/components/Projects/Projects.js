import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <Router>
        <div id="projects">
        <div className="section">
          <h1>My Projects </h1>
          
          <div className="project1">
            <button>
              <IoCheckmarkDoneCircle className="circle" />
              <Link
                to="https://kuchnhi-cryptocureencey-dashboard.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crypto Currency <br />Dashboard
              </Link>
            </button>
          </div>

          <div className="project2">
            <button>
              <IoCheckmarkDoneCircle className="circle" />
              <Link
                to="https://kuchnhi-reeco-shopping-landing-page.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Food Shopping Landing <br />Page
              </Link>
            </button>
          </div>

          <div className="project3">
            <button>
              <IoCheckmarkDoneCircle className="circle" />
              <Link
                to="https://kuchnhi-ecommerce-site.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-Commerce Site
              </Link>
            </button>
          </div>
        </div>
        </div>
      </Router>
    </>
  );
};

export default Projects;
