import React, { useState } from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const InputBar = (props) => {

    // const [written, setWritten] = useState("");

    const writeSmth = (tx) => {
        // setWritten(tx);
        props.textIn(tx);
    }


    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Enter your search.."
                onChangeText={writeSmth}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 10,
    },
});

export {InputBar};