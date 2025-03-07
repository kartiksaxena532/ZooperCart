import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, ScrollView, Button, Alert } from 'react-native';
import Photo from '../../components/RestList/Image';
import { images } from "../../constants";
import { StatusBar } from 'expo-status-bar';
import { Svg, Defs, Path, Use, G } from 'react-native-svg';
import useCartStore from '../../context/useCartStore';
import { wavyData } from '../../constants/products';
import { useStripe } from '@stripe/stripe-react-native';

const Cart = () => {

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const { carts, removeFromCart, clearCart, getTotalCost, increaseQuantity, decreaseQuantity } = useCartStore();
  const totalCost = getTotalCost().toFixed(2);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch('http://192.168.29.11:8080/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: totalCost }),
      insecureHTTPParser: true
    })
      .catch((error) => console.error('Error:', error));;

    const { paymentIntent, ephemeralKey, customer } = await response.json();
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "ZooperCart",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Kartik Saxena',
      }
    });

    if (!error) {
      setLoading(true);
    }
  };


  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(
        'We Will Miss You!',
        'Are You Sure to cancel the order?',
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'Your Payment has been cancelled!',
            ),
        },
      );
    } else {
      Alert.alert('Success', 'Your order is on its way!');
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View className="bg-blue-500 h-10 w-full"></View>
      <View className="bg-black-100 flex-1 font-pmedium">
        <View className="bg-blue-500 mb-4">
          <Image
            source={images.cart3d} // Replace with your empty state image
            className="w-[45px] h-[45px] flex mx-auto -rotate-45 mt-1"
            resizeMode="contain"
          />
          <Svg width="100%" height="60%" fill="#1e1e2d" viewBox="10 0 800 1000" preserveAspectRatio="none" className="absolute w-full -bottom-1">
            <Defs>
              <Path id="wave" d={wavyData} />
            </Defs>
            <G>
              <Use href="#wave" y="320" />
            </G>
          </Svg>
          <Text className="text-md font-psemibold text-center mb-4 text-red-50 capitalize mx-2">
            My Cart
          </Text>
        </View>

        {/* Conditional Rendering based on Cart Items */}
        {carts.length === 0 ? (
          <View className="flex justify-center h-[70%] items-center">
            <Image
              source={images.emptyWishlist}
              className="w-[200px] h-[200px] opacity-40"
              resizeMode="contain"
            />
            <Text className="text-xl mx-2 text-gray-500 capitalize font-psemibold">
              Opps its empty!
            </Text>
            <Text className="text-md mx-2 text-gray-500 capitalize font-pregular">
              We've got you covered
            </Text>
          </View>
        ) : (
          // Scrollable FlatList below the fixed header
          <>
            <FlatList
              data={carts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item: cart }) => {
                const cost = (cart.quantity * cart.price).toFixed(2);

                return (
                  <View key={cart.id} className="flex justify-center items-center mt-5">
                    <View className="flex justify-around w-full flex-row items-center">
                      <View className="border-2 border-white rounded-md">
                        <Image source={{ uri: cart.thumbnail }} className="w-[60px] h-[60px] rounded-xs" />
                      </View>
                      <View className="flex flex-col">
                        <Text className="text-xs text-white font-psemibold"
                          numberOfLines={1}
                          ellipsizeMode="tail">{cart.title}</Text>
                        <View className="flex flex-row justify-between">
                          <Text className="text-[9px] text-white font-pregular">Quantity: {cart.quantity}</Text>
                          <Text className=" text-[9px] mb-1 text-white font-pregular">Price: ₹ {cart.price}</Text>
                        </View>
                        <View className="flex flex-row gap-3 items-center">
                          <TouchableOpacity className="w-14 h-6 flex text-center justify-center rounded-full items-center bg-red-400" onPress={() => removeFromCart(cart.id)}>
                            <Text className="text-white text-[9px] font-pregular">Remove</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            className="w-6 h-6 flex text-center justify-center items-center rounded-full bg-yellow-400"
                            onPress={() => increaseQuantity(cart.id, cart.id.quantity + 1)}
                          >
                            <Text className="font-pbold text-center">+</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            className="w-6 h-6 flex text-center justify-center items-center rounded-full bg-yellow-400"
                            onPress={() => decreaseQuantity(cart.id, cart.id.quantity - 1)}
                          >
                            <Text className="font-pbold">-</Text>
                          </TouchableOpacity>
                          <Text className="text-xs text-white font-pregular">Total: ₹ {cost}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
            <View className="flex mt-1 mb-4 justify-between items-center flex-row px-3 ">
              <TouchableOpacity className="w-[20vw] py-3 rounded-full bg-red-500 flex justify-center items-center" onPress={clearCart}><Text className="font-psemibold text-white">Clear</Text></TouchableOpacity>

              <TouchableOpacity className="w-[70vw] py-3 rounded-full bg-green-500 flex justify-center items-center" onPress={async () => {
                await initializePaymentSheet().then(async () => {
                  openPaymentSheet();
                });
              }}><Text className="font-psemibold text-white">Checkout ₹ {totalCost}</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

      </View >
    </>
  );
};

export default Cart;
