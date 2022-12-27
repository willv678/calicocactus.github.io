import styles from '../styles/Home.module.css'

export default function ScrollDownBox(){
    return <div className={styles.scrollDownBox}>
                <center className={styles.scrollDownText}>Check out some of my work!</center>
                <center>  
                    <img src="/svg/arrow.svg" alt="Scroll down!" className={styles.scrollDownSvg} />
                </center>
            </div>
}