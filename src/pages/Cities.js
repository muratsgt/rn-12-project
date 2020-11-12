import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';

import { InputBar } from '../components'




const Cities = ({navigation}) => {

    const [myData, setMyData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // sample data
    //{    
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //},

    // load data from server
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setMyData(response.data);
            setFilteredData(response.data);
            setIsLoading(false);
        }
        getData();
    }, [])

    // set filtered data for flatlist
    const filterData = (word) => {
        const tempData = myData.filter((item) => item.userId.toString().includes(word));
        setFilteredData(tempData);
    }

    // call the page for selected city
    const goPageSelected = (item) => {
        const selectedStores = myData.filter((i) => i.userId == item.userId)
        navigation.navigate("Stores", {storData: selectedStores} );
    }

    // render for flatlist
    const renderList = ({ item }) => {
        return (
            <TouchableOpacity 
                style={{ margin: 3, backgroundColor: '#fff' }}
                onPress={() => goPageSelected(item)}
            >
                <Text style={{ textAlign: "center", color: '#ccc' }}>{item.userId}</Text>
            </TouchableOpacity>
        )
    }



    return (

        <View style={{ flex: 1}}>
            {
                isLoading ?
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" color="navy" />
                    </View>
                    :
                    <View style={{ flex: 1}}>
                        <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>Select a city</Text>
                        <InputBar textIn={filterData} />
                        <FlatList
                            data={filteredData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderList}
                        />
                    </View>
            }
        </View>
    )
};

export { Cities };