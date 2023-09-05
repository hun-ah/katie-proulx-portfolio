import styles from './projects.module.css';
import 'animate.css';
import Project from './project/Project';

const Projects = () => {
  const projects = [
    {
      id: 1,
      company: 'company1',
      img: '/headshot.jpg',
      title: 'Building something something yes',
      href: '/projects/project-1',
    },
    {
      id: 2,
      company: 'company2',
      img: '/headshot.jpg',
      title: 'Building something something yes',
      href: '/',
    },
    {
      id: 3,
      company: 'company3',
      img: '/headshot.jpg',
      title: 'Building something something yes',
      href: '/',
    },
  ];

  return (
    <section
      className={`${styles.container} animate__animated animate__fadeIn animate__fast`}
    >
      <ul className={styles.projectContainer}>
        {projects.map((project) => (
          <Project
            key={project.id}
            company={project.company}
            title={project.title}
            img={project.img}
            href={project.href}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
