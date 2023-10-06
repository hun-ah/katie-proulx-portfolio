import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ icon, text }) => {
  return (
    <li className={styles.card}>
      <Image alt="" height={40} width={40} src={icon} />
      <h4 className="headingBold">{text}</h4>
    </li>
  );
};

export default Card;
