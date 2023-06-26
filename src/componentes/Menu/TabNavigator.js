import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, TabStacNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainStackNavigator} />
            <Tab.Screen name="About" component={TabStacNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;