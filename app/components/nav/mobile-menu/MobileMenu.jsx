'use client';
import styles from './mobilemenu.module.css';
import Link from 'next/link';
import { useEffect, useCallback } from 'react';
import { useAppContext as MenuContext } from '../../contexts/MenuContext';

const MobileMenu = () => {
  const { isOpen, setIsOpen } = MenuContext();
  const showMenu = isOpen && `${styles.fadeIn}`;
  const menuItems = [
    { id: 'page', name: 'Project Name1', href: '/' },
    { id: 'page', name: 'Project Name2', href: '/' },
    { id: 'page', name: 'Project Name3', href: '/' },
    { id: 'about', name: 'About' },
    { name: 'Contact' },
    { id: 'external', name: 'Linkedin' },
  ];

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

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

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        closeMenu();
      }
    });
  }, [closeMenu]);

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
          ) : item.id == 'page' ? (
            <li
              className={`${styles.menuItem} headingBold`}
              key={item.name}
              onClick={() => {
                closeMenu();
              }}
            >
              <Link href={`${item.href}`}>{item.name}</Link>
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
              {item.name}
            </li>
          )
        )}
      </menu>
    </nav>
  );
};

export default MobileMenu;
