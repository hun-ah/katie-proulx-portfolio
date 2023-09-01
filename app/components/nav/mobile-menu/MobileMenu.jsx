'use client';
import styles from './mobilemenu.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { useAppContext as MenuContext } from '../../contexts/MenuContext';

const MobileMenu = () => {
  const { isOpen, setIsOpen } = MenuContext();
  const showMenu = isOpen && `${styles.fadeIn}`;
  const menuItems = [
    { name: 'Project Name1' },
    { name: 'Project Name2' },
    { name: 'Project Name3' },
    { id: 'about', name: 'About' },
    { id: 'close', name: 'Contact' },
    { id: 'external', name: 'Linkedin' },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToTarget = () => {
    const targetSection = document.getElementById('about');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        {menuItems.map((item) =>
          item.id == 'external' ? (
            <li className={`${styles.menuItem} headingBold`} key={item.name}>
              <a
                href='https://www.linkedin.com/in/katie-proulx-46080416/'
                target='_blank'
              >
                {item.name}
              </a>
            </li>
          ) : item.id == 'close' ? (
            <li
              className={`${styles.menuItem} headingBold`}
              key={item.name}
              onClick={closeMenu}
            >
              {item.name}
            </li>
          ) : (
            <li
              className={`${styles.menuItem} headingBold`}
              key={item.name}
              onClick={() => {
                closeMenu();
                item.id == 'about' && scrollToTarget();
              }}
            >
              <Link href='/'>{item.name}</Link>
            </li>
          )
        )}
      </menu>
    </nav>
  );
};

export default MobileMenu;
