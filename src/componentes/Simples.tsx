import React, {Component, PropsWithChildren} from "react";
import { StyleSheet, Text } from "react-native";
import Padrao from "../estilo/Padrao";

export default (props: any) =>
    <Text style={Padrao.ex}>Arrow 1: {props.texto}</Text>

    