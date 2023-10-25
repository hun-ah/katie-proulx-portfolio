import styles from './content.module.css';
import Icon from '../../home/intro/icon/Icon';
import Image from 'next/image';

const ProjectContent = ({ heading, subheading, link, logo }) => {
  // render paragraph2 and split at new line if applicable
  const textLines =
    typeof subheading == 'string'
      ? subheading.split('\n').map((line, index) => (
          <p key={index} className='paragraphLarge'>
            {line}
          </p>
        ))
      : null;

  return (
    <section className={styles.container}>
      <div className='headingBold'>
        <h3>{heading}</h3>
      </div>
      {link && (
        <div className={styles.linkContainer}>
          <a href={`https://${link}`} target='_blank'>
            {link}
            <Icon />
          </a>
        </div>
      )}
      <div className={styles.textContainer}>
        {/* <p className='paragraphLarge'>{subheading}</p> */}
        {textLines}
        <p className='paragraphBold'>Client</p>
        <Image alt='' height={logo.height} width={logo.width} src={logo.path} />
      </div>
    </section>
  );
};

export default ProjectContent;
