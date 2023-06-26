import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "./About";
import Home from "./Home";
import Simples from "../Simples";
import Frag from "../Frag";
import ParImpar from "../ParImpar";

const Stack = createNativeStackNavigator();

function SimplesScream(){
  
}
  
const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Simples" component={Simples} />
          <Stack.Screen name="Fragmentos" component={Frag} />
          <Stack.Screen name="Par ou Impar" component={ParImpar} />
        </Stack.Navigator>
    );
}

const TabStacNavigator = () =>{
  return(
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name ="About" component={About} />
    </Stack.Navigator>
  );
}
  export {MainStackNavigator, TabStacNavigator};
