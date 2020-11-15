import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { InputBar, RestItem } from '../components'


const Stores = ({ route, navigation }) => {

    const myStores = route.params.storData;
    const [filteredStores, setFilteredStores] = useState(myStores);

    // sample data
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


    // go to rest page
    const goRestPage = (item) => navigation.navigate("Restaurant", {restItem: item});

    // render for flatlist
    const renderStore = ({item}) => <RestItem item={item} onClick={goRestPage}/>;
        
    // filters the data of flatlist
    function filterData(tex) {
        const tempStores = myStores.filter((itm) => itm.name.toLowerCase().includes(tex.toLowerCase()));
        setFilteredStores(tempStores);
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ec5858' }}>
            <Text style={styles.head}> {myStores[0].city} Restaurants</Text>
            <InputBar textIn={filterData} />
            <FlatList
                data={filteredStores}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderStore}
            />
        </View>
    )
};

export { Stores };

const styles = StyleSheet.create({
    head: {
        color: '#fff',
        fontWeight:"bold", 
        fontSize: 30, 
        margin: 10, 
        textAlign: "center"
    },
})