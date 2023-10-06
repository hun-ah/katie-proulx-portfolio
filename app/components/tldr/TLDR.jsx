import styles from "./TLDR.module.css";

const TLDR = () => {
  return (
    <section className={`${styles.TLDR} projectInnerContainer`}>
      <h3 className={`${styles.outcomes} overline`}>OUTCOMES</h3>
      <p className="headingBold">TLDR;</p>
    </section>
  );
};

export default TLDR;
