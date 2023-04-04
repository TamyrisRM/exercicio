import React from "react";
import { Text } from "react-native";
import Padrao from "../../estilo/Padrao";


export default (props: any) => (
    <Text style={Padrao.txtG}>{props.nome} {props.sobreNome}</Text>
)