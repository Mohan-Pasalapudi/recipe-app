import styles from "./footer.module.css"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
export default function Footer(){

    return(
        <footer className={styles.footer}>
            <p> ©️ {new Date().getFullYear()} Mohan Pasalapudi. All Rights Reserved.</p>
            <div className={styles.social}>
                <a href="https://www.linkedin.com/in/mohan-pasalapudi" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="icon" />
        </a>
        

        <a href="https://github.com/MohanPasalapudi" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="icon" />
        </a>
      </div>

        </footer>
    );
}