import styles from "./content.module.css";

const ProjectContent = ({ title, p1, p2, mvpBullets }) => {
  // render paragraph2 and split at new line if applicable
  const textLines =
    typeof p2 == "string"
      ? p2.split("\n").map((line, index) => (
          <p key={index} className="paragraphLarge">
            {line}
          </p>
        ))
      : null;

  return (
    <section className={styles.container}>
      <h5 className="overline">{title}</h5>
      <p className="headingBold">{p1}</p>
      {textLines}
      <ul className={`paragraphLarge ${styles.listContainer}`}>
        {mvpBullets &&
          mvpBullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>
    </section>
  );
};

export default ProjectContent;
