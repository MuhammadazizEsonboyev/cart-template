import React, { useState } from "react";
import Amazon from "./components/Amazon";
import Navbar from "./components/Navbar";
import Cart from "../src/components/Cart"

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, item]);
  }

  return (
    <>
      <React.Fragment>
        <Navbar size={cart.length} setShow={setShow} />
        {
          show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart}  />
        }
        
      </React.Fragment>

    </>
  );
}

export default App;
