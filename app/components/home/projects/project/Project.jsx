import styles from "./project.module.css";
import Image from "next/image";
import Link from "next/link";

const Project = ({ company, title, img, href, alt }) => {
  return (
    <li>
      <Link href={`${href}`} className={styles.container}>
        <Image
          alt={alt}
          height="0"
          width="0"
          src={img}
          unoptimized={true}
          style={{ width: "452px", height: "auto" }}
          priority
        />
        <div className={styles.textContainer}>
          <h2 className={`${styles.company} paragraphRegular`}>{company}</h2>
          <h3 className={`${styles.title} headingBold`}>{title}</h3>
        </div>
      </Link>
    </li>
  );
};

export default Project;
