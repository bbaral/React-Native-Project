import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

const Button = ({onPress, children}) => {
    const {
        buttonStyle,
        buttonTextStyle
    } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={buttonTextStyle}>
            {children}
        </Text>
        </TouchableOpacity>
    )
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#e6f8de',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4e3469',
        marginLeft: 5,
        marginRight: 5
    },

    buttonTextStyle: {
        alignSelf: 'center',
        color: '#0059fc',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;