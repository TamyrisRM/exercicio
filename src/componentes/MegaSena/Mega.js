import React, { Component } from "react";
import { Button, Text, TextInput } from "react-native";
import Padrao from "../../estilo/Padrao";

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros, numeros: []
    }

    constructor(props){
        super(props)

        this.alteraQtde = this.alteraQtde.bind(this)
        
    }

    alteraQtde(qtde){
        this.setState({qtdeNumeros: qtde})
    }
    geraNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 60)+1
        return nums.includes(novo) ? this.geraNumerosNaoContido(nums): novo
    }
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce(n => [...n, this.geraNumerosNaoContido(n)], [])
        this.setState({numeros})
    }
    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map
    }

    render() {
        return (
            <>
                <Text style={Padrao.txtG}>Gerador de Mega Sena {this.state.qtdeNumeros}</Text>
                <TextInput 
                    placeholder="Qtde de números" 
                    value={this.state.qtdeNumeros} onChangeText={this.alteraQtde}
                    keyboardType='number-pad'
                    style={{borderBottomWidth: 1}} />
                    <Button title="Gerar" onPress={this.gerarNumeros} />
                    <Text>{this.state.numeros.join(' - ')}</Text>
            </>
        )
    }
}