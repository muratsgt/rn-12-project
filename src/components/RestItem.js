import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const RestItem = ({item, onClick}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onClick(item)}
        >
            <Image style={styles.image} source={{ uri: item.image_url }} />
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
    )
};

export {RestItem};

const styles = StyleSheet.create({
    container: {
        margin: 10, 
        backgroundColor: '#f5b461',
        // padding: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height * 0.20,
        borderRadius: 10,
    },
    title: {
        fontSize: 20, 
        padding: 10,
        textAlign: "center",
        fontWeight: "bold"
    }

})