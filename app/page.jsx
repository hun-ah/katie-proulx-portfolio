'use client';
import styles from './page.module.css';
import { useEffect } from 'react';
import About from './components/home/about/About';
import Intro from './components/home/intro/Intro';
import Projects from './components/home/projects/Projects';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <div className={styles.container}>
      <Intro />
      <Projects />
      <About />
    </div>
  );
};

export default HomePage;
