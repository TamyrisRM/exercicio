import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Padrao from "../../estilo/Padrao";

export default props => {
    return(
        <View style= {displayNumero.Container}>
            <Text key={1} style={Padrao.txtG, Padrao.center}>diwd</Text>
        </View>
    )
}
const displayNumero = StyleSheet.create({
    Container:{
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Numero:{
        color: '#fff'
    }
})