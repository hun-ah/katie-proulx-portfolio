import styles from "./TLDR.module.css";
import Card from "./cards/card";
import Image from "next/image";

const TLDR = ({ project }) => {
  const projectInfo = project.project;

  let cardClass;
  switch (projectInfo.client) {
    case "Bevalix":
      cardClass = styles.bevalixCards;
      break;
    case "theScore | Bet":
      cardClass = styles.theScoreCards;
      break;
    // need to fill in project 3
  }

  return (
    <section className={`${styles.TLDR} projectInnerContainer`}>
      <div className={styles.titleText}>
        <h3 className="overline">{projectInfo.tldrTitle}</h3>
        <h3 className="headingBold">TLDR;</h3>
      </div>
      <ul className={`${cardClass} ${styles.mobileCards}`}>
        {projectInfo.tldrCards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            paragraph={card.paragraph}
          />
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
