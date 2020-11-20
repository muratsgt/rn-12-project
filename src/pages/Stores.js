import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { InputBar, RestItem } from '../components'
import axios from 'axios';

let rests = [];

const Stores = ({ route, navigation }) => {

    const {selectedCity} = route.params;
    const [filteredRests, setFilteredRests] = useState([]);

    const fetchRests = async () => {
        const response = await axios.get('https://opentable.herokuapp.com/api/restaurants',{
            params:{
                city : selectedCity,
            }
        });
        rests = response.data.restaurants;
        console.log(rests);
        setFilteredRests(rests);
    }

    useEffect(()=>{
        fetchRests();
    },[])

    // go to rest page
    const goRestPage = (item) => navigation.navigate("Restaurant", {restItem: item});

    // render for flatlist
    const renderStore = ({item}) => <RestItem item={item} onClick={goRestPage}/>;
        
    // filters the data of flatlist
    function filterData(tex) {
        const tempRests = rests.filter((itm) => itm.name.toLowerCase().includes(tex.toLowerCase()));
        setFilteredRests(tempRests);
    }

    return (
        <View style={{ flex: 1}}>
            <Text style={styles.head}> {selectedCity} Restaurants</Text>
            <InputBar textIn={filterData} />
            <FlatList
                data={filteredRests}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderStore}
            />
        </View>
    )
};

export { Stores };

const styles = StyleSheet.create({
    head: {
        fontWeight:"bold", 
        fontSize: 30, 
        margin: 10, 
        textAlign: "center",
        letterSpacing: 4,
    },
})