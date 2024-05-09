import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_public_key');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        // Assume you have created a PaymentIntent on the server
        const result = await stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Jenny Rosen',
                },
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Payment successful');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default function StripeContainer() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}
