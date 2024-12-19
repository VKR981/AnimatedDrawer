import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useDrawer } from './state';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const AnimationDuration = 750;

const DrawerContent = ({ screens }: { screens: { name: string, component: React.ComponentType<any> }[] }) => {
    const { closeDrawer, setSelectedScreen, selectedScreen, isOpen } = useDrawer();
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }],
    }));

    const handleScreenChange = (screen: string) => {
        setSelectedScreen(screen);
        closeDrawer();
    };

    useEffect(() => {
        if (isOpen) {
            offset.value = withTiming(50,{duration: AnimationDuration});
        } else {
            offset.value = withTiming(0,{duration: AnimationDuration});
        }
    }, [isOpen, offset]);

    return (
        <Animated.View style={[styles.container, animatedStyles]}>
            <Text style={styles.heading}>Beka</Text>
            {screens.map((screen) => (
                <NavButton
                    isActive={selectedScreen === screen.name}
                    title={screen.name}
                    onPress={() => handleScreenChange(screen.name)}
                    key={screen.name}
                />
            ))}
            <NavButton title="Your Orders" onPress={() => {}} />
            <View style={styles.divider} />
            <NavButton title="Sign Out" onPress={() => {}} />
        </Animated.View>
    );
};

const NavButton = ({ title, onPress, isActive }: { title: string, onPress: () => void, isActive?: boolean }) => {
    return (
        <TouchableOpacity style={[styles.navButton, isActive && styles.activeNavButton]} onPress={onPress}>
            <Text style={[styles.navButtonText, isActive && styles.activeNavButtonText]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default DrawerContent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f202c',
        position: 'absolute',
        zIndex: 1,
        width: width,
        height: height,
        borderRadius: 30,
    },
    heading: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 40,
    },
    navButton: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 125,
    },
    activeNavButton: {
        backgroundColor: '#472439',
    },
    navButtonText: {
        color: 'white',
    },
    activeNavButtonText: {
        color: '#e26d6e',
    },
    divider: {
        backgroundColor: 'white',
        width: 100,
        height: 1,
        opacity: 0.2,
        marginLeft: 10,
    },
});
