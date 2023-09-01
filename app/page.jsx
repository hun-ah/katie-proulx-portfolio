import styles from './page.module.css';
import About from './components/home/about/About';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <About />
    </div>
  );
};

export default HomePage;
