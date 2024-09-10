import React from "react";
import "./Projects.scss";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import project1 from "../../assets/img/project-1.jpg";
import project2 from "../../assets/img/project-2.jpg";
import project3 from "../../assets/img/project-3.jpg";
import project4 from "../../assets/img/project-4.jpg";
import project5 from "../../assets/img/project-5.jpg";
import project6 from "../../assets/img/project-6.jpg";


const Projects = () => {
  return (
    <div className="projectsPage">
      <div class="project-bgImg"></div>
      <div class="projects__bio-image">
        <h1 className="text-center text-white">My Projects</h1>
      </div>
      <main class="projects container">
        <div class="projects__items row my-3">
          <div class="projects__item col-lg-12 col-xl-6 col-xxl-4 my-3">
            <img src={project1} alt="My Project" />
          </div>
          <div class="projects__item col-lg-12 col-xl-6 col-xxl-4 my-3">
            <img src={project2} alt="My Project" />
          </div>
          <div class="projects__item col-lg-12 col-xl-6 col-xxl-4 my-3">
            <img src={project3} alt="My Project" />
          </div>
          <div class="projects__item col-lg-12 col-xl-6 col-xxl-4 my-3">
            <img src={project4} alt="My Project" />
          </div>
          <div class="projects__item col-lg-12 col-xl-6 col-xxl-4 my-3">
            <img src={project5} alt="My Project" />
          </div>
          <div class="projects__item col-lg-12 col-xl-6 col-xxl-4 my-3">
            <img src={project6} alt="My Project" />
          </div>
        </div>
      </main>
      <footer className="footer-vertical">
        <div className="socialIcons">
          <SlSocialTwitter className="child" />
          <SlSocialFacebook className="child" />
          <SlSocialInstagram className="child" />
          <SlSocialGithub className="child" />
        </div>

        <div class="copyright">&copy; Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Projects;
