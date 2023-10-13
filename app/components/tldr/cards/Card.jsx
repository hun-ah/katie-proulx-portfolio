import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ icon, title, paragraph }) => {
  return (
    <li className={styles.card}>
      <Image alt="" height={40} width={40} src={icon} priority />
      <div className={styles.textContainer}>
        <h4 className="headingBold">{title}</h4>
        {paragraph && <p className="paragraphLarge">{paragraph}</p>}
      </div>
    </li>
  );
};

export default Card;
