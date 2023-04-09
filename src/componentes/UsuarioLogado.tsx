import React from "react";
import { Text } from "react-native";
import Padrao from "../estilo/Padrao";
import If from "./If";

export default (props: any) => {
    const usuario = props.usuario || {}

    return (
        <>
            <If valido={usuario && usuario.nome && usuario.email}>
                 <Text style={Padrao.txtG}>Usuário Logado</Text>
                 <Text style={Padrao.txtG}>{usuario.nome} - {usuario.email}</Text>
            </If>
            
        </>
    )
}