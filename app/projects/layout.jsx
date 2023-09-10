import 'animate.css';
import styles from './layout.module.css';
import ProjectHeader from '../components/project-header/ProjectHeader';
import Image from 'next/image';

const ProjectLayout = ({ children }) => {
  return (
    <main className={styles.container}>
      <ProjectHeader />
      <div className={`animate__animated animate__fadeIn animate__fast`}>
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
