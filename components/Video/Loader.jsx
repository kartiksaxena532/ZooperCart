import { Video, ResizeMode } from 'expo-av';
import { View, StyleSheet, Button } from 'react-native';
import { useState, useRef } from 'react';

const Loader = () => {
    const video = useRef(null);
    return (

        <Video
            ref={video}
            className="h-full w-full z-30"
            source={require('../../assets/ZooperCart.mp4')}
            controls={true}
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            shouldPlay
        />

    );
}

export default Loader;