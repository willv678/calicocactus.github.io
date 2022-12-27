import styles from '../styles/Home.module.css'
export default function TopBarItem({destination, text}) {
    return <a className={styles.topBarItem} href={destination}>{text}</a>
}