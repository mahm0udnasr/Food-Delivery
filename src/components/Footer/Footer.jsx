import "./Footer.css";
import { assets } from "../../assets/assets";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="footer" id="contact-us">
      <div className="footer-content">
        <div className="footer-content-left">
          <img loading="lazy" src={assets.logo} alt="Tomata Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            repellendus eveniet provident molestiae non, distinctio unde
            doloribus placeat, sunt quas laudantium nobis iure, harum atque
            nostrum quo tempore dignissimos nesciunt.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/mhm0udnasr/" target="_blank">
              <FaFacebookF size={22} />
            </a>
            <a href="https://www.linkedin.com/in/mahm0udnasr/" target="_blank">
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://github.com/mahm0udnasr" target="_blank">
              <LuGithub size={22} />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+201005566102" target="_blank">
                +20 1005566102
              </a>
            </li>
            <li>
              <a href="mailto:conact.mahmoudnasr@gmail.com" target="_blank">
                conact.mahmoudnasr@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        Copyright 2024 &copy; Tomata - All Right Reserved.
      </div>
    </footer>
  );
}
