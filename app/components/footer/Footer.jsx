'use client';
import styles from './footer.module.css';
import Image from 'next/image';
import { useAppContext as ModalContext } from '../contexts/ModalContext';

const Footer = () => {
  const { setOpenContactModal } = ModalContext();

  const openModal = () => {
    setOpenContactModal(true);
  };

  return (
    <footer className={styles.container}>
      <section className={styles.footer}>
        <span className='paragraphRegular'>&copy; 2023 Katie Proulx</span>
        <div className={styles.iconContainer}>
          <Image
            alt='mail logo'
            height={32}
            width={32}
            src='/footer-mail.svg'
            className={styles.icon}
            onClick={openModal}
          />
          <a
            href='https://www.linkedin.com/in/katie-proulx-46080416/'
            target='_blank'
          >
            <Image
              alt='LinkedIn logo'
              height={32}
              width={32}
              src='/linkedin.svg'
              className={styles.icon}
            />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
