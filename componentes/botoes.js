import React from "react";
import { StyleSheet, Text, TouchableHighlight, Dimensions } from "react-native";

export default (props) => {
  const estilos_botoes = [estilos.btn];

  if (props.duplo) {
    estilos_botoes.push(estilos.btn_duplo);
  }
  if (props.igual) {
    estilos_botoes.push(estilos.btn_igual);
  }
  if (props.operacoes) {
    estilos_botoes.push(estilos.btn_operacoes);
  }
  if (props.limpar) {
    estilos_botoes.push(estilos.btn_limpar);
  }
  if (props.backspace) {
    estilos_botoes.push(estilos.btn_backspace);
  }

  return (
    <TouchableHighlight onPress={props.ao_clicar}>
      <Text style={estilos_botoes}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const estilos = StyleSheet.create({
  btn: {
    fontSize: 30,
    height: Dimensions.get("window").width / 4.3,
    width: Dimensions.get("window").width / 4.3,
    padding: 30,
    backgroundColor: "#31313131",
    color: "#fff",
    borderColor: "#777",
    textAlign: "center",
    borderRadius: 100,
    marginTop: 16,
    margin: 3,
  },
  btn_igual: {
    color: "white",
    backgroundColor: "green",
  },
  btn_operacoes: {
    color: "green",
  },
  btn_limpar: {
    color: "red",
  },
  btn_backspace: {
    color: "red",
  },
  btn_duplo: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
});
