import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div>
      <Header onCategorySelect={setSelectedCategory} />
      <ProductList selectedCategory={selectedCategory} />
      <Cart />
    </div>
  );
}

export default App;
