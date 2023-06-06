import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";
import UsuarioLogado from "./componentes/UsuarioLogado";
import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";
import DigiteSeuNome from "./componentes/DigiteSeuNome";
import DimensoesFixas from "./componentes/DimensoesFixas";
import Mega from "./componentes/MegaSena/Mega";
import Calculadora from "./componentes/Calculadora/Calculadora";


export default class App extends Component {
  render() {
    return (
      <View style={estilos.container}>
        {/*<Simples texto='Tamyris'/>*/}
        {/*<Frag titulo="Cadastro" 
        subTitulo="Tela de Cadastro de Produto"/>*/}
        {/*<ParImpar numero="9" />*/}

        {/*<Familia>
            <Membro nome="Maria" sobreNome="Silva" />
            <Membro nome="José" sobreNome="Silva" />
        </Familia>

        <Familia>
          <Membro nome="Bianca" sobreNome="Cunha"/>
          <Membro nome="Gustavo" sobreNome="Cunha"/>
      </Familia>*/}

      {/*<UsuarioLogado usuario={ {nome:'teste', email:'teste@teste.com'}} />
      <UsuarioLogado usuario={ {nome: 'teste 2'}}/>
      <UsuarioLogado usuario={ {email:'teste@teste.com'}} />
      <UsuarioLogado usuario= {null} />
      <UsuarioLogado usuario={ {} } />*/}

      {/*<Botao />*/}

      {/*<Contador valorInicial={50} />

      <DigiteSeuNome />
      
      <DimensoesFixas/>

    <Mega qtdeNumeros={6} />*/}

    
      <Calculadora />

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