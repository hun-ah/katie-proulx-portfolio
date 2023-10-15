import styles from './about.module.css';
import Image from 'next/image';
import cardInfo from '../data/about';
import Card from '../components/tldr/about-tldr/Card';
import Connect from '../components/home/connect/Connect';

const About = () => {
  const firstRowData = cardInfo.slice(0, 4);
  const secondRowData = cardInfo.slice(4, 7);

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headingContainer}>
            <h1 className='headingBold'>
              Hey! ✌️I’m Katie. I’ve been creating art for 30 years, and
              designing websites & apps for 10. Currently, I am working as a
              Product Designer in Toronto, Canada.
            </h1>
            <h2 className='paragraphRegular'>
              I love creating digital products that are beautiful, minimal and
              functional - from individual components to entire applications and
              websites, there isn’t a design challenge I am not excited for.
            </h2>
          </div>
          <Image
            alt='headshot of Katie against a brick wall'
            height={225}
            width={225}
            src='/about/headshot.png'
            priority
          />
        </header>
        <section className={styles.tldr}>
          <h3 className='overline'>TLDR;</h3>
          <ul className={styles.cardContainer}>
            {firstRowData.map((card) => (
              <Card
                key={card.id}
                icon={card.icon}
                text={card.text}
                alt={card.alt}
              />
            ))}
          </ul>
          <ul className={styles.cardContainer}>
            {secondRowData.map((card) => (
              <Card
                key={card.id}
                icon={card.icon}
                text={card.text}
                alt={card.alt}
              />
            ))}
          </ul>
        </section>
      </div>
      <Connect />
    </>
  );
};

export default About;
