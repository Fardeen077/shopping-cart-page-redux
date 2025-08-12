import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../features/cartSlice";
import { useMemo } from "react";

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <div>
                {item.title} (${item.price}) x
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                  }
                  className="w-12 mx-2 border rounded"
                />
              </div>
              <button
                onClick={() => dispatch(removeFromCart({ id: item.id }))
                }
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-2 px-4 py-2 bg-gray-700 text-white rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
