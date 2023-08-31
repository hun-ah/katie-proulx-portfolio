'use client';
import styles from './mobilemenu.module.css';
import { useEffect } from 'react';
import { useAppContext as MenuContext } from '../../contexts/MenuContext';

const MobileMenu = () => {
  const { isOpen } = MenuContext();
  const showMenu = isOpen && `${styles.fadeIn}`;

  useEffect(() => {
    // prevent scroll when mobile nav is open
    document.body.style.overflow = isOpen && 'hidden';

    return () => {
      // restore default body overflow on unmount
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={`${styles.container} ${isOpen ? showMenu : ''}`}></nav>
  );
};

export default MobileMenu;
