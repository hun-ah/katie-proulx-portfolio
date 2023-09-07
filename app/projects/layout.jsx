import styles from './layout.module.css';
import ProjectHeader from '../components/project-header/ProjectHeader';

const ProjectLayout = ({ children }) => {
  return (
    <main className={styles.container}>
      <ProjectHeader />
      {children}
    </main>
  );
};

export default ProjectLayout;
