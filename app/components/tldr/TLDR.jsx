import styles from "./TLDR.module.css";
import Card from "./cards/card";
import Image from "next/image";

const TLDR = ({ project }) => {
  const projectInfo = project.project;

  return (
    <section className={`${styles.TLDR} projectInnerContainer`}>
      <div className={styles.titleText}>
        <h3 className={`${styles.outcomes} overline`}>OUTCOMES</h3>
        <h3 className="headingBold">TLDR;</h3>
      </div>
      <ul className={styles.cardContainer}>
        {projectInfo.tldrCards.map((card) => (
          <Card key={card.id} icon={card.icon} text={card.text} />
        ))}
      </ul>
      <p className="paragraphLarge">{projectInfo.tldrBlurb}</p>
      <Image
        alt={project.alt}
        height={1000}
        width={800}
        src={projectInfo.secondaryImg}
        className={`heightAuto ${styles.img}`}
        unoptimized={true}
      />
    </section>
  );
};

export default TLDR;
