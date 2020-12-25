import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo/logo";
import styles from "../../styles/main.module.scss";

export const BackToSearchButton = () => {
  const buttonLabel = "Поиск";
  return (
    <div className={styles.backToSearchButton}>
      <Logo />
      <Link to="/search">
        <button type="button" className={styles.backToSearchElement}>
          {buttonLabel.toUpperCase()}
        </button>
      </Link>
    </div>
  );
};
