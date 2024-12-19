This app consists of three navigation systems: Drawer navigation, Tab navigation, and Stack navigation, nested in that order.
For Drawer navigation, I initially considered using a library. However, after spending considerable time exploring options, I concluded that the desired animation type wasn't possible with existing libraries. Therefore, I implemented my own Custom Drawer, which consists of two main parts: Drawer content (Menu) and Drawer screens where the selected screen is rendered.For the animation based on the given design, it was clear that the Menu had to be translated in Y direction and the drawer screens had to combine translateX and rotate transformations.

I created a header common to all screens and needed to communicate the drawer button clicks between Menu and Drawer screens. For this communication, I used Zustand. When the toggle button is clicked, it changes the state, which triggers the animation.
The rest of the nested navigation follows standard implementation. The Start screen contains the Tab navigation, and the Home screen contains the Stack navigation for Screen1 and Screen2. I've used React.memo to prevent unnecessary renders of the Start component, and this optimization can be applied to other screens as well. The Custom Drawer navigation doesn't persist the screen state because the screen is unmounted. If needed, this can be rectified by hiding the screen instead of unmounting it.

For the animation form the given design it was clear that the Menu had to be translated in Y direaction and the drawer screen had to combine translateX and rotate

https://github.com/user-attachments/assets/6fde4d44-37be-4fe4-bf46-2c2c7eebe932

