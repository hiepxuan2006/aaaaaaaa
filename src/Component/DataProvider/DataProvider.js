// @flow
import * as React from 'react';
import { AcountService } from '~/service';
import { TOKEN_NAME } from '~/utils/Contant';

import * as httpRequest from '~/utils/httpRequest';

export const DataContext = React.createContext();
const dataCart = JSON.parse(localStorage.getItem('dataCart'));

export const DataProvider = (props) => {
   const [cart, setCart] = React.useState(dataCart ? dataCart : []);
   const [close, setCLose] = React.useState(false);
   const [showNavbar, setShowNavbar] = React.useState(false);
   const [theme, setTheme] = React.useState('lightTheme');
   const [showAcount, setShowAcount] = React.useState(false);
   const [user, setUser] = React.useState({});
   const [isLogin, setIsLogin] = React.useState(false);
   const [loading, setLoading] = React.useState(false);
   const tongleTheme = () => {
      setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme');
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
            if (type === 'plus') cart[index].quantity += 1;
            if (type === 'minus')
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
   const loadUser = async () => {
      if (localStorage[TOKEN_NAME]) {
         httpRequest.setAuthToken(localStorage[TOKEN_NAME]);
      }
      try {
         setLoading(true);
         const results = await AcountService.checkLogin();
         // console.log('kq', results.success);
         if (results.success) {
            setUser(results.user);
            setIsLogin(true);
            console.log(results);
         }
         setLoading(false);
      } catch (error) {
         setIsLogin(false);
         localStorage.removeItem(TOKEN_NAME);
         httpRequest.setAuthToken(null);
         setLoading(false);
      }
   };
   const logout = () => {
      setIsLogin(false);
      localStorage.removeItem(TOKEN_NAME);
   };
   React.useEffect(() => {
      loadUser();
   }, [localStorage[TOKEN_NAME]]);
   React.useEffect(() => {
      localStorage.setItem('dataCart', JSON.stringify(cart));
   }, [cart]);
   const value = {
      cart,
      user,
      loading,
      theme,
      isLogin,
      tongleTheme,
      addCart: addCart,
      addQuantityCart,
      deleteCartItem,
      close,
      setCLose,
      logout,
      showNavbar,
      setShowNavbar,
      showAcount,
      setShowAcount,
      setCart,
   };
   return (
      <DataContext.Provider value={value}>
         {props.children}
      </DataContext.Provider>
   );
};
