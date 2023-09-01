import styles from './page.module.css';
import About from './components/home/about/About';
import Intro from './components/home/intro/Intro';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Intro />
      <About />
    </div>
  );
};

export default HomePage;
