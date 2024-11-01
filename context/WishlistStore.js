// WishlistStore.js
import { create } from 'zustand';

const useWishlistStore = create((set) => ({
  wishlist: [],

  toggleWishlistItem: (item) => set((state) => {
    const itemExists = state.wishlist.find((wishlistItem) => wishlistItem.image === item.image);

    return {
      wishlist: itemExists
        ? state.wishlist.filter((wishlistItem) => wishlistItem.image !== item.image) // Remove item if it exists
        : [...state.wishlist, { ...item, isLiked: true }], // Add item with isLiked status if not exists
    };
  }),

  isItemLiked: (item) => !!state.wishlist.find((wishlistItem) => wishlistItem.image === item.image),
}));

export default useWishlistStore;
