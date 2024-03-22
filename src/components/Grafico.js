import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/Grafico"

export default function Grafico(props){
    return <View style={styles.grafico}>
                <View style={[styles.graficoBarra, {width:  `${props.porcentagem}%`}]}>
                    <Text style={styles.graficoTexto}>
                        { props.porcentagem + "%"}
                    </Text>
                </View>
            </View>

}