'use client';
import styles from './connect.module.css';
import { useAppContext as ModalContext } from '@/app/components/contexts/ModalContext';

const Connect = () => {
  const { setOpenContactModal } = ModalContext();

  const openModal = () => {
    setOpenContactModal(true);
  };
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.speechBubble}>💬</div>
        <p className='paragraphLargeBold'>
          Want to connect about an opportunity? Perhaps just a casual chat? Or,
          maybe you need a goalie for your beer league? <br />
          <span
            onClick={openModal}
            className={`paragraphLargeBold ${styles.contact}`}
          >
            Send me an email.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Connect;
