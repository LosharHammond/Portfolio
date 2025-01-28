import React, { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import myprofilepic from "../assets/images/myprofilepic.jpg";

function Main() {
   useEffect(() => {
    document.title = "kekeli";
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myprofilepic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/LosharHammond" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/losharhammond" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:losharhammond@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"><EmailIcon /></a>
        <a href="whatsapp://send?phone=233557297728&text=Hi%20Loshar,%20I%20want%20to%20contact%20you" target="_blank" rel="noreferrer"><WhatsAppIcon /></a>
          </div>
          <h1>Loshar Hammond</h1>
          <p>Software Developer | IT Specialist | Data Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/LosharHammond" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/losharhammond" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;