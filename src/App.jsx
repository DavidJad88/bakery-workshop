import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [addToCartButtonActive, setaddToCartButtonActive] = useState(null);
  const [cartContent, setcartContent] = useState([]);
  return (
    <>
      <section className="listWrapper">
        <MenuList
          cartContent={cartContent}
          setCartContent={setcartContent}
          addToCartButtonActive={addToCartButtonActive}
          setAddToCartButtonActive={setaddToCartButtonActive}
        />
      </section>

      <ShoppingCart />
    </>
  );
}

export default App;
