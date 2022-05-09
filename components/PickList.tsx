import { View, Text, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
import orderModel from "../models/orders";
import itemModel from "../models/items";
import { Details, Base } from "../styles";

export default function PickList({ route, navigation, setItems }) {
    const { order } = route.params;
    const [itemsList, setItemsList] = useState([]);

    useEffect(async () => {
        setItemsList(await itemModel.getItems());
    }, []);

    async function pick() {
        try {
            await orderModel.pickOrder(order);
            setItems(await itemModel.getItems());
            navigation.navigate("Ordrar", { reload: true });
        } catch (err) {
            console.log(err);
        }
    }

    const itemsHash = itemsList.reduce(
        (hash, current) => ({ ...hash, [current.id]: current.stock}),
        {}
    );

    let inStock = true;

    const orderItemsList = order.order_items.map((item, index) => {
        if (itemsHash[item.product_id] < item.amount) {
            inStock = false;
        }

            return <Text key={index} style={Details.view}>
                {item.name} - {item.amount} - {item.location}
            </Text>;
    });

    return (
        <View style={Base.base}>
            <Text style={Details.header}>
                Kunduppgifter:
            </Text>
            <Text style={Details.view}>{order.name}</Text>
            <Text style={Details.view}>{order.address}</Text>
            <Text style={Details.view}>
                {order.zip} {order.city}
            </Text>

            <Text style={Details.header}>Produkter:</Text>

            {orderItemsList}

            {inStock
                ? <Button title="Plocka order" onPress={pick} />
                : <Text style={Details.notInStock}>
                Varor saknas, kan inte packa order.
                </Text>
            }   
        </View>
    );
}
