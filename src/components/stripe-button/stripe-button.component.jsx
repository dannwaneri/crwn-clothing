import StripeCheckout from "react-stripe-checkout";



const StripeCheckoutButton = ({price}) => {
const priceForStripe = price * 100;
const publishableKey = 'pk_test_51JiooxEEX8UpP5HHLq6ZbjJ7KKtSSQQbZInmMmpTEvAKcIDDwNGHDbsgRr2ijJRV4uBrYF3tnmr1UHBB1ew4nLGa00RpQUv6Jz'

const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;