import { Text, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import config from "../config/config.json" 

export default function Stock() {

        return (
            <View>
                <Text style={style.text}>Lagerförteckning</Text>
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

    const list = items.map((item, index) => <Text style={{textAlign: 'center'}} key={index}>{ item.name } : { item.stock } in stock</Text>)

    return (
        <View>
            {list}
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        paddingTop: 50,
        color: '#333', 
        fontSize: 24,
        textAlign: 'center'
    }
});