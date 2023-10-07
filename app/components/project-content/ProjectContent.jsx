import styles from "./content.module.css";

const ProjectContent = ({ title, p1, p2 }) => {
  return (
    <section className={styles.container}>
      <h5 className="overline">{title}</h5>
      <p className="headingBold">{p1}</p>
      <p className="paragraphLarge">{p2}</p>
    </section>
  );
};

export default ProjectContent;
