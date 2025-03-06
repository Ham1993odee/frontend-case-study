'use client';

import React, { useContext } from 'react';
import { List, Button } from 'antd';
import { BasketContext, BasketItem, BasketContextType } from 'host/BasketContext';

const Basket = () => {
  const { basketItems, removeFromBasket } = useContext(BasketContext);
  
  const totalPrice = basketItems.reduce((sum: number, item: BasketItem) => 
    sum + item.price * item.quantity, 0);
  
  return (
    <div className="basket-container">
      <h2>Your Basket</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <>
          <List
            itemLayout="horizontal"
            dataSource={basketItems}
            renderItem={(item: BasketItem) => (
              <List.Item
                actions={[
                  <Button 
                    key="remove" 
                    onClick={() => removeFromBasket(item.id)}
                    type="text" 
                    danger
                  >
                    Remove
                  </Button>
                ]}
              >
                <List.Item.Meta
                  title={item.title}
                  description={`$${item.price} x ${item.quantity}`}
                />
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </List.Item>
            )}
          />
          <div className="basket-footer">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <Button type="primary">Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;