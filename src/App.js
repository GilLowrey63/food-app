import React, { useState } from "react";

import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;

//I am using useState here since this is where I want to control what modules are visible and which are not
//Adding context through CartProvider. Logic written in another component to keep this one lean
//Context not used for showing and hiding cart for practice, but I am also only passing props up and down
//a couple levels, not ideal, but ok, but it also lets me keep my modal more flexible. If I used context
//for clicking on the background to clear the model, it wouldn't be easily reusable. Not a big deal for
//this small app, but a good practice to keep in mind.
