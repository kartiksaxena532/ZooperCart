import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { images } from "../../constants";
import useWishlistStore from '../../context/WishlistStore';

const Photo = ({ item }) => {
  const toggleWishlistItem = useWishlistStore((state) => state.toggleWishlistItem);
  const isItemLiked = useWishlistStore((state) =>
    state.wishlist.some((wishlistItem) => wishlistItem.image === item.image)
  );

  const handleLike = () => {
    toggleWishlistItem(item); // Toggle item in wishlist
  };

  return (
    <View className="rounded-2xl shadow-lg shadow-white">
      <View className="absolute z-10 top-2 left-2">
        <TouchableOpacity onPress={handleLike}>
          <Image 
            source={isItemLiked ? images.filledHeart : images.heart}
            className="w-[30px] h-[30px]"
          />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.image }} className="w-[150px] h-[180px] rounded-2xl" />
    </View>
  );
};

export default Photo;
