import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Social</header> 
          <div className="grid grid-flow-col gap-4">
            <a className="text-4xl" href="https://www.linkedin.com/in/md-sohel-rana-8912a82a3/ "> <FaLinkedin /> </a>
            <a  className="text-4xl" href=" https://www.facebook.com/mdsohelrana85238960"> <FaFacebook /> </a>
            <a  className="text-4xl" href="https://github.com/mdsohelrana85238960 "> <FaGithub /></a>
          
          </div>
        </nav>
      </footer>
    );
};

export default Footer;