import styles from './project-detail.module.css';
import Image from 'next/image';

const ProjectDetail = ({ title, text, icon }) => {
  return (
    <li className={styles.container}>
      <Image alt='' height={24} width={24} src={icon} />
      <div className={styles.textContainer}>
        <h3 className='paragraphBold'>{title}</h3>
        <span className='paragraphRegular'>{text}</span>
      </div>
    </li>
  );
};

export default ProjectDetail;
