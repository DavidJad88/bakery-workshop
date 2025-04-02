import React from "react";
import styles from "./MenuItem.module.css";
import CounterButton from "../CounterButton/CounterButton";

const MenuItem = ({
  item,
  cartContent,
  setCartContent,
  addToCartButtonActive,
  setAddToCartButtonActive,
  itemQuantity,
}) => {
  const addItemToCart = () => {
    setCartContent((prev) => {
      // find existing item
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.menuItemNum === item.id
      );

      //Add item if non-existign
      if (itemIndex === -1) {
        return [...prev, { menuItemNum: item.id, qty: 1 }];
      }

      //Add item if existing
      const updatedCart = [...prev];
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        qty: updatedCart[itemIndex].qty + 1,
      };
      return updatedCart;
    });
  };
  return (
    <div className={styles.menuItem}>
      <img src={item.imageUrl} />
      {itemQuantity || addToCartButtonActive === item.id ? (
        <CounterButton
          itemQuantity={itemQuantity}
          addItemToCart={addItemToCart}
        />
      ) : (
        <button onClick={() => setAddToCartButtonActive(item.id)}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default MenuItem;
