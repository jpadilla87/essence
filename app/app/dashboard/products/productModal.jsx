import React, { useState } from 'react';

const ProductModal = ({ product, isOpen, onClose, onUpdateProduct }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [scentCategory, setScentCategory] = useState(product.scentCategory);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name,
      price,
      quantity,
      scentCategory,
    };

    await fetch(`/api/candles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder={name}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={price}
                onChange={handlePriceChange}
                placeholder={price}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Quantity</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder={quantity}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Scent Category</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={scentCategory}
                onChange={handleScentCategoryChange}
                placeholder={scentCategory}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-primary">
                Save
              </button>
            </div>
            <div className="control">
              <button className="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
