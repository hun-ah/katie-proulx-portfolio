'use client';
import { useEffect } from 'react';
import styles from './layout.module.css';
import ProjectHeader from '../components/project-header/ProjectHeader';
import Image from 'next/image';

const ProjectLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={styles.container}>
      <ProjectHeader />
      <Image
        alt=''
        height={0}
        width={852}
        src='/headshot.jpg'
        className='imageBorderRadius heightAuto'
        style={{ width: '100%' }}
      />
      {children}
    </main>
  );
};

export default ProjectLayout;
