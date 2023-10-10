import Image from "next/image";
import Link from "next/link";
import styles from "./projectnav.module.css";
import { projects } from "@/app/data/projectDetails";

const ProjectNav = ({ path }) => {
  let project;

  switch (path) {
    case "theScore":
      project = projects[2];
      break;
    case "bevalix":
      project = projects[1];
      break;
    case "project-3":
      project = projects[0];
  }

  return (
    <nav className={`projectInnerContainer ${styles.container}`}>
      <Link href={project.href}>
        <div className={styles.overlay}>
          <Image
            alt={project.alt}
            src={project.img}
            height={100}
            width={100}
            unoptimized={true}
            className="imageBorderRadius heightAuto"
          />
        </div>
      </Link>
      <Link href={project.href} className={styles.text}>
        <span className="paragraphRegular">Next case study &gt;&gt;</span>
        <p className="headingBold">{project.title}</p>
      </Link>
    </nav>
  );
};

export default ProjectNav;
