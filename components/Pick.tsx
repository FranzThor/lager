import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrderList from './OrderList.tsx';
import PickList from './PickList.tsx';

const Stack = createNativeStackNavigator();

export default function Pick(props) {
    return (
        <Stack.Navigator initialRouteName='Ordrar'>
            <Stack.Screen name="Ordrar" component={OrderList} />
            <Stack.Screen name="Detaljer">
                {(screenProps) => <PickList {...screenProps} setItems={props.setItems} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}