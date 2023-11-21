"use client";
import React from 'react';
import { useRouter } from "next/navigation";

const Dashboard = () => {

  const router = useRouter();
  
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  };

  const navigateToProducts = () => {
    // Use the router to navigate to the Products page
    router.push("/dashboard/products");
  };

  return (
    <div style={containerStyle}>
      <h1>Dashboard</h1>
      <div>
        {/* Add an onClick event to trigger navigation */}
        <button style={buttonStyle} onClick={navigateToProducts}>
          Products
        </button>
        <button style={buttonStyle}>Transactions</button>
        <button style={buttonStyle}>Queries</button>
        <button style={buttonStyle}>Reports</button>
      </div>
    </div>
  );
};

export default Dashboard;
