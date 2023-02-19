import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NameTitle from '../components/NameTitle';
import AboutMe from '../components/AboutMe';
import TopBar from '../components/TopBar';
import CirclePhoto from '../components/CirclePhoto';
import GetInTouchMessage from '../components/GetInTouchMessage';
import SocialLinkSvg from '../components/SocialLinkSvg';
import ScrollDownBox from '../components/ScrollDownBox';
import BlogItem from '../components/BlogItem';

export default function Home() {
  return (
    <>
      <Head>
        <title>Will Varner</title>
        <meta
          name="description"
          content="Hi there! My name's Will, a student developer with a passion for all things tech. Check out my portoflio site to see everything I've been working on."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="home" />
      <TopBar />

      <main className={styles.main}>
        <div className={styles.aboutMeDiv}>
          <NameTitle />
          <AboutMe />
        </div>
        <div className={styles.visualDiv}>
          <CirclePhoto />
          <GetInTouchMessage />
          <SocialLinkSvg />
        </div>
      </main>

      <mobileMain className={styles.mobileMain}>
        <NameTitle />
        <CirclePhoto />
        <AboutMe />
        <SocialLinkSvg />
      </mobileMain>

      <ScrollDownBox />
      <projects id="projects">
        <BlogItem
          title="TechDetect"
          slug="techdetect"
          color="#06B002"
          description="OpenCV powered python facial detection attendance manager designed with the classroom in mind. Developed originally during a summer internship at the Georgia Tech Research Institute"
          imgLink="/images/techdetectbanner.png"
        />
        <BlogItem
          title="WADaily Mobile"
          slug="wadaily-mobile"
          color="#D8575C"
          description="A React-Native mobile app designed for WADaily, an all-in-one school assistant that displays class schedules, lunch menus, events, and more on the go!"
          imgLink="/images/wadailymobilebanner.png"
        />
      </projects>
    </>
  );
}
