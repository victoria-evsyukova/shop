
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from '../../redux/slices/ProductsSlice';
import cartReducer from '../slices/CartSlice';

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
} 


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']