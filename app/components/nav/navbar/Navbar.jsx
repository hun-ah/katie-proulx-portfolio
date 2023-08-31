import styles from './navbar.module.css';
import Image from 'next/image';
import Hamburger from '../hamburger/Hamburger';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <Image
        src='/logo.svg'
        alt='Katie Proulx, Product Designer'
        width={201}
        height={12}
      />
      <Hamburger />
    </header>
  );
};

export default Navbar;
