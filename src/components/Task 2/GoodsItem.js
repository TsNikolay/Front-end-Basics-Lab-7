import React from "react";
import styles from "./GoodsItem.module.css";

const GoodsItem = (props) => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={props.imgSrc} alt="" />
      </div>
      <div className={styles.text}>
        <h2>{props.title}</h2>
        <h3>Ціна: {props.price}</h3>
      </div>
    </div>
  );
};

export default GoodsItem;
