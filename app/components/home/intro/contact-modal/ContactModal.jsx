'use client';
import styles from './modal.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAppContext as ModalContext } from '@/app/components/contexts/ModalContext';

const ContactModal = () => {
  const { openContactModal, setOpenContactModal } = ModalContext();
  const showModal = openContactModal && `${styles.fadeIn}`;
  const [copyEmailSuccess, setEmailCopySuccess] = useState('');
  const email = 'kdotproulx@gmail.com';
  const showText = copyEmailSuccess ? copyEmailSuccess : 'kdotproulx@gmail.com';

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopySuccess('Copied!');
      setTimeout(() => {
        setEmailCopySuccess('');
      }, 700);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setEmailCopySuccess('Copy failed');
    }
  };

  const closeModal = () => {
    setOpenContactModal(false);
  };

  // prevent closeModal function propagating to the modal div itself
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    // prevent scroll when mobile nav is open
    document.body.style.overflow = openContactModal && 'hidden';

    return () => {
      // restore default body overflow on unmount
      document.body.style.overflow = '';
    };
  }, [openContactModal]);

  return (
    <div
      className={`${styles.container} ${openContactModal ? showModal : ''}`}
      onClick={closeModal}
    >
      <div className={styles.modal} onClick={stopPropagation}>
        <div className={styles.email}>
          {!copyEmailSuccess && (
            <Image
              alt='envelope icon'
              height={16}
              width={16}
              src='mail.svg'
              className={styles.icon}
            />
          )}
          <a
            href='mailto:kdotproulx@gmail.com'
            className={copyEmailSuccess && `${styles.noUnderline}`}
          >
            {showText}
          </a>
        </div>
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
          <button
            className={`${styles.btn} paragraphRegular`}
            onClick={handleCopyClick}
          >
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
