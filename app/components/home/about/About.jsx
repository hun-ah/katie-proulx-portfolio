import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <h4 className='headingBold'>about</h4>
        <p className='paragraphRegular'>
          Product designer with 10+ years of experience. I am a thoughtful,
          meticulous designer who strives to make users happy–because when users
          are happy, businesses are too.
        </p>
        <p className='paragraphRegular'>
          Product designer with 10+ years of experience. I am a thoughtful,
          meticulous designer who strives to make users happy–because when users
          are happy, businesses are too.
        </p>
      </div>
    </section>
  );
};

export default About;
