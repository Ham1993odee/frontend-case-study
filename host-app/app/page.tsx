"use client"; // Required for client-side dynamic import

import dynamic from "next/dynamic";

const Products = dynamic(() => import("productsRemote/Products"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Product List</h1>
      <Products />
    </div>
  );
}
