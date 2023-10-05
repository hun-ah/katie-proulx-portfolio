import styles from "./connect.module.css";

const Connect = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.speechBubble}>💬</div>
        <p className="paragraphLargeBold">
          Want to connect about an opportunity? Perhaps just a casual chat? Or,
          maybe you need a goalie for your beer league? <br />
          <a
            href="mailto:kdotproulx@gmail.com"
            className={`paragraphLargeBold ${styles.contact}`}
          >
            Send me an email.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Connect;
