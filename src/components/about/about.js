import React from "react";
import './about.css';

const About = () => {
  return (
    <>
      <div id="about">
      <div className="intro">
        <h2 className="me">About me</h2>
        
        <p className="para-about-me">
          I'm Binita Baral, a dedicated frontend web developer with a knack for creating visually appealing and user-friendly interfaces. Armed with a passion for code and a keen eye for design, I bring websites to life by combining creativity with cutting-edge technologies. My journey in web development has been fueled by continuous learning, and I'm excited about crafting seamless and delightful digital experiences. Let's build something incredible together! <br /> <br />
          <ul>
            <li>
            A seasoned frontend web developer passionate about creating immersive and user-centric digital experiences. Hailing from Bangalore, my journey in the dynamic realm of web development spans several enriching years. Armed with a strong foundation in HTML, CSS, and JavaScript, I thrive on the creative interplay between design and code.</li><br />

            <li>My expertise extends to leveraging powerful frameworks and libraries, with a proficiency in crafting seamless UIs using React and Vue.js. Beyond the technicalities, I pride myself on my ability to transform complex concepts into visually compelling and intuitive interfaces. I'm an advocate for responsive design, accessibility, and optimal user experiences across various devices.</li><br />

            <li>Constantly evolving, I stay abreast of industry trends and emerging technologies, ensuring that my skill set aligns with the ever-evolving landscape of frontend development. My commitment to clean, maintainable code reflects my dedication to producing high-quality work.</li><br />

            <li>What truly sets me apart is my holistic approach to development. I don't just write code; I tell a story through every line, considering user journeys and interactions at every step. My goal is to not only meet but exceed expectations, delivering websites that not only function flawlessly but also leave a lasting visual impact.</li><br />

            <li>Collaboration is at the core of my work philosophy. I'm eager to work with like-minded professionals and forward-thinking clients who share a passion for pushing the boundaries of digital innovation. If you're looking for a dedicated and creative partner for your next project, let's connect and embark on a journey of crafting extraordinary digital experiences together!</li><br />
          </ul>

        </p>
        <br />

        <h2 className="myskills"> My Skills  </h2> 
        {/* <h3 className="techskills"> Technical Skills: </h3> */}
        <div className="skillcontainer">
          <div className="skill">
            <p>HTML:</p>
            <div className="skills html">90%</div>

            <p>CSS:</p>
            <div className="skills css">80%</div>
            
            <p>ReactJS:</p>
            <div className="skills reactjs">80%</div>

            <p>Bootstrap:</p>
            <div className="skills Bootstrap">70%</div>

            <p>Tailwind CSS:</p>
            <div className="skills Tailwind">70%</div>
            

            <p>JavaScript:</p>
            <div className="skills js">70%</div>

            

            <p>C:</p>
            <div className="skills C">60%</div>

            <p>Python:</p>
            <div className="skills Python">60%</div>
          </div>

          {/* **************************************************************** LANGUAGES******************************************************* */}
          {/* <h3 className="language"> Languages And Proficiency</h3>
        <div className="skillcontainer">
          <div className="skill">
            <p>Hindi:</p>
            <div className="skills hindi">Mother Tongue</div>

            <p>English</p>
            <div className="skills english">Professional</div>

            <p>Nepali:</p>
            <div className="skills nepali">Fluent</div>

            <p>Kannada:</p>
            <div className="skills kannada">60%</div>
          </div>
        </div> */}
      </div>
      </div>
      </div>

    </>
  );
};

export default About;
