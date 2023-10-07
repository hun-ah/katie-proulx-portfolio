import styles from "./TLDR.module.css";
import Card from "./cards/card";

const TLDR = ({ project }) => {
  const { tldrCards } = project;

  return (
    <section className={`${styles.TLDR} projectInnerContainer`}>
      <div className={styles.titleText}>
        <h3 className={`${styles.outcomes} overline`}>OUTCOMES</h3>
        <h3 className="headingBold">TLDR;</h3>
      </div>
      <ul className={styles.cardContainer}>
        {tldrCards.map((card) => (
          <Card key={card.id} icon={card.icon} text={card.text} />
        ))}
      </ul>
      <p className="paragraphLarge">{project.tldrBlurb}</p>
    </section>
  );
};

export default TLDR;
