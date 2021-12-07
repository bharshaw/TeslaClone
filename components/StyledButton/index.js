import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './style';

const StyledButton = (props) => {

    const type = props.type;

    const backgroundColor = type==='primary'? 'black' : 'grey';
    const color           = type==='primary'? 'white':'black';

    return (
            <View style={styles.container}>
                <Pressable 
                style={[styles.button, {backgroundColor: backgroundColor}]} 
                onPress={props.onpress}>
                <Text  style={[styles.text, {color:color}]}>
                    {props.content}
                </Text>
                </Pressable>
            </View>
    );
};

export default StyledButton;


