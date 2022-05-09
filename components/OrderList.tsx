import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import config from "../config/config.json";
import orderModel from '../models/orders';
import { Typography, Details } from '../styles';

export default function OrderList({ route, navigation }) {
    const { reload } = route.params || false;
    const [allOrders, setAllOrders] = useState([]);

    if (reload) {
        reloadOrders();
    }

    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders());
    }

    useEffect(() => {
        reloadOrders();
    }, []);

    const listOfOrders = allOrders
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return <Button
                title={order.name}
                key={index}
                onPress={() => {
                    navigation.navigate('Detaljer', {
                        order: order
                    });
                }}
            />
        });

        return (
            <View style>
                <Text style={Typography.header4}>
                    Redo att plockas:
                </Text>
                {listOfOrders}
            </View>
        )
}