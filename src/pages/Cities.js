import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

import { InputBar } from '../components'




const Cities = ({navigation}) => {

    const [myData, setMyData] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


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

    // filter data for flatlist
    const filterData = (word) => {
        const tempData = cities.filter((item) => item.toLowerCase().includes(word.toLowerCase()));
        setFilteredCities(tempData);
    }


    // create cities Set
    const createCitySet = (datta) => {
        const tempCityList = [];
        datta.forEach(element => {
            tempCityList.includes(element.city) ? null : tempCityList.push(element.city);
        });
        tempCityList.sort();
        setCities(tempCityList);
        setFilteredCities(tempCityList);
    }


    // in the opening load data from server
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://opentable.herokuapp.com/api/restaurants?country=US&per_page=100');
            setMyData(response.data.restaurants);
            createCitySet(response.data.restaurants);
            setIsLoading(false);
        }
        getData();
    }, [])

    // go to page for selected city
    const goPageSelected = (item) => {
        const selectedStores = myData.filter((i) => i.city == item)
        navigation.navigate("Stores", {storData: selectedStores} );
    }

    // render for flatlist
    const renderList = ({ item }) => {
        return (
            <TouchableOpacity 
                style={styles.cityContainer}
                onPress={() => goPageSelected(item)}
            >
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        )
    }


    return (

        <View style={styles.container}>
            {
                isLoading ?
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" color="navy" />
                    </View>
                    :
                    <View style={{ flex: 1}}>
                        <Text style={styles.head}>Cities</Text>
                        <InputBar textIn={filterData} />
                        <FlatList
                            data={filteredCities}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderList}
                        />
                    </View>
            }
        </View>
    )
};

export { Cities };

const styles = StyleSheet.create({
    head: {
        padding: 10, 
        fontSize: 30, 
        fontWeight: "bold",
        textAlign: "center",
        color: '#f9f7cf'
    },
    container: {
        flex: 1, 
        backgroundColor: '#ec5858' 
    },
    text: {
        fontSize:20, 
        textAlign: "center", 
        color: '#333' 
    },
    cityContainer : {
        borderRadius:10, 
        margin: 5, 
        padding:10,
        marginHorizontal: 20,
        backgroundColor: '#f9f7cf' 
    }
})