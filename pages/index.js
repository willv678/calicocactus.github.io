import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react';
import styles from '../styles/Home.module.css'





const BlogItem = props => (
  <Fragment>

<a class="project-title" href={props.link}>
  <div className = {styles.blogContainer}>
    <div className = {styles.blogText}>
      <p style={{color: props.color, fontSize: "3vw", marginBottom: "0px", fontWeight: "500"}}>{props.title}</p>
      <p style={{fontSize: "1.5vw", width: "95%"}}>{props.description}</p>
    </div>
    <div className = {styles.blogImage}>
      <Image 
        src={props.imgLink} 
        alt = {props.title}
        width={712.5} 
        height={375} 
        fill="contain"
        position="relative"
      />
    </div>
  </div>
  </a>
  <p>&nbsp;</p>
  </Fragment>
);





export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Will Varner</title>
        <meta name="description" content="Hi there! My name's Will, a student developer with a passion for all things tech. Check out my portoflio site to see everything I've been working on." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topBar}>
          <a className = {styles.navElement} href="#home">Home</a>
          <a className = {styles.navElement} href="#myWork">My Work</a>
          <a className = {styles.navElement} href="https://www.linkedin.com/in/will-varner/">Resume</a>
      </div>
      <div className={styles.everything}>
      <section id="home">
        <main className={styles.main}>
          
            <div className={styles.info}>
              <h1 className={styles.title}>
                Will Varner
              </h1>
              <img className={styles.mobileFace}src="letterJacket.png" />
              <p className={styles.aboutMe}>Hi there! My name&lsquo;s Will, a student developer with a passion for all things tech. I love working with an array of things, from learning a new programming language to 3D-printing a wireless 3-in-one charger. This site acts as my hub for storing all my works, from software development to video production, everything Will can be found here, or open source on my Github Page.</p>
            </div>

            <div className={styles.socials}>
              <img className={styles.myFace}src="letterJacket.png" />
            
              
              <p className={styles.getInTouch}>Get in touch!</p>
            <div className={styles.links} style={{backgroundColor: "white", padding: "10px", borderRadius: "400px"}}>
              <a href='https://www.linkedin.com/in/will-varner/' className={styles.socialIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href='https://github.com/willv678' className={styles.socialIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>

              <a href='https://www.upwork.com/freelancers/~01a4c125790d32949f' className={styles.socialIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" stroke="none" stroke-linecap="round" stroke-linejoin="round" fill="#fff" fill-rule="nonzero"><path d="M0 9a8.96 8.96 0 0 1 9-9h42a8.96 8.96 0 0 1 9 9v42a8.96 8.96 0 0 1-9 9H9a8.96 8.96 0 0 1-9-9z" fill="#000"/><path d="M42 35c-2 0-4-1-6-3l1-2h0c0-2 1-5 5-5 2 0 5 2 5 5 0 2-3 5-5 5zm0-15c-5 0-9 3-10 8-2-4-4-8-5-11h-5v13c0 2-2 5-4 5-3 0-5-3-5-5V17H8v13c0 5 4 10 10 10 5 0 9-5 9-10v-2c1 2 2 4 4 6l-3 14h5l2-10c2 1 4 2 7 2 5 0 10-5 10-10 0-6-5-10-10-10"/></svg>
              </a>
            </div>

            </div>
            
        </main>
        <div className={styles.scrollDownBox}>
          <center className={styles.bottomIndent}>Check out some of my work!</center>
          <center>  
            <Image atl="A ciruclar photo of me" src="/arrow.svg" alt="Scroll down!" width={72} height={16} />
          </center>
        </div>
        </section>
        <section id="myWork">
          <div className={styles.projects}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <BlogItem title="TechDetect" link="https://github.com/willv678/TechDetect" color = "#06B002" description="OpenCV powered python facial detection attendance manager designed with the classroom in mind. Developed originally during a summer internship at the Georgia Tech Research Institute" imgLink = "techdetectbanner.png"/>
            <BlogItem title="WADaily Mobile" link="https://github.com/willv678/WADaily-Mobile" color = "#D8575C" description="A React-Native mobile app designed for WADaily, an all-in-one school assistant that displays class schedules, lunch menus, events, and more on the go!" imgLink = "wadailymobilebanner.png"/>
          </div>

          <p className={styles.underConstruction}>Site still in development - more projects and info pages are on the way!</p>

        </section>
        
      </div>
    </div>
  )
}