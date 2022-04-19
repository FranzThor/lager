import { Text, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import config from "../config/config.json" 
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Stock() {

    return (
        <View>
            <Text style={style.header}>Lagerförteckning</Text>
            <ItemList />
        </View>
    )
}

function ItemList() {
    const [items, setItems] = useState([]) as any;

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config['api-key']}`)
            .then(response => response.json())
            .then(result => setItems(result.data))
    })

    const names = items.map((item, index) => 
        <Text key={index} style={style.names}>
            { item.name }
        </Text>
    )

    const stock = items.map((item, index) =>
        <Text key={index} style={style.stock}>
            { item.stock } st
        </Text>, 
    )

    return (
        <View style={style.container}>
            <View>
                {names}
            </View>
            <View>
                {stock}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        alignSelf: 'center',
        fontSize: 24,
        paddingBottom: 12,
        paddingTop: 24,
        color: '#2a4d69'
    },
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 5,
        marginBottom: 15,
        backgroundColor: '#adcbe3'
    },
    names: {
        paddingRight: 20,
        borderBottomWidth: 1,
        borderColor: '#fff',
        paddingBottom: 12,
        paddingTop: 4,
        fontWeight: 'bold'
    },
    stock: {
        textAlign: 'right',
        paddingLeft: 100,
        borderBottomWidth: 1,
        borderColor: '#fff',
        paddingBottom: 12,
        paddingTop: 4,
    }
});