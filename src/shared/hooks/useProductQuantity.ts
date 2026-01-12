import { useState } from 'react';
import { useTypedDispatch } from '../../redux/hooks/redux';
import { addToCart } from '../../redux/slices/CartSlice';
import type { Product } from '../../types';

export const useProductQuantity = (product: Product | undefined) => {
    const dispatch = useTypedDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ quantity, product }));
            setQuantity(1);
        }
    };

    const resetQuantity = () => setQuantity(1);

    return {
        quantity,
        setQuantity,
        handleIncrement,
        handleDecrement,
        handleAddToCart,
        resetQuantity,
    };
};