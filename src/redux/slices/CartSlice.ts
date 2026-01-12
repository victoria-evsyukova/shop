import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../../types';


interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  carts: CartItem[];
  totalCount: number,
  totalPrice: number
}

const initialState: CartState = {
    carts: [],
    totalCount: 0,
    totalPrice: 0
}



export const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{product: Product, quantity?: number}>) => {
            const { product, quantity = 1 } = action.payload;
            const existingItem = state.carts.find(cart => cart.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else{
                state.carts.push({ ...product, quantity })
            }

            state.totalCount = state.carts.reduce((sum, item) => sum + item.quantity, 0);
            state.totalPrice = state.carts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            state.carts = state.carts.filter(cart => cart.id !== action.payload);
            
            state.totalCount = state.carts.reduce((sum, item) => sum + item.quantity, 0);
            state.totalPrice = state.carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },

        updateCart: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
            const { productId, quantity } = action.payload;
            const item = state.carts.find(cart => cart.id === productId);

            if (item) {
                if (quantity <= 0) {
                    state.carts = state.carts.filter(cart => cart.id !== productId);
                } else {
                    item.quantity = quantity;
                }
            }

            state.totalCount = state.carts.reduce((sum, item) => sum + item.quantity, 0);
            state.totalPrice = state.carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },

        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.carts.find(item => item.id === action.payload);
            
            if (item) {
                item.quantity += 1;
                state.totalCount += 1;
                state.totalPrice += item.price;
            }  
        },

        decrementQuantity: ((state, action: PayloadAction<number>) => {
            const item = state.carts.find(item => item.id === action.payload);

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    state.totalCount -= 1;
                    state.totalPrice -= item.price;
                } else {
                    state.carts = state.carts.filter(item => item.id !== action.payload);
                    state.totalCount -= 1;
                    state.totalPrice -= item.price;
                }
            }

        }),
    },
 })

export const { addToCart, removeFromCart, updateCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;