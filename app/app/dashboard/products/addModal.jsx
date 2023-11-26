import React, { useState } from "react";

const AddModal = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(0);
  const [scentCategory, setScentCategory] = useState("");
  const [supplier, setSupplier] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleScentCategoryChange = (e) => {
    setScentCategory(e.target.value);
  };

  const handleSupplierChange = (e) => {
    setSupplier(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      name,
      price,
      quantity,
      scentCategory,
      reorderThreshold: 5,
      supplier,
    };

    await fetch(`/api/candles`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    setName("");
    setPrice(0.0);
    setQuantity(0);
    setScentCategory("");
    setSupplier("");
  };

  return (
    <form
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "10px",
        border: "1px solid #ccc",
      }}
      onSubmit={handleSubmit}
    >
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        Add a New Candle
      </h2>

      <label style={{ display: "block", margin: "10px 0", textAlign: "left" }}>
        Name:
        <input
          type="text"
          name="name"
          style={{ marginLeft: "10px" }}
          value={name}
          onChange={handleNameChange}
          placeholder={name}
        />
      </label>

      <label style={{ display: "block", margin: "10px 0", textAlign: "left" }}>
        Price:
        <input
          type="number"
          step=".01"
          name="price"
          style={{ marginLeft: "10px" }}
          value={price}
          onChange={handlePriceChange}
          placeholder={price}
        />
      </label>

      <label style={{ display: "block", margin: "10px 0", textAlign: "left" }}>
        Quantity:
        <input
          type="number"
          name="quantity"
          style={{ marginLeft: "10px" }}
          value={quantity}
          onChange={handleQuantityChange}
          placeholder={quantity}
        />
      </label>

      <label style={{ display: "block", margin: "10px 0", textAlign: "left" }}>
        Scent Category:
        <input
          type="text"
          name="scent"
          style={{ marginLeft: "10px" }}
          value={scentCategory}
          onChange={handleScentCategoryChange}
          placeholder={scentCategory}
        />
      </label>

      <label style={{ display: "block", margin: "10px 0", textAlign: "left" }}>
        Supplier:
        <select
          name="Supplier"
          value={supplier}
          onChange={handleSupplierChange}
        >
          <option value="CH158">Candle Haven</option>
          <option value="KD889">Kindle</option>
          <option value="RS845">Radiant Scents</option>
          <option value="SF321">Scentify</option>
        </select>
      </label>

      <input
        type="submit"
        value="Submit"
        style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}
      />
    </form>
  );
};

export default AddModal;
