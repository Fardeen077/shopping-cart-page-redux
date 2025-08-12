import { useState, useEffect } from "react";
import { fetchCategories } from "../api/productAPI";

const Header = ({ onCategorySelect }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(setCategories);
    }, [])

    return (
        <div className="flex gap-2 p-4 bg-gray-100 overflow-auto">
            <button className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => onCategorySelect("all")}>
                All
            </button>
            {categories.map((cat, index) => (
                <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    key={index}
                    onClick={() => onCategorySelect(cat.slug)}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    )
};

export default Header;