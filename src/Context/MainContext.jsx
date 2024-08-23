import React, { createContext, useState } from "react";

export const Context = createContext();
function MainContext({ children }) {
  const [wishList, setWishList] = useState([]);
  const [Cart, setCart] = useState([]);
  let Data = { wishList, setWishList, Cart, setCart };
  return <Context.Provider value={Data}>{children}</Context.Provider>;
}

export default MainContext;
