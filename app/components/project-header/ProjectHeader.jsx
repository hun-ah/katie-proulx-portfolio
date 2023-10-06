"use client";
import styles from "./project-header.module.css";
import ProjectDetail from "./project-details/ProjectDetail";

const ProjectHeader = ({ project }) => {
  const titles = [
    { icon: "/user-circle.svg", heading: "Client" },
    { icon: "/briefcase.svg", heading: "Industry" },
    { icon: "/user-circle.svg", heading: "My role" },
    { icon: "/calendar.svg", heading: "Duration" },
  ];

  const values = Object.values(project);

  return (
    <header
      className={`${styles.container} projectInnerContainer customAnimation`}
    >
      <span className="paragraphRegular">{project.client}</span>
      <h1 className="headingBoldLarge">{project.title}</h1>
      <p className="paragraphLarge">{project.description}</p>
      <ul className={styles.projectDetails}>
        {titles.map((title, index) => (
          <ProjectDetail
            key={title.heading}
            title={title.heading}
            icon={title.icon}
            text={values[index]}
          />
        ))}
      </ul>
    </header>
  );
};

export default ProjectHeader;
