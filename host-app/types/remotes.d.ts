declare module "productsRemote/Products" {
    const Products: React.ComponentType;
    export default Products;
  }
  
  declare module "basketRemote/*" {
    const any: any;
    export default any;
  }

  declare module "host/BasketContext" {
    import { Context } from "react";
    
    interface BasketItem {
      id: number;
      title: string;
      price: number;
      quantity: number;
      [key: string]: any;
    }
    
    interface BasketContextType {
      basketItems: BasketItem[];
      addToBasket: (product: any) => void;
      removeFromBasket: (productId: number) => void;
    }
    
    export const BasketContext: Context<BasketContextType>;
  }