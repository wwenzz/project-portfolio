import styles from "./Navbar.module.css";
import logo from "../../public/assets/logo.svg";
import { SlGlobe } from "react-icons/sl";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Website Logo" className={styles.logo}></img>
      <input type="checkbox" id="toggle" className={styles.toggle} />
      <label htmlFor="toggle" className={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={styles.menu}>
        <li>
          <a
            className={styles.navItem}
            href="#about"
            aria-label="Go to About section"
          >
            About
          </a>
        </li>
        <li>
          <a
            className={styles.navItem}
            href="#tech"
            aria-label="Go to Tech Stack section"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            className={styles.navItem}
            href="#projects"
            aria-label="Go to Projects section"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={styles.navItem}
            href="#skills"
            aria-label="Go to skills section"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className={styles.navItem}
            href="#contact"
            aria-label="Go to contact section"
          >
            Contact
          </a>
        </li>
        <li>
          <label className={styles.language} name="language">
            <SlGlobe className={styles.globe} aria-label="language icon" />
            <select className={styles.langOption} defaultValue="en">
              <option value="en">EN</option>
              <option value="sv">SV</option>
            </select>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
