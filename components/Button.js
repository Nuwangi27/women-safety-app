import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { COLORS } from "../constants";  

const Button = (props) => {
    const filledBgColor = props.color || COLORS.gray;
    const outlinedColor = COLORS.gray;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.WHITE : COLORS.WHITE;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '100%',
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        fontFamily: "bold",
    }
})
export default Button