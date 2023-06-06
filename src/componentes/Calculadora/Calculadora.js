import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";
import Display from "./Display";

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operacao: null,
  values: [0, 0],
  indice: 0,
}

export default class Calculadora extends Component {

    state = {...initialState}


      clearDisplay = () => {
        this.setState({displayValue: '0'})
      }
      setDigit = digito => {
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        if (digito === '.' && !clearDisplay && this.state.displayValue.includes('.')){
          return
        }
        const currentValue = clearDisplay ? '': this.state.displayValue

        const displayValue = currentValue + digito

        this.setState({displayValue, clearDisplay: false})

        if (digito !== '.'){
          const newValue = parseFloat(displayValue)
          const values = [...this.state.values]
          values[this.state.indice] = newValue
          this.setState({values})
        }
      }

      setOperacao = operacao => {
        if (this.state.indice === 0){
          this.setState({operacao, indice : 1, clearDisplay: true })
        }else{
          const equals = operacao === '='
          const values = [...this.state.values]
          try{
            values[0] = eval(`${values[0]} ${this.state.operacao} ${values[1]}`)
          }catch{
            values[0] = this.state.values[0]
          }

          values[1] = 0
          this.setState({
            displayValue:`${values[0]}`,
            operacao: equals ? null: operacao,
            clearDisplay: true,
            indice: equals ? 0: 1,
            values,
          })
        }
      }
      render(){
        return (
            <View style={estilos.calculadora}>
                <Display value={this.state.displayValue} />
                <View style={estilos.buttons}>
                    <Button label='AC' triple onClick={() => this.clearDisplay()} />
                    <Button label='/' op onClick={this.setOperacao}/>
                    <Button label='7' onClick={this.setDigit} />
                    <Button label='8' onClick={this.setDigit}/>
                    <Button label='9' onClick={this.setDigit}/>
                    <Button label='*' op onClick={this.setOperacao}/>
                    <Button label='4' onClick={this.setDigit}/>
                    <Button label='5' onClick={this.setDigit}/>
                    <Button label='6' onClick={this.setDigit}/>
                    <Button label='-' op onClick={this.setOperacao}/>
                    <Button label='1' onClick={this.setDigit}/>
                    <Button label='2' onClick={this.setDigit}/>
                    <Button label='3' onClick={this.setDigit}/>
                    <Button label='+' op onClick={this.setOperacao}/>
                    <Button label='0' double onClick={this.setDigit}/>
                    <Button label='.' onClick={this.setDigit}/>
                    <Button label='=' op onClick={this.setOperacao}/>
                </View>
            </View>
        )
      }
}

const estilos = StyleSheet.create({
    calculadora: {
        flex: 1,
      },
      buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
})