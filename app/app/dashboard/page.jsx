import React from 'react';

const Dashboard = () => {
  const buttonStyle = {
    backgroundColor: '#4CAF50', /* Green background color */
    border: 'none', /* Remove borders */
    color: 'white', /* White text */
    padding: '15px 32px', /* Some padding */
    textAlign: 'center', /* Center text */
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px', /* Set font size */
    margin: '4px 2px', /* Add some margin */
    cursor: 'pointer', /* Add a pointer cursor on hover */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh', // 100% of the viewport height
  };

  return (
    <div style={containerStyle}>
      <h1>Dashboard</h1>
      <div>
        <button style={buttonStyle}>Products</button>
        <button style={buttonStyle}>Transactions</button>
        <button style={buttonStyle}>Queries</button>
        <button style={buttonStyle}>Reports</button>
      </div>
    </div>
  );
};

export default Dashboard;
