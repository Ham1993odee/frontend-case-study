import React from 'react';
import { useGetProductsQuery } from "../redux/apiSlice";
import { Card, Spin } from "antd";

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <Spin />;
  if (error) return <p>Error fetching products</p>;

  return (
    <div className="products-grid">
      {data?.map((product) => (
        <Card key={product.id} title={product.title}>
          <p>${product.price}</p>
          <p>{product.description.substring(0, 100)}...</p>
        </Card>
      ))}
    </div>
  );
};

export default Products;