// @flow
import * as React from "react";

export const DataContext = React.createContext();
const dataCart = JSON.parse(localStorage.getItem("dataCart"));

export const DataProvider = (props) => {
  const [cart, setCart] = React.useState(dataCart ? dataCart : []);
  const [close, setCLose] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [theme, setTheme] = React.useState("lightTheme");
  const [showAcount, setShowAcount] = React.useState(false);
  const tongleTheme = () => {
    setTheme(theme === "darkTheme" ? "lightTheme" : "darkTheme");
  };

  const addCart = (product, quantity) => {
    const check = cart.every((item) => {
      return item.product.id !== product.id;
    });
    if (check) {
      // product.quantity = quantity;
      cart.push({ product, quantity });
      setCart([...cart]);
    } else {
      cart.forEach((element, index) => {
        if (element.product.id === product.id) {
          cart[index].quantity += quantity;
        }
      });

      setCart([...cart]);
    }
    setCLose(true);
  };
  const addQuantityCart = (id, type) => {
    cart.forEach((element, index) => {
      if (element.product.id === id) {
        if (type === "plus") cart[index].quantity += 1;
        if (type === "minus")
          cart[index].quantity =
            cart[index].quantity > 1 ? cart[index].quantity - 1 : 1;
      }
    });
    setCart([...cart]);
  };
  const deleteCartItem = (id) => {
    const data = cart.filter((item) => item.product.id !== id);

    setCart(data);
  };

  React.useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);
  const value = {
    cart,
    theme,
    tongleTheme,
    addCart: addCart,
    addQuantityCart,
    deleteCartItem,
    close,
    setCLose,
    showNavbar,
    setShowNavbar,
    showAcount,
    setShowAcount,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
