import { type CatalogType } from '../../types';
import { createAsyncThunk, createSlice, type ActionReducerMapBuilder, type PayloadAction } from '@reduxjs/toolkit';
import ky from 'ky';


interface ProductsState {
  products: CatalogType[];
  loading: boolean;
  error: string | null;
}
 
const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
}


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await ky
        .get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
        .json()
    return response as CatalogType[];
})


export const productsSlice = createSlice({
    name: 'product', 
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<ProductsState>)=> {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<CatalogType[]>) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            })
    }
 })

export default productsSlice.reducer;