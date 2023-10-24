import styles from './project.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ company, title, img, href, alt }) => {
  return (
    <li>
      <Link href={`${href}#page`} className={styles.container}>
        <Image
          alt={alt}
          height={0}
          width={452}
          src={img}
          unoptimized={true}
          style={{ height: 'auto' }}
          className='imageBorderRadius'
          priority
        />
        <div className={styles.textContainer}>
          <h2 className={`${styles.company} paragraphRegular`}>{company}</h2>
          <h3 className={`${styles.title} headingBold`}>{title}</h3>
        </div>
      </Link>
    </li>
  );
};

export default Project;
