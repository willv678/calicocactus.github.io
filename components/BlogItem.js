import styles from '../styles/Home.module.css'


export default function BlogItem({title, link, color, description, imgLink}){
    return  <div className={styles.outerBlogItem}>
                <a className = {styles.blogContainer} href={link}>
                    <div className = {styles.blogText}>
                        <p className={styles.blogText} style={{color: color, fontSize: "3vw", marginBottom: "0px", fontWeight: "500"}}>{title}</p>
                        <p style={{fontSize: "1.5vw", width: "95%"}}>{description}</p>
                    </div>
                    <div className = {styles.blogImageContainer}>
                        <img 
                            src= {imgLink} 
                            alt = {title}
                            className={styles.blogImage}
                        />
                    </div>
                </a>
            </div>

                
}