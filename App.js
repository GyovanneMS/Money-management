import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, Pressable } from 'react-native';
import Grafico from './src/components/Grafico';
import Janela from './src/components/Janela';


export default function App() {
  const [limite, definirLimite] = useState(1000);
  const [gastos, definirGastos] = useState([]);
  const [valor, definirValor] = useState(0);
  const [categoria, definirCategoria] = useState("");

  function AdicionarGastos() {
    const novoGasto = {categoria, valor};
    definirGastos([...gastos, novoGasto]);
  }

  function TotalGastos(){
    var total = 0;
    for (var gasto of gastos)
      total += parseFloat(gasto.valor);
    return total
  }
  return <ScrollView>
    <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

    <Grafico porcentagem={(TotalGastos()/limite) * 100}/>

    <Janela>

      <Text style={{fontSize: 18, marginBottom: 16, textAlign: "center"}}> Definir Limite</Text>
      <TextInput
        style={{backgroundColor:"#fff", padding: 8}}
        value={limite}
        onChangeText={ definirLimite }
        placeholder='Limite (R$)'
        keyboardType="number-pad"
      /> 
      {
        //keyboardType serve para mudar o tipo de teclado, nesse caso para numérico
      }

    </Janela>
    <Janela>

      <Text style={{fontSize: 18, marginBottom: 16, textAlign: "center"}}> Adicionar Gastos </Text>
      <TextInput
        style={{backgroundColor: "#fff", marginBottom: 16, padding: 8}}
        value={categoria}
        onChangeText={ definirCategoria }
        placeholder='Gasto)'
        keyboardType='default'
      /> 
      <TextInput
        style={{backgroundColor: "#fff", marginBottom: 16, padding: 8}}
        value={valor}
        onChangeText={ definirValor }
        placeholder='Valor (R$)'
        keyboardType='number-pad'
      /> 
      <Pressable onPress={AdicionarGastos}>
        <View style={{borderStartColor: "#698269"}}>
          <Text style={{color: "#fff", paddingVertical: 16, textAlign: "center"}}> Adicionar </Text>
        </View>
      </Pressable>

    </Janela>

    <Janela>
        <Text style={{ fontSize: 18, marginBottom: 16, textAlign: "center"}}>
          Histórico de Gastos
        </Text>
        {
          gastos.map(function(gasto, indice){
            return <Text key={indice} style={{color: "#698269"}}>
              {gasto.categoria} - R$ {gasto.valor}
            </Text>
          })
        }
    </Janela>

  </ScrollView>
}

