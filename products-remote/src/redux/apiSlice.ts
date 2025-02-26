import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
    
    // In this code, we have created an API slice using the  createApi  function from the  @reduxjs/toolkit/query  package. We have defined an endpoint  getProducts  which fetches the products from the API. 
    // We have also exported a  useGetProductsQuery  hook which can be used to fetch the products in the component. 
    // Step 4: Create a Redux Store 
    // Now, we need to create a Redux store and add the API slice to it.