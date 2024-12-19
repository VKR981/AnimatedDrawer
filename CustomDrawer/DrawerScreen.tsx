
import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { useDrawer } from './state';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MenuIcon from '../icons/MenuIcon';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const AnimationDuration = 750;


const Header = ({ screen }: { screen: string }) => {
    const { toggleDrawer } = useDrawer();
    const handleToggleDrawer = () => {
        console.log('handleToggleDrawer');
        toggleDrawer();
    };
    return (
        <View style={styles.header}>
            <TouchableOpacity hitSlop={30} style={styles.iconButton} onPress={handleToggleDrawer}>
            <MenuIcon style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{screen}</Text>
        </View>
    );
};

const DrawerScreen = ({ screens }: { screens: { name: string, component: React.ComponentType<any> }[] }) => {
    const { isOpen, setIsAnimating, selectedScreen } = useDrawer();
    const offset = useSharedValue(0);
    const offsetTranslate = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: offsetTranslate.value }],
    }));
    const animatedStyles2 = useAnimatedStyle(() => ({
        transform: [{ rotate: -(offset.value / 10) + 'deg' }],
    }));

    React.useEffect(() => {
        if (isOpen) {
            offset.value = withTiming(200, { duration: AnimationDuration });
            offsetTranslate.value = withTiming(250, { duration: AnimationDuration }, () => {
                runOnJS(setIsAnimating)(true);
            });
        } else {
            offset.value = withTiming(0, { duration: AnimationDuration });
            offsetTranslate.value = withTiming(0, { duration: AnimationDuration }, () => {
                runOnJS(setIsAnimating)(false);
            });
        }
    }, [isOpen, offset, offsetTranslate, setIsAnimating]);

    const ScreenComponent = screens.find(s => s.name === selectedScreen)?.component;

    return (
        <Animated.View style={[styles.container1, animatedStyles]}>
            <Animated.View style={[styles.container2, animatedStyles2]}>
                <Header screen={selectedScreen} />
                {ScreenComponent ? <ScreenComponent /> : null}
            </Animated.View>
        </Animated.View>
    );
};

export default DrawerScreen;


const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  iconButton: {
    padding: 10,
    margin: 10,
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
  },
  container1: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 2,
    width: width,
    height: height,
  },
  title: {
    fontSize: 20,
  },
  header: {
    backgroundColor: 'white',
    width: width,
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
