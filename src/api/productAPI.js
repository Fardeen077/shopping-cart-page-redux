const BASE_URL = "https://fakestoreapi.com";

export const fetchAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  if(!res) throw new Error("Failed to fetch products");
  return await res.json();
}

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if(!res) throw new Error("Failed to fetch categories");
  return await res.json();
}

export const fetchByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  if(!res) throw new Error("Failed to fetch category");
  return await res.json();
}