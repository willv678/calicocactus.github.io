import styles from '../styles/Home.module.css'
import TopBarItem from "./TopBarItem"

export default function TopBar(){
    return  <div className={styles.topBar}>
                <TopBarItem destination="#home" text="Home"/>
                <TopBarItem destination="#projects" text="My Work"/>
                <TopBarItem destination="https://www.linkedin.com/in/will-varner/" text="Resume"/>
            </div>
}