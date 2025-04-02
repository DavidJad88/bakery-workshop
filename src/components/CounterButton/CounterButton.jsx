import React from "react";
import styles from "./CounterButton.module.css";

const CounterButton = ({ itemQuantity, addItemToCart }) => {
  return (
    <div className={styles.addToCartButtonActive}>
      <button className={styles.addToCartDecrement}>-</button>
      <span>{itemQuantity}</span>
      <button className={styles.addToCartIncrement} onClick={addItemToCart}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
