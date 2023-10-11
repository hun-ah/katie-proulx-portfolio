import styles from "./project-detail.module.css";
import Image from "next/image";

const ProjectDetail = ({ title, text, icon }) => {
  const textLines = text.split("\n").map((line, index) => (
    <span key={index} className="paragraphRegular">
      {line}
    </span>
  ));

  return (
    <li className={styles.container}>
      <Image alt="" height={24} width={24} src={icon} />
      <div className={styles.textContainer}>
        <h2 className="paragraphBold">{title}</h2>
        {textLines}
      </div>
    </li>
  );
};

export default ProjectDetail;
