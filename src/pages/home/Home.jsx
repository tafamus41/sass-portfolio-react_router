import React from "react";
import "./Home.scss";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()

  return (
    <div>
      <main className="homePage">
        <p>Hi!My Name Is</p>
        <h1>
          Wednesday<span>Addams</span>
        </h1>
        <p>Full Stack Developer</p>
      </main>
      <footer className="footer-horizontal">
        <div className="socialIcons">
          <SlSocialTwitter className="child" onClick={()=>navigate("/#twitter")}/>
          <SlSocialFacebook className="child" onClick={()=>navigate("/#facebook")}/>
          <SlSocialInstagram className="child" onClick={()=>navigate("/#instagram")}/>
          <SlSocialGithub className="child" onClick={()=>navigate("/#github")}/>
        </div>

        <div class="copyright">&copy; Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Home;
