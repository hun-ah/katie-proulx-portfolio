'use client';
import styles from './page.module.css';
import { useEffect } from 'react';
import Connect from './components/home/connect/Connect';
import Intro from './components/home/intro/Intro';
import Projects from './components/home/projects/Projects';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <div className={styles.container}>
      <Intro />
      <Projects />
      <Connect />
    </div>
  );
};

export default HomePage;
