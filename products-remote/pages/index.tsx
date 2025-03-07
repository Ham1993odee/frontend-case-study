import { ReduxProvider } from "../src/components/reduxProvider";
import Products from "../src/components/Products";

export default function ProductsPage() {
  return (
    <ReduxProvider>
      <h1>Products Page</h1>
      <Products />
    </ReduxProvider>
  );
}