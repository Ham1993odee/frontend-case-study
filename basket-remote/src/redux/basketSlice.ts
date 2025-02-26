import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketState {
  items: { id: number; title: string; price: number }[];
}

const initialState: BasketState = { items: [] };

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<{ id: number; title: string; price: number }>) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
