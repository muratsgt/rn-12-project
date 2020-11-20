import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

import { InputBar } from '../components'

let originalCities = [];


const Cities = ({ navigation }) => {

    const [filteredCities, setFilteredCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // filter data for flatlist
    const filterData = (word) => {
        const tempData = originalCities.filter((item) => item.toLowerCase().includes(word.toLowerCase()));
        setFilteredCities(tempData);
    }

    // create cities Set
    // const createCitySet = (datta) => {
    //     const tempCityList = [];
    //     // datta.forEach(element => {
    //     //     tempCityList.includes(element.city) ? null : tempCityList.push(element.city);
    //     // });

    //     datta.forEach(element => {
    //         tempCityList.push(element.city);
    //     });

    //     const cityList = [...new Set(tempCityList)]

    //     cityList.sort();
    //     setCities(cityList);
    //     setFilteredCities(cityList);
    // }

    const fetchData = async () => {
        const response = await axios.get('https://opentable.herokuapp.com/api/cities');
        setFilteredCities(response.data.cities);
        originalCities = [...response.data.cities]
        setIsLoading(false);
    }

    // in the opening load data from server
    useEffect(() => {
        fetchData();
    }, [])

    // go to page for selected city
    const goPageSelected = (item) => navigation.navigate("Stores", {selectedCity: item})

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

    // seperator for flatlist
    const seperator = () => <View style={{borderColor:'#bbb', borderWidth:1}}></View>



    return (

        <View style={styles.container}>
            {
                isLoading ?
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" color="navy" />
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <Text style={styles.head}>Cities</Text>
                        <InputBar textIn={filterData} />
                        <FlatList
                            data={filteredCities}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={renderList}
                            ItemSeparatorComponent={seperator}
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
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        color: "#444",
        letterSpacing: 10
    },
    container: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: "200",
        textAlign: "center",
        color: '#333'
    },
    cityContainer: {
        padding: 10,
    }
})