import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList = (props) => {


    return (
        <View style={styles.container}>
            <FlatList
            data={cars}
                renderItem={({item}) => <CarItem car={item}/>} 
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRae={'fast'}
                snapToInterval={Dimensions.get('window').height}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default CarsList;


'./assets/images/ModelX.jpeg'