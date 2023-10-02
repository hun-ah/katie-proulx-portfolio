'use client';
import 'animate.css';
import styles from './layout.module.css';
import ProjectHeader from '../components/project-header/ProjectHeader';
import Image from 'next/image';
import { useEffect } from 'react';

const ProjectLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <main className={styles.container}>
      <ProjectHeader />
      <div
        className={`${styles.pageContent} animate__animated animate__fadeIn animate__fast`}
      >
        <Image
          alt=''
          height={0}
          width={852}
          src='/headshot.jpg'
          className='imageBorderRadius heightAuto'
          style={{ width: '100%' }}
        />
        {children}
      </div>
    </main>
  );
};

export default ProjectLayout;
