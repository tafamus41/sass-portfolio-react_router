import React from 'react'
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate=useNavigate()
  return (
    <footer className="footer">
        <div className="socialIcons">
          <SlSocialTwitter className="child" onClick={()=>navigate("/#twitter")}/>
          <SlSocialFacebook className="child" onClick={()=>navigate("/#facebook")}/>
          <SlSocialInstagram className="child" onClick={()=>navigate("/#instagram")}/>
          <SlSocialGithub className="child" onClick={()=>navigate("/#github")}/>
        </div>

        <div class="copyright">&copy; Copyright 2023</div>
      </footer>
  )
}

export default Footer