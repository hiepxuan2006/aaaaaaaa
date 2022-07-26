import { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acount from './Component/Acount';
import { Cart } from './Component/Cart';
import { DataProvider } from './Component/DataProvider';
import Notify from './Component/Notify/Notify';
import SwitchMode from './Component/SwitchMode';
import { Home } from './Layout';

import { publicRoute } from './Route';
export const ThemeContext = createContext();

function App() {
   return (
      // <DataProvider>
      <Router>
         <Notify />
         <div className="app">
            <Routes>
               {publicRoute.map((route, index) => {
                  const Page = route.component;
                  let Layout = Home;
                  if (route.layout) {
                     Layout = route.layout;
                  }
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout data={route.props}>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
         <SwitchMode />
         <Acount />
         <Cart />
      </Router>
      // </DataProvider>
   );
}

export default App;
