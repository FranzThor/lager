import { Text, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import config from "../config/config.json" 
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StockList } from '../styles';
import itemModel from '../models/items'

export default function Stock({items, setItems}) {

    return (
        <View>
            <Text style={StockList.header}>Lagerförteckning</Text>
            <ItemList items={items} setItems={setItems} />
        </View>
    )
}

function ItemList({items, setItems}) {

    useEffect(async () => {
        setItems(await itemModel.getItems())
    }, []);

    const names = items.map((item, index) => 
        <Text key={index} style={StockList.names}>
            { item.name }
        </Text>
    )

    const stock = items.map((item, index) =>
        <Text key={index} style={StockList.stock}>
            { item.stock } st
        </Text>, 
    )

    return (
        <View style={StockList.container}>
            <View>
                {names}
            </View>
            <View>
                {stock}
            </View>
        </View>
    )
}
