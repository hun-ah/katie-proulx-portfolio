'use client';
import styles from './hamburger.module.css';
import { useAppContext as MenuContext } from '../../contexts/MenuContext';

const Hamburger = () => {
  const { isOpen, setIsOpen } = MenuContext();

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={styles.navBtn} onClick={handleMenuClick}>
      <div className={`${styles.menuContainer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuLine}></div>
        <div className={styles.menuLine}></div>
      </div>
    </button>
  );
};

export default Hamburger;
