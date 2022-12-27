import styles from '../styles/Home.module.css'

export default function SocialLinkSvg(){
    return  <div className={styles.socialIconsBox}>
                <a href='https://www.linkedin.com/in/will-varner/' className={styles.socialIcon}>
                    <img src='/svg/linkedin.svg' className={styles.socialSvg}/>
                </a>
                <a href='https://github.com/willv678' className={styles.socialIcon}>
                    <img src='/svg/github.svg' className={styles.socialSvg}/>
                </a>
                <a href='https://www.upwork.com/freelancers/~01a4c125790d32949f' className={styles.socialIcon}>
                    <img src='/svg/upwork.svg' className={styles.socialSvg}/>
                </a>
            </div>
}