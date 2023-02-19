import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function BlogItem({ title, slug, color, description, imgLink }) {
  return (
    <div className={styles.outerBlogItem}>
      <Link href={`/projects/${slug}`}>
        <a className={styles.blogContainer}>
          <div className={styles.blogText}>
            <h2 className={styles.blogTitle} style={{ color: color, textAlign: 'center' }}>{title}</h2>
            <img
              src={imgLink}
              alt={title}
              className={styles.blogMobileImage}
            />
            <p className={styles.blogTextEntry}>{description}</p>
          </div>
          <div className={styles.blogImageContainer}>
            <img
              src={imgLink}
              alt={title}
              className={styles.blogImage}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
