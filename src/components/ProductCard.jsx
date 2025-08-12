import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="border rounded p-4 shadow flex flex-col">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover"
            />
            <h3 className="mt-2 font-bold">{product.title}</h3>
            <p className="text-sm text-gray-600">${product.price}</p>
            <button
                onClick={() => dispatch(addToCart(product))}
                className="mt-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
