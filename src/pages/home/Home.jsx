import React from "react";
import "./Home.scss";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
const Home = () => {
  return (
    <div>
      <main className="homePage">
        <p>Hi!My Name Is</p>
        <h1>
          Wednesday<span>Addams</span>
        </h1>
        <p>Full Stack Developer</p>
      </main>
      <footer className="footer">
        <div className="socialIcons">
          <SlSocialTwitter className="child"/>
          <SlSocialFacebook className="child"/>
          <SlSocialInstagram className="child"/>
          <SlSocialGithub className="child"/>
        </div>

        <div class="copyright">&copy; Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Home;
