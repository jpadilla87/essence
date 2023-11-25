"use client";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShopContext } from "components/contexts";

export default function CheckoutPage() {
  const [address, setAddress] = useState("");
  const [cardInfo, setCardInfo] = useState("");
  const [error, setError] = useState("");
  const { cartItems, priceTotal, checkoutCart } = useContext(ShopContext);
  const [redirectToConfirmation, setRedirectToConfirmation] = useState(false);

  const router = useRouter();

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCardInfoChange = (event) => {
    setCardInfo(event.target.value);
  };

  useEffect(() => {
    if (redirectToConfirmation) {
      router.push("/confirmation");
    }
  }, [redirectToConfirmation]);

  const handleCheckout = async (event) => {
    event.preventDefault();

    // Validate input fields
    if (!address || !cardInfo) {
      setError("Please fill out all fields.");
      return;
    }

    // implement logic for checkout
    await checkoutCart();

    // Redirect to a confirmation page after successful checkout
    setRedirectToConfirmation(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Checkout</h1>
      <form style={styles.form} onSubmit={handleCheckout}>
        <div style={styles.formGroup}>
          <label htmlFor="address" style={styles.label}>
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="cardInfo" style={styles.label}>
            Card Information:
          </label>
          <input
            type="text"
            id="cardInfo"
            value={cardInfo}
            onChange={handleCardInfoChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <p>Items in Cart:</p>
          <ul>
            {Object.keys(cartItems).map((candleID) => (
              <li key={candleID}>
                {`Item: ${candleID}, Quantity: ${cartItems[candleID].amount}`}
              </li>
            ))}
          </ul>
        </div>
        <button type="submit" style={styles.button}>
          Place Order (${priceTotal.toFixed(2)})
        </button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  form: {
    width: "300px",
    maxWidth: "100%",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    width: "100%",
  },
  error: {
    color: "red",
  },
};
