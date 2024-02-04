import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Button2 = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.yellow;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;

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
        top:-10,
        paddingBottom: 10,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
          display:'flex',
          width:100
    
        
    }
})
export default Button2