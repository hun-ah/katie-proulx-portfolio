import styles from "./TLDR.module.css";
import Card from "./cards/card";

const TLDR = ({ project }) => {
  const { tldrCards } = project;

  return (
    <section className={`${styles.TLDR} projectInnerContainer`}>
      <div className={styles.titleText}>
        <h3 className={`${styles.outcomes} overline`}>OUTCOMES</h3>
        <p className="headingBold">TLDR;</p>
      </div>
      <ul>
        {tldrCards.map((card) => (
          <Card key={card.id} icon={card.icon} text={card.text} />
        ))}
      </ul>
      <p className="paragraphRegular">{project.tldrBlurb}</p>
    </section>
  );
};

export default TLDR;
