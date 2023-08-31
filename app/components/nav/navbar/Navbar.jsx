import styles from './navbar.module.css';
import Image from 'next/image';
import Hamburger from '../hamburger/Hamburger';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <section className={styles.section}>
        <Image
          src='/logo.svg'
          alt='Katie Proulx, Product Designer'
          width={170}
          height={12}
        />
        <Hamburger />
      </section>
    </header>
  );
};

export default Navbar;
