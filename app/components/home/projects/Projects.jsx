import styles from './projects.module.css';
import Project from './project/Project';

const Projects = () => {
  const projects = [
    {
      id: 1,
      company: 'company1',
      img: '/headshot.jpg',
      title: 'Building something something yes',
    },
    {
      id: 2,
      company: 'company2',
      img: '/headshot.jpg',
      title: 'Building something something yes',
    },
    {
      id: 3,
      company: 'company3',
      img: '/headshot.jpg',
      title: 'Building something something yes',
    },
  ];

  return (
    <section className={styles.container}>
      <ul className={styles.projectContainer}>
        {projects.map((project) => (
          <Project
            key={project.id}
            company={project.company}
            title={project.title}
            img={project.img}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
