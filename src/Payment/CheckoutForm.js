import { Button, CircularProgress, Container } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../Hooks/useAuth";


const CheckoutForm = (paymentMoney) => {
  console.log(paymentMoney);
  const {fees} = paymentMoney;
  const { user } = useAuth();
  const _id = 5;
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
 const [text, setText] = useState()
  // useEffect(() => {
  //   fetch("https://still-dusk-95591.herokuapp.com/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ fees}),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, [fees]);

  const handleSubmit =(e) => {
    e.preventDefault();
    setText("Full Payment Option comming soon");
    axios.delete(`https://still-dusk-95591.herokuapp.com/cartproductdelete/${user.email}`).then(res => {
      swal("Good job!", "cart product delete successfully", "success");
    }).catch(err=>console.log(err))
    // if (!stripe || !elements) {
    //   return;
    // }
    // const card = elements.getElement(CardElement);
    // if (card === null) {
    //   return;
    // }
    // setProcessing(true);
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card,
    // });

    // if (error) {
    //   setSuccess("");
    //   setError(error.message);
    // } else {
    //   setError("");
    //   console.log(paymentMethod);
    // }
    // //payment intent
    // const { paymentIntent, error: intenetError } =
    //   await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: card,
    //       billing_details: {
    //         email: user.email,
    //       },
    //     },
    //   });
    // if (intenetError) {
    //   setError(intenetError.message);
    //   setSuccess("");
    // } else {
    //   setError("");
    //   setSuccess("Your payment has been successful");
    //   console.log(paymentIntent);
    //   setProcessing(false);
    //   //save to db
    //   const payment = {
    //     amount: paymentIntent.amount,
    //     transaction: paymentIntent.client_secret.slice("_secret")[0],
    //     created: paymentIntent.created,
    //     last4: paymentMethod.card.last4,
    //   };
    //   const url = `https://still-dusk-95591.herokuapp.com/addtocart/${_id}`;
    //   fetch(url, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(payment),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));

    // }).catch(err => console.log(err))
};

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "white",
                "::placeholder": {
                  color: "white",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress />
        ) : (
          <Button
            type="submit"
            disabled={!stripe || success}
            sx={{ backgroundColor: "#F27D42", m: 1 }}
            variant="contained"
          >
            {text?text:"pay"}
          </Button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </Container>
  );
};

export default CheckoutForm;
