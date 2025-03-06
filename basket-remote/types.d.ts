declare module "host/BasketContext" {
    import { Context } from "react";
    
    export interface BasketItem {
      id: number;
      title: string;
      price: number;
      quantity: number;
      [key: string]: any;
    }
    
    export interface BasketContextType {
      basketItems: BasketItem[];
      addToBasket: (product: any) => void;
      removeFromBasket: (productId: number) => void;
    }
    
    export const BasketContext: Context<BasketContextType>;
  }