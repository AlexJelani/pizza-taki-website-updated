import styles from "../styles/Navbar.module.css";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link} from "react-scroll";


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div >
                    <FontAwesomeIcon icon={faPhone} size="2xl" style={{color: "black"}}></FontAwesomeIcon>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>090 1862 1728</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          activeclassname="selected"
                        className={styles.listItem}>
                        Homepage</Link>
                    <Link to="menu"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          activeclassname="selected"
                        className={styles.listItem}>Menu</Link>
                    <Link activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          activeclassname="selected" className="logo">
                        <img src="/assets/img/logo.png" alt="" width="150" height="54" /></Link>
                    <Link to="events"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          activeclassname="selected"
                        className={styles.listItem}>Events</Link>
                    <Link to="blog"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          activeclassname="selected"
                        className={styles.listItem}>Blog</Link>
                    <Link to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration= {500}
                          activeclassname="selected"
                        className={styles.listItem}>Contact</Link>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;