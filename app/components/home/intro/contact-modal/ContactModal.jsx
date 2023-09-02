'use client';
import styles from './modal.module.css';
import Image from 'next/image';
import { useAppContext as ModalContext } from '@/app/components/contexts/ModalContext';

const ContactModal = () => {
  const { openContactModal, setOpenContactModal } = ModalContext();
  const showModal = openContactModal && `${styles.fadeIn}`;

  const closeModal = () => {
    setOpenContactModal(false);
  };

  return (
    <div className={`${styles.container} ${openContactModal ? showModal : ''}`}>
      <div className={styles.modal}>
        <a href='mailto:kdotproulx@gmail.com'>kdotproulx@gmail.com</a>
        <div className={styles.btnContainer}>
          <button
            className={`${styles.btn} paragraphRegular`}
            onClick={closeModal}
          >
            <Image
              alt='close icon'
              height={16}
              width={16}
              src='close.svg'
              className={styles.icon}
            />
            close
          </button>
          <button className={`${styles.btn} paragraphRegular`}>
            <Image
              alt='copy icon'
              height={16}
              width={16}
              src='copy.svg'
              className={styles.icon}
            />
            copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
