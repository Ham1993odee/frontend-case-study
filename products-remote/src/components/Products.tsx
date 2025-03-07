import React, { useContext } from 'react';
import { useGetProductsQuery } from "../redux/apiSlice";
import { Card, Spin, Button } from "antd";
import { BasketContext, BasketContextType } from 'host/BasketContext';

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  // Add type assertion to fix the TypeScript error
  const { addToBasket } = useContext(BasketContext as React.Context<BasketContextType>);

  if (isLoading) return <Spin />;
  if (error) return <p>Error fetching products</p>;

  return (
    <div className="products-grid">
      {data?.map((product) => (
        <Card 
          key={product.id} 
          title={product.title}
          actions={[
            <Button key="add" onClick={() => addToBasket(product)}>
              Add to Basket
            </Button>
          ]}
        >
          <p>${product.price}</p>
          <p>{product.description.substring(0, 100)}...</p>
        </Card>
      ))}
    </div>
  );
};

export default Products;