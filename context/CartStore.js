import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],

  // Add or update an item in the cart
  addToCart: (item) => set((state) => {
    const itemExists = state.cart.find((cartItem) => cartItem.image === item.image);

    if (itemExists) {
      // If item exists, update the quantity
      return {
        cart: state.cart.map((cartItem) =>
          cartItem.image === item.image
            ? { ...cartItem, count: cartItem.count + 1 } // Increase quantity
            : cartItem
        ),
      };
    } else {
      // Add new item with count set to 1
      return {
        cart: [...state.cart, { ...item, count: 1 }],
      };
    }
  }),

  // Remove item from the cart
  removeFromCart: (item) => set((state) => ({
    cart: state.cart.filter((cartItem) => cartItem.image !== item.image),
  })),
  updateQuantity: (id, quantity) => {
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      return { cart: updatedCart };
    });
  },
  // Update the quantity of an item in the cart
  updateItemQuantity: (item, quantity) => set((state) => {
    return {
      cart: state.cart.map((cartItem) =>
        cartItem.image === item.image
          ? { ...cartItem, count: Math.max(quantity, 1) } // Ensure quantity is at least 1
          : cartItem
      ),
    };
  }),

  // Get the total number of items in the cart
  getTotalItems: () => {
    return (get().cart.reduce((total, cartItem) => total + cartItem.count, 0)); // Fix: use get() to access state within actions
  },
  
  // Get the total price of items in the cart
  getTotalPrice: () => {
    return get().cart.reduce((total, cartItem) => total + cartItem.price * cartItem.count, 0); // Calculate total price
  }
}));

export default useCartStore;
