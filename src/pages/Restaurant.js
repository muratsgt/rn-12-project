import React from 'react';
import {Linking, View, Text, Button, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Restaurant = ({ route, navigation }) => {

    const restData = route.params.restItem;

    // sample data
    // address: "29425 Chagrin Blvd"
    // area: "Cleveland / Akron / Canton"
    // city: "Pepper Pike"
    // country: "US"
    // id: 116272
    // image_url: "https://www.opentable.com/img/restimages/116272.jpg"
    // lat: 41.462926
    // lng: -81.470595
    // mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=116272"
    // name: "XO Prime Steaks Pepper Pike"
    // phone: "2163788988x"
    // postal_code: "44122"
    // price: 3
    // reserve_url: "http://www.opentable.com/single.aspx?rid=116272"
    // city: "OH"

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: restData.image_url }} />
            <Text style={styles.heading}>{restData.name}</Text>
            <Icon.Button
                name="map-marker"
                backgroundColor="#3b5998"
                onPress={()=>null}
            >
                {restData.area}
            </Icon.Button>
            <Icon.Button
                name="home"
                backgroundColor="#3b5998"
                onPress={()=>Linking.openURL(`geo:${restData.lat},${restData.lng}`)}
            >
                {restData.address}
            </Icon.Button>
            <Icon.Button
                name="phone"
                backgroundColor="#3b5998"
                onPress={()=>Linking.openURL(`tel:${restData.phone}`)}
            >
                {restData.phone}
            </Icon.Button>

        </View>
    )
};



export { Restaurant };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        height: Dimensions.get('window').height * 0.3,
        padding: 20,
    },
    button: {
        margin: 10,
    },
    heading: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 10,
    },
    desc: {
        fontSize: 20,
        fontStyle: "italic",
        paddingHorizontal: 20,
        paddingVertical: 5,
    }
})