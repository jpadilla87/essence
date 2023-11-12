"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "components/contexts";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { customerSignIn } = useContext(UserContext);
  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // admin
    if (email === "admin@essence.com" && password === "PasswordA123") {
      customerSignIn("", "", "", "admin@essence.com", "PasswordA123", true);
      router.push("/shop");
    }

    // customer
    else if (email === "johnsmith@gmail.com" && password === "Password1") {
      customerSignIn("", "", "", "johnsmith@gmail.com", "Password1", false);
      router.push("/shop");
    } else {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
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
    width: "19em",
  },
  error: {
    color: "red",
  },
};
