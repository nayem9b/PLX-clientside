import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ checkout }) => {
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { price, _id } = checkout;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card, paymentIntent);
      // store payment info in the database
      const payment = {
        transactionId: paymentIntent.id,
        payer: user.email,
        paymentId: _id,
        status: "sold",
      };
      fetch(`http://localhost:5000/products/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setSuccess("Congrats! your payment completed");
          setTransactionId(paymentIntent.id);
          toast.success("Congrats! your payment completed");
          navigate("/dashboard/mypurchase");
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className='btn btn-sm mt-4 btn-primary'
          type='submit'
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>
      {success && (
        <div>
          <p className='text-green-500'>{success}</p>
          <p>
            Your transactionId:{" "}
            <span className='font-bold'>{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
