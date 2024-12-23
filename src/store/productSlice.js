import { createSlice } from '@reduxjs/toolkit';


export const productSlice = createSlice({
  name: 'product', initialState: {
    products: [],
    selected: [],
  }, reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    remove: (state, action) => {
      const index = state.selected.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        if (state.selected[index].quantity > 1) {
          state.selected[index].quantity = state.selected[index].quantity - 1;
        }
        else {
          state.selected = state.selected.filter(product => product.id !== action.payload)
        }
      }

    },
    addToCart: (state, action) => {
      const index = state.selected.findIndex(product => product.id === action.payload.id);
      if (index === -1) {
        state.selected.push({ ...action.payload, quantity: 1 });
      } else {
        state.selected[index].quantity = state.selected[index].quantity ? state.selected[index].quantity + 1 : 1;
      }

    },
  }
});

export const { addToCart, remove, setProducts } = productSlice.actions;
export default productSlice.reducer;