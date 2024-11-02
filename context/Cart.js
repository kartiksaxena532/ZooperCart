import { create } from "zustand";

const useCart = create((set) => ({
  Cart: [],

  toggleCartItem: (item) => set((state) => {
    const itemExists = state.Cart.find((CartItem) => CartItem.image === item.image);

    return {
      Cart: itemExists
        ? state.Cart.filter((CartItem) => CartItem.image !== item.image) // Remove item if it exists
        : [...state.Cart, { ...item, isAdded: true }], // Add item with isAdded status if it doesn't exist
    };
  }),

  isItemAdded: (item) => !!state.Cart.find((CartItem) => CartItem.image === item.image),
}));

export default useCart;
