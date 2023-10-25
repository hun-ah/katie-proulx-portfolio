import styles from './downloadapp.module.css';
import Image from 'next/image';

const DownloadApp = () => {
  return (
    <section className={`imageBorderRadius ${styles.container}`}>
      <Image
        alt='theScore BET logo'
        height={25}
        width={140}
        src='/bevalix/icons/bevalix.svg'
      />
      <p className='overline uppercaseSecondary'>🚧 APP IN DEVELOPMENT</p>
    </section>
  );
};

export default DownloadApp;
