import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";
import Pick from "./components/Pick";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Base } from './styles'

const Tab = createBottomTabNavigator();
const routeIcons = {
    "Lager": "home",
    "Plock": "list"
}

export default function App() {
    const [items, setItems] = useState([]) as any;

    return (
        <SafeAreaView style={Base.base}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = routeIcons[route.name] || "alert";

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: '#2a4d69',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}>
                    <Tab.Screen name="Lager">
                        {(props) => <Home {...props} items={items} setItems={setItems} />}
                    </Tab.Screen>
                    <Tab.Screen name="Plock">
                        {(props) => <Pick {...props} items={items} setItems={setItems} />}
                    </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
