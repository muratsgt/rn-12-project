import React from 'react';
import {View,Text, Button} from 'react-native';

const Restaurant = ({route, navigation}) => {

    const restData = route.params.restItem;


    // sample data
    //{    
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //},

    return(
        <View>
            <Text style={{fontSize: 30}}>{restData.userId}</Text>
            <Text style={{fontSize: 20}}>{restData.title}</Text>
            <Text style={{fontSize: 15, margin: 10}}>{restData.body}</Text>
            <Button
                title="Make reservation"
                onPress={null}
            />
        </View>
    )
};

export {Restaurant};