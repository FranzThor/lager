import { Image, Text, ScrollView } from 'react-native';
import sailboat from '../assets/sailboat.jpg';
import Stock from './Stock';
import { Base } from '../styles';

export default function Home({items, setItems}) {
    return (
        <ScrollView>
            <Text style={Base.header}>Infinity Warehouses</Text>
            <Image source={sailboat} style={{ width: '100%', height: 150, alignSelf: 'center' }} />
            <Stock items={items} setItems={setItems} />
        </ScrollView>
    )
}
