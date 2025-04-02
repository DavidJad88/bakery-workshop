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

  const subtractItemFromCart = () => {
    setCartContent((prev) => {
      // find existing item
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.menuItemNum === item.id
      );

      //if nonexisting, return same reference
      if (itemIndex === -1) return prev;

      //clone the specific item
      const updatedItem = { ...prev[itemIndex], qty: prev[itemIndex].qty - 1 };

      //create new cart array
      const updatedCart = prev.map((item, i) =>
        i === itemIndex ? updatedItem : item
      );

      // filter out items where qty is 0
      return updatedItem.qty === 0
        ? updatedCart.filter((_, i) => i !== itemIndex)
        : updatedCart;
    });
  };

  return (
    <div className={styles.menuItem}>
      <img src={item.imageUrl} />
      {itemQuantity || addToCartButtonActive === item.id ? (
        <CounterButton
          itemQuantity={itemQuantity}
          addItemToCart={addItemToCart}
          subtractItemFromCart={subtractItemFromCart}
        />
      ) : (
        <button onClick={() => setAddToCartButtonActive(item.id)}>
          Add to cart
        </button>
      )}

      <div className={styles.itemCategory}>{item.category}</div>
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.itemPrice}>{item.price.toFixed(2)}</div>
    </div>
  );
};

export default MenuItem;
