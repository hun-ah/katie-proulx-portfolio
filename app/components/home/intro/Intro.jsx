import styles from './intro.module.css';
import Image from 'next/image';
import Icon from './icon/Icon';
import { useAppContext as ModalContext } from '@/app/components/contexts/ModalContext';

const Intro = () => {
  const { setOpenContactModal } = ModalContext();

  const openModal = () => {
    setOpenContactModal(true);
  };

  return (
    <main className={`${styles.container} customAnimation`}>
      <Image
        alt='headshot of Katie with her hand on her face, looking away from the camera'
        className={styles.headshot}
        height={98}
        width={98}
        src='/headshot.jpg'
      />
      <div>
        <h1 className={`${styles.heading} headingBlack`}>katie proulx</h1>
        <ul className={styles.links}>
          <li className={`${styles.introLink} link`} onClick={openModal}>
            Contact
          </li>
          <li className={`${styles.introLink} link`}>
            <a
              href='https://www.linkedin.com/in/katie-proulx-46080416/'
              target='_blank'
            >
              Linkedin
              <Icon className={styles.externalLink} />
            </a>
          </li>
        </ul>
      </div>
      <p className='paragraphRegular'>
        Product designer with 10+ years of design experience. Thoughtful &
        meticulous. Obsessed with the details. Loses sleep over spacing. Always
        striving to strike a balance between delighting users and empowering
        businesses.
      </p>
    </main>
  );
};

export default Intro;
