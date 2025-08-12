import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => JSON.parse(localStorage.getItem("cart")) || [];
const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

const initialState = {
    cartItems: loadCart(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            saveCart(state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            saveCart(state.cartItems);
        },
        updateQuantity: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
            saveCart(state.cartItems);
        },
        clearCart: (state) => {
            state.cartItems = [];
            saveCart([]);
        },
    }
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
