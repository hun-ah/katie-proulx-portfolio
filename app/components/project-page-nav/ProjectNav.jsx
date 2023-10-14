import Image from "next/image";
import styles from "./projectnav.module.css";
import { projects } from "@/app/data/projectDetails";
import { useRouter } from "next/navigation";

const ProjectNav = ({ path }) => {
  const router = useRouter();

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

  const handleLinkClick = () => {
    router.push(`${project.href}#next`);
  };

  return (
    <nav className={`projectInnerContainer ${styles.container}`}>
      <div className={styles.overlay} onClick={handleLinkClick}>
        <Image
          alt={project.alt}
          src={project.img}
          height={100}
          width={100}
          unoptimized={true}
          className="imageBorderRadius heightAuto"
          priority
        />
      </div>
      <div
        href={project.href}
        className={styles.text}
        onClick={handleLinkClick}
      >
        <span className="paragraphRegular">Next case study &gt;&gt;</span>
        <p className="headingBold">{project.title}</p>
      </div>
    </nav>
  );
};

export default ProjectNav;
