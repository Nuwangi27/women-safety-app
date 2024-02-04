import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const COLORS = {
    primary: '#400b3f',
    secondary: '#DDF0FF',
    tertiary: '#FF7754',

    gray: "#83829A",
    gray2: "#C1C0C8",

    offwhite: "#F3F4F8",
    WHITE: "#FFFFFF",
    black: "#000000",
    red: "#E81E4D",
    green: "#00C135",
    lightWhite: "#FAFAFC",
    purple:"rgba(255, 251, 254, 0.87)",
    gradientStart:"#E81E4D",
    gradientEnd:"#400b3f"
};


const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
};

const SHADOW = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { COLORS, SIZES, SHADOW };