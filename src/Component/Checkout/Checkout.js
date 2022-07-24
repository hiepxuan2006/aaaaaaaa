import React from 'react';
import CheckoutLeft from './CheckoutLeft';
import CheckoutRight from './CheckoutRight';

function Checkout(props) {
   return (
      <div className="row">
         <div className="col l-7 m-7 c-12">
            <CheckoutLeft />
         </div>
         <div className="col l-5 m-5 c-0">
            <CheckoutRight />
         </div>
      </div>
   );
}

export default Checkout;
