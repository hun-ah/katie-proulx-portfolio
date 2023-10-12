import "animate.css";
import styles from "./projects.module.css";
import Project from "./project/Project";
import { projects } from "@/app/data/projectDetails";

const Projects = () => {
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
            alt={project.alt}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
