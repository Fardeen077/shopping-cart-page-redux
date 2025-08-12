const BASE_URL = "https://dummyjson.com/products";

// FETCH ALL PRODUCTS 
export const fetchProducts = async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data.products;
}

// FETCH ALL CATEGORIES
export const fetchCategories = async () => {
    const res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) throw new Error("Failed to fetch products categories");
    return await res.json();
}

// FETCH PRODUCTS BY CATEGORIES
export const fetchProductsByCategory = async (category) => {
    const res = await fetch(`${BASE_URL}/${category}`);
    if (!res.ok) throw new Error(`Failed to fetch products cartSlicefor category: ${category}`);
    const data = await res.json()
    return data.products;
}