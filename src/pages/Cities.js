import React, { useState } from 'react';
import {View, Text, FlatList} from 'react-native';

import {InputBar} from '../components'


const Cities = () => {

    const [searchText, setSearchText] = useState("");

    const searchNew = (tex) => {
        setSearchText(tex);
    }

    const renderList = ({item}) => {
        return(
            <View style={{margin:3, backgroundColor:'#fff'}}>
                <Text style={{textAlign:"center", color:'#ccc'}}>{item.cityName}</Text>
            </View>
        )
    }

    return(
        <View>
            <Text style={{padding:10, fontSize: 20, fontWeight: "bold"}}>Select a city</Text>
            <InputBar textIn={searchNew}/>
            <FlatList
                data={}
                keyExtractor={(item,index) => index.toString()}
                renderItem={renderList}
            />
        </View>
    )
};

export {Cities};