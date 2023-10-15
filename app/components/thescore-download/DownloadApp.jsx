import styles from './downloadapp.module.css';
import Image from 'next/image';

const DownloadApp = () => {
  return (
    <section className={`imageBorderRadius ${styles.container}`}>
      <Image
        alt='theScore BET logo'
        height={20}
        width={143}
        src='/thescore/icons/scoreBET.svg'
      />
      <div className={styles.btnContainer}>
        <p className={`overline ${styles.text}`}>Download the app</p>
        <div>
          <a
            href='https://apps.apple.com/ca/app/thescore-bet-sports-betting/id1465992052'
            target='_blank'
          >
            <Image
              alt='download theScore BET on the app store'
              height={41}
              width={136}
              src='/thescore/icons/app-store.svg'
            />
          </a>
          <a
            href='https://play.google.com/store/apps/details?id=bet.thescore.android&hl=en_CA&gl=US&pli=1'
            target='_blank'
          >
            <Image
              alt='download theScore BET on google play'
              height={41}
              width={136}
              src='/thescore/icons/google-play.svg'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
