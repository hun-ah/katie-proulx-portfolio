'use client';
import styles from './mobilemenu.module.css';
import { useEffect } from 'react';
import { useAppContext as MenuContext } from '../../contexts/MenuContext';

const MobileMenu = () => {
  const { isOpen } = MenuContext();
  const showMenu = isOpen && `${styles.fadeIn}`;
  const menuItems = [
    { name: 'Project Name' },
    { name: 'Project Name' },
    { name: 'Project Name' },
    { name: 'About' },
    { name: 'Contact' },
    { name: 'Linkedin' },
  ];

  useEffect(() => {
    // prevent scroll when mobile nav is open
    document.body.style.overflow = isOpen && 'hidden';

    return () => {
      // restore default body overflow on unmount
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={`${styles.container} ${isOpen ? showMenu : ''}`}>
      <menu className={styles.menu}>
        <li className={`${styles.menuTitle} paragraphRegular`}>Work</li>
        {menuItems.map((item) => (
          <li className={`${styles.menuItem} headingBold`} key={item.name}>
            {item.name}
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default MobileMenu;
