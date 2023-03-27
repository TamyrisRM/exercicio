import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";

export default class App extends Component {
  render() {
    return (
      <View style={estilos.container}>
        <Simples texto='programando react-native' />
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonte: {
    fontSize: 50,
  },
})