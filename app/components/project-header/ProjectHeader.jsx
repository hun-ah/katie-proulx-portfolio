"use client";
import styles from "./project-header.module.css";
import ProjectDetail from "./project-details/ProjectDetail";
import { projectDetails } from "@/app/data/projectDetails";
import { usePathname } from "next/navigation";

const ProjectHeader = () => {
  const pathname = usePathname();
  const path = pathname.split("/").slice(-1).toString();

  const titles = [
    { icon: "/user-circle.svg", heading: "Client" },
    { icon: "/briefcase.svg", heading: "Industry" },
    { icon: "/user-circle.svg", heading: "My role" },
    { icon: "/calendar.svg", heading: "Duration" },
  ];

  let project;
  switch (path) {
    case "theScore":
      project = projectDetails[0];
      break;
    case "project-2":
      project = projectDetails[1];
      break;
    case "project-3":
      project = projectDetails[2];
  }

  const values = Object.values(project);

  return (
    <header className={`${styles.container} customAnimation`}>
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
