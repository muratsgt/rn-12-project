import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { InputBar } from '../components'


const Stores = ({ route, navigation }) => {

    const myStores = route.params.storData;
    const [filteredStores, setFilteredStores] = useState(myStores);

    // sample data
    //{    
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //},


    // render for flatlist
    const renderStore = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ margin: 10, backgroundColor: '#ddd' }}
                onPress={() => navigation.navigate("Restaurant", {restItem: item})}
            >
                <Image />
                <Text style={{ fontSize: 30, margin: 20 }}>{item.title}</Text>
            </TouchableOpacity>
        )
    };
        
    // filters the data of flatlist
    function filterData(tex) {
        const tempStores = myStores.filter((itm) => itm.title.toLowerCase().includes(tex.toLowerCase()));
        setFilteredStores(tempStores);
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 30, margin: 20 }}>These are the Stores</Text>
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