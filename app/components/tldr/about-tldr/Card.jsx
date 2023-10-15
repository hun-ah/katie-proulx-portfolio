import styles from './card.module.css';
import Image from 'next/image';

const Card = ({ alt, icon, text }) => {
  return (
    <li className={styles.container}>
      <Image alt={alt} height={56} width={56} src={icon} />
      <h4 className='paragraphBold'>{text}</h4>
    </li>
  );
};

export default Card;
