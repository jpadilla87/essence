import React, { useState } from 'react';
import Image from 'next/image';
import Styles from './styles.module.css';
import ProductModal from './productModal';
import { fetcher } from 'helpers/api';
import useSWR from 'swr';

const ProductCard = ({ id }) => {
  const { data, error, isLoading } = useSWR(`/api/candles?id=${id}`, fetcher);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (error) return 'An error has occurred!';
  if (isLoading) return 'Loading...';

  const { candle_id, candle_name, quantity_in_stock, price, scent_category } = data;

  return (
    <div>
      <Image src={`/images/${candle_id}.png`} alt="Candle Shot" width={150} height={150} />
      <p>
        <b>{candle_name}</b>
      </p>
      <div className={Styles.bottomButtons}>
        <button className={Styles.editButton} onClick={openModal}>
          Edit
        </button>
        <button className={Styles.deleteButton}>Delete</button>
      </div>

      {isModalOpen && (
        <ProductModal
          product={{
            // Pass the product details
            id: candle_id,
            name: candle_name,
            price,
            quantity: quantity_in_stock,
            scentCategory: scent_category,
          }}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProductCard;
