import { ReduxProvider } from "../src/components/ReduxProvider";
import dynamic from "next/dynamic";

// We can't import BasketContext directly here as this page should work standalone
// In the microfrontend integration, the Basket component will get context from the host

export default function BasketPage() {
  return (
    <ReduxProvider>
      <h1>Basket App</h1>
      <p>This is a standalone basket page. When integrated with the host app, it will display the basket contents.</p>
    </ReduxProvider>
  );
}