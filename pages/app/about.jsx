import { NavBar } from "../components/NavBar/NavBar";
import { Header } from "../components/Header/Header";
import styles from "./about.module.css"
import { AboutInfo } from "../components/AboutInfo/AboutInfo";

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header title={"Sobre"} showBackButton={true} />
            </div>
            <div>
                <AboutInfo/>
            </div>
            <div className={styles.footer}>
                <NavBar />
            </div>
        </div>
    );
}