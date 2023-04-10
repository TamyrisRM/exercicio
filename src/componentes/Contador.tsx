import React, { useState} from "react";
import { Text, Button } from "react-native";
import Padrao from "../estilo/Padrao";

export default (props: any) => {

    let [numero, setNumero] = useState (props.valorInicial)
    const somar = () => setNumero (numero+1)
    const diminuir = () => setNumero (numero-1)

    return (
        <>
            <Text style={Padrao.txtG}>{numero}</Text>
            <Button title="+" onPress={somar} />
            <Button title="-" onPress={diminuir} />
        </>
    )
}