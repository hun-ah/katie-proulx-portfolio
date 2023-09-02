'use client';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from '../hamburger/Hamburger';
import { useAppContext as ModalContext } from '@/app/components/contexts/ModalContext';

const Navbar = () => {
  const { setOpenContactModal } = ModalContext();

  const closeModal = () => {
    setOpenContactModal(false);
  };

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
        <Hamburger />
      </section>
    </header>
  );
};

export default Navbar;
