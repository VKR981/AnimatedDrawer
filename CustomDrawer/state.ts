import { create } from 'zustand';

type DrawerState = {
    isOpen: boolean;
    isAnimating: boolean;
    selectedScreen: string;
    openDrawer: () => void;
    closeDrawer: () => void;
    toggleDrawer: () => void;
    setIsAnimating: (isAnimating: boolean) => void;
    setSelectedScreen: (screen: string) => void;
};

export const useDrawerStore = create<DrawerState>((set) => ({
    isOpen: false,
    isAnimating: false,
    selectedScreen: 'Start',
    openDrawer: () => set({ isOpen: true, isAnimating: true }),
    closeDrawer: () => set({ isOpen: false, isAnimating: true }),
    toggleDrawer: () => {
        console.log('toggleDrawer');
        set((state) => ({ isOpen: !state.isOpen, isAnimating: true }));
    },
    setIsAnimating: (isAnimating: boolean) => set({ isAnimating }),
    setSelectedScreen: (screen: string) => set({ selectedScreen: screen }),
}));

export const useDrawer = () => {
    const { isOpen, openDrawer, closeDrawer, toggleDrawer, isAnimating, setIsAnimating, selectedScreen, setSelectedScreen } = useDrawerStore();
    return { isOpen, openDrawer, closeDrawer, toggleDrawer, isAnimating, setIsAnimating, selectedScreen, setSelectedScreen };
};
