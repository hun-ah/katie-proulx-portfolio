import styles from './project.module.css';
import Image from 'next/image';

const Project = ({ company, title, img }) => {
  return (
    <li className={styles.container}>
      <Image
        alt='headshot of Katie with her hand on her face, looking away from the camera'
        className={styles.projectImage}
        height={300}
        width={452}
        src={img}
      />
      <div className={styles.textContainer}>
        <h2 className={`${styles.company} paragraphRegular`}>{company}</h2>
        <h3 className={`${styles.title} headingBold`}>{title}</h3>
      </div>
    </li>
  );
};

export default Project;
