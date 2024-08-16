import React, { useEffect, useState } from 'react';
import styles from './Checkout.module.css';
import { LoadingIcon } from './Icons';
import { getProducts } from './dataService';

interface Product {
  id: number;
  name: string;
  price: number;
  availableCount: number;
  orderedQuantity: number;
}

const ProductRow: React.FC<{
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity: number;
  total: number;
  onAdd: () => void;
  onRemove: () => void;
}> = ({ id, name, availableCount, price, orderedQuantity, total, onAdd, onRemove }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price.toFixed(2)}</td>
      <td>{orderedQuantity}</td>   
      <td>${total.toFixed(2)}</td>
      <td>
        <button 
          className={styles.actionButton} 
          onClick={onAdd} 
          disabled={orderedQuantity >= availableCount}
        >
          +
        </button>
        <button 
          className={styles.actionButton} 
          onClick={onRemove} 
          disabled={orderedQuantity <= 0}
        >
          -
        </button>
      </td>
    </tr>    
  );
}

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts().then((data) => {
      const productsWithQuantity = data.map(product => ({
        ...product,
        orderedQuantity: 0,
      }));
      setProducts(productsWithQuantity);
      setLoading(false);
    });
  }, []);

  const handleAdd = (id: number) => {
    setProducts(products =>
      products.map(product => 
        product.id === id 
        ? { ...product, orderedQuantity: product.orderedQuantity + 1 } 
        : product
      )
    );
  };

  const handleRemove = (id: number) => {
    setProducts(products =>
      products.map(product => 
        product.id === id 
        ? { ...product, orderedQuantity: product.orderedQuantity - 1 } 
        : product
      )
    );
  };

  const totalAmount = products.reduce((total, product) => 
    total + product.orderedQuantity * product.price, 
    0
  );

  const discount = totalAmount > 1000 ? totalAmount * 0.10 : 0;
  const finalAmount = totalAmount - discount;

  return (
    <div>
      <header className={styles.header}>        
        <h1>Electro World</h1>        
      </header>
      <main>
        {loading ? <LoadingIcon /> : null}
        {!loading && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th># Available</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <ProductRow 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  availableCount={product.availableCount}
                  price={product.price}
                  orderedQuantity={product.orderedQuantity}
                  total={product.orderedQuantity * product.price}
                  onAdd={() => handleAdd(product.id)}
                  onRemove={() => handleRemove(product.id)}
                />
              ))}
            </tbody>
          </table>
        )}
        <h2>Order summary</h2>
        {discount > 0 && <p>Discount: ${discount.toFixed(2)}</p>}
        <p>Total: ${finalAmount.toFixed(2)}</p>       
      </main>
    </div>
  );
};

export default Checkout;
