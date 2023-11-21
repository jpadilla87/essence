"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "components/contexts";

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
        backgroundColor: "orange",
        color: "white",
        padding: "0.5rem",
        fontSize: "1rem",
        cursor: "pointer",
        width: "107%",
    },
    error: {
        color: "red",
    },
};

export default function Page() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { UserRegister } = useContext(UserContext);
    const router = useRouter();

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const found = await UserRegister({        
            firstName,
            lastName,
            email,
            password   
        })

        if (found) {
            setError('')
        } else {
            setError('This account is registered. Please try another email.')
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Register</h1>
            <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
                    <label htmlFor="firstName" style={styles.label}>
                        First Name:
                    </label>
                    <input
                        type="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="lastName" style={styles.label}>
                        Last Name:
                    </label>
                    <input
                        type="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                        style={styles.input}
                    />
                </div>
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
                    Register
                </button>
            </form>
            {error && <p style={styles.error}>{error}</p>}
        </div>
    );
}
