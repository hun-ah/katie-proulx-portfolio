import styles from './numberedcard.module.css';

const NumberedCard = ({ number, text }) => {
  return (
    <li className={styles.container}>
      <div className={styles.circle}>{number}</div>
      <p className='paragraphLarge'>{text}</p>
    </li>
  );
};

export default NumberedCard;
