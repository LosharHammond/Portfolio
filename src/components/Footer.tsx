import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/LosharHammond" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/losharhammond" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:losharhammond@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"><EmailIcon /></a>
        <a href="whatsapp://send?phone=233557297728&text=Hi%20Loshar,%20I%20want%20to%20contact%20you" target="_blank" rel="noreferrer"><WhatsAppIcon /></a>
      </div>
      <p>A portfolio designed & built by <a href="" target="_blank" rel="noreferrer">Loshar Hammond</a> with 💜</p>
    </footer>
  );
}

export default Footer;