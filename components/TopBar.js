import styles from '../styles/Home.module.css'
import TopBarItem from "./TopBarItem"

export default function TopBar(){
    return  <div className={styles.topBar}>
                <TopBarItem destination="https://willvarner.me" text="Home"/>
                <TopBarItem destination="https://willvarner.me/#projects" text="My Work"/>
                <TopBarItem destination="https://www.linkedin.com/in/will-varner/" text="LinkedIn"/>
                <TopBarItem destination="/csresume.pdf" text="Resume"/>
            </div>
}