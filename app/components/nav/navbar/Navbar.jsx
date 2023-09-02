import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from '../hamburger/Hamburger';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <section className={styles.section}>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='Katie Proulx, Product Designer'
            width={170}
            height={12}
          />
        </Link>
        <Hamburger />
      </section>
    </header>
  );
};

export default Navbar;
