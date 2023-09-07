'use client';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from '../hamburger/Hamburger';
import { useAppContext as ModalContext } from '@/app/components/contexts/ModalContext';

const Navbar = () => {
  const { setOpenContactModal } = ModalContext();

  const openModal = () => {
    setOpenContactModal(true);
  };

  const closeModal = () => {
    setOpenContactModal(false);
  };

  const scrollToTarget = (target) => {
    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navlinks = [{ name: 'work' }, { name: 'about' }, { name: 'contact' }];

  return (
    <header className={styles.container}>
      <section className={styles.section}>
        <Link href='/' onClick={closeModal}>
          <Image
            src='/logo.svg'
            alt='Katie Proulx, Product Designer'
            width={170}
            height={12}
          />
        </Link>
        <ul className={styles.navlinks}>
          {navlinks.map((navlink) => (
            <li
              key={navlink.name}
              className={`${styles.navlink} paragraphRegular`}
              onClick={() => {
                navlink.name == 'contact'
                  ? openModal()
                  : scrollToTarget(navlink.name);
              }}
            >
              {navlink.name}
            </li>
          ))}
        </ul>
        <Hamburger />
      </section>
    </header>
  );
};

export default Navbar;
