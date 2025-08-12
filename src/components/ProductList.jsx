import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productAPI";
import ProductCard from "./ProductCard";

const ProductList = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
