import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default (props) => {
  return (
    <View style={estilos.display}>
      <Text style={estilos.texto_display} numberOfLines={1}>
        {props.valor}
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#000000",
    borderWidth: 1,
    borderBottomColor: "grey",
    width: "100%",
    height: 300,
  },
  texto_display: {
    fontSize: 50,
    color: "#fff",
  },
});
