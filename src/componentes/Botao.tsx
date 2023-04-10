import React from "react";
import { Button } from "react-native";

export default (props: any) => {

    function executar(){
        console.warn('Botão acionado!')
    }

    return (
        <>
            <Button title="Executar"  onPress={executar}/>
            <Button title="Executar #02" onPress={function(){
                console.warn("Exec.#02!")
            }} />
            <Button title="Executar #03" onPress={() => console.warn("Exec. #03")} />
        </>
    )
}