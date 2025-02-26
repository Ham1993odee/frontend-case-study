import { useGetProductsQuery } from "../redux/apiSlice";
import { Card, Spin } from "antd";

export default function Products() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <Spin />;
  if (error) return <p>Error fetching products</p>;

  return (
    <div>
      {data?.map((product) => (
        <Card key={product.id} title={product.title}>
          <p>{product.price}</p>
        </Card>
      ))}
    </div>
  );
}
