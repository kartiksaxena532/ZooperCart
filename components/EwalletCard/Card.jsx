import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import Animated, {
    useAnimatedStyle,
    interpolate,
    withTiming,
} from 'react-native-reanimated';
import {
    FlingGestureHandler,
    Directions,
    State,
} from 'react-native-gesture-handler';

const Card = ({
    maxVisibleItems,
    item,
    index,
    dataLength,
    animatedValue,
    currentIndex,
    prevIndex,
}) => {
    const IMAGE_WIDTH = 370;
    const IMAGE_HEIGHT = 230;

    const animatedStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            animatedValue.value,
            [index - 1, index, index + 1],
            [-30, 1, 30],
        );
        const translateY2 = interpolate(
            animatedValue.value,
            [index - 1, index, index + 1],
            [-200, 1, 200],
        );
        const scale = interpolate(
            animatedValue.value,
            [index - 1, index, index + 1],
            [0.9, 1, 1.1],
        );
        const opacity = interpolate(
            animatedValue.value,
            [index - 1, index, index + 1],
            [1, 1, 0],
        );
        return {
            transform: [
                {
                    translateY: index === prevIndex.value ? translateY2 : translateY,
                },
                { scale },
            ],
            opacity:
                index < currentIndex.value + maxVisibleItems - 1
                    ? opacity
                    : index === currentIndex.value + maxVisibleItems - 1
                        ? withTiming(1)
                        : withTiming(0),
        };
    });

    return (
        <FlingGestureHandler
            key="up"
            direction={Directions.UP}
            onHandlerStateChange={ev => {
                if (ev.nativeEvent.state === State.END) {
                    if (currentIndex.value !== 0) {
                        animatedValue.value = withTiming((currentIndex.value -= 1));
                        prevIndex.value = currentIndex.value - 1;
                    }
                }
            }}>
            <FlingGestureHandler
                key="down"
                direction={Directions.DOWN}
                onHandlerStateChange={ev => {
                    if (ev.nativeEvent.state === State.END) {
                        if (currentIndex.value !== dataLength - 1) {
                            animatedValue.value = withTiming((currentIndex.value += 1));
                            prevIndex.value = currentIndex.value;
                        }
                    }
                }}>
                <Animated.View
                    className={`w-10 h-20 ${item.bgvalue}`}
                    style={[
                        styles.image,
                        {
                            zIndex: dataLength - index,
                            width: IMAGE_WIDTH,
                            height: IMAGE_HEIGHT,
                        },
                        animatedStyle,
                    ]}

                ><View className="flex w-full justify-between h-full items-center px-3 text-white">
                        <Text className="text-9xl opacity-20 absolute right-2 leading-tight font-pbold text-white">{item.index}</Text>
                        <View className="flex w-full justify-between flex-row mt-2">
                            <Image source={{uri:item.image}} className="w-[31vw] h-[9vh]" resizeMode="contain"  />
                        </View>
                        <View className="-mb-4">
                            <Text className="text-3xl leading-tight font-pbold text-white">{item.cardname}</Text>
                        </View>
                        <Text className="font-psemibold text-gray-800 text-xl">{item.number}</Text>
                        <View className="justify-around  flex w-full flex-row mb-6">
                            <Text className="font-pregular text-gray-300">Card Holder {"\n"}<Text className="font-psemibold text-white">{item.name}</Text></Text>
                            <Text className="font-pregular text-right text-gray-300">Membership {"\n"}<Text className="font-psemibold text-white">{item.year}</Text></Text>
                        </View>
                    </View>
                </Animated.View>
            </FlingGestureHandler>
        </FlingGestureHandler>
    );
};

export default Card;

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        borderRadius: 20,
    },
});