import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

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
        backgroundColor: '#ddd',
        borderRadius: 5,
        padding: 5
    },
    image: {
        height: Dimensions.get('window').height * 0.25,
    },
    title: {
        fontSize: 22, 
        padding: 10,
        textAlign: "center",
        fontWeight: "300"
    }

})