import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCartStore = create(
  persist(
    (set, get) => ({
      carts: [],

      addToCart: (product) => set((state) => {
        const existingItem = state.carts.find((item) => item.id === product.id);

        if (existingItem) {
          return {
            carts: state.carts.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }

        return { carts: [...state.carts, { ...product, quantity: 1 }] };
      }),

      removeFromCart: (id) => set((state) => ({
        carts: state.carts.filter((item) => item.id !== id),
      })),

      clearCart: () => set({ carts: [] }),

      increaseQuantity: (id) => set((state) => ({
        carts: state.carts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      })),

      decreaseQuantity: (id) => set((state) => {
        const updatedCarts = state.carts
          .map((item) => 
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0);
      
        // If the item is completely removed (quantity < 1), trigger `removeFromCart`
        if (!updatedCarts.some((item) => item.id === id)) {
          state.removeFromCart(id);
        }
      
        return { carts: updatedCarts };
      }),
      

      getTotalCost: () => {
        const carts = get().carts;
        return carts.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getTotalQuantity: () => {
        const carts = get().carts;
        return carts.reduce((total, item) => total + item.quantity, 0);
      },

    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
      deserialize: (str) => JSON.parse(str),
      onRehydrateStorage: () => (state) => {
        console.log("State rehydrated:", state);
      },
    }
  )
);

export default useCartStore;
