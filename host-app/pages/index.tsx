import dynamic from "next/dynamic";
import { useState, createContext } from "react";

// Create a context for sharing basket state
export const BasketContext = createContext({
  basketItems: [] as any[],
  addToBasket: (product: any) => {},
  removeFromBasket: (productId: number) => {},
});

const Products = dynamic(() => import("productsRemote/Products"), {
  ssr: false,
});
const Basket = dynamic(() => import("basketRemote/Basket"), {
  ssr: false,
});

export default function Home() {
  const [basketItems, setBasketItems] = useState<any[]>([]);

  const addToBasket = (product: any) => {
    setBasketItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromBasket = (productId: number) => {
    setBasketItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <BasketContext.Provider
      value={{ addToBasket, removeFromBasket, basketItems }}
    >
      <div>
        <h1>Product List</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: "20px",
          }}
        >
          <Products />
          <Basket />
        </div>
      </div>
    </BasketContext.Provider>
  );
}