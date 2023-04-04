import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";

export default class App extends Component {
  render() {
    return (
      <View style={estilos.container}>
        {/*<Simples texto='Tamyris'/>*/}
        {/*<Frag titulo="Cadastro" 
        subTitulo="Tela de Cadastro de Produto"/>*/}
        {/*<ParImpar numero="9" />*/}

        <Familia>
            <Membro nome="Maria" sobreNome="Silva" />
            <Membro nome="José" sobreNome="Souza" />
        </Familia>

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