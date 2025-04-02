import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [cartContent, setcartContent] = useState();
  return (
    <>
      <section className="listWrapper">
        <MenuList />
      </section>

      <ShoppingCart />
    </>
  );
}

export default App;
