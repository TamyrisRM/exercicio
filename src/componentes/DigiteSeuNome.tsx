import React, {useState} from "react";
import { Text, TextInput } from "react-native";
import Padrao from "../estilo/Padrao";

export default (props: any) => {

    let [nome, setNome] = useState ('Tamarindo')

    return (
        <>
            <Text>{nome}</Text>
            <TextInput 
                placeholder="Seu nome" style={Padrao.input} 
                value={nome} onChangeText={nome => setNome(nome)} 
            />
        </>
    )
}