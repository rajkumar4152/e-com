import React from 'react';
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_OvFVwse6NDf0m76IJuH1qjyV00sySOQLB5';
     const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='Crwn Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
 
}


export default StripeCheckoutButton;