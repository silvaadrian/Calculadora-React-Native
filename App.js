import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
} from "react-native";
import Display from "./componentes/display";
import Btn from "./componentes/botoes";
import BtnDeletar from "./images/btn_deletar.png";

let estados = {
  valor_tela: "",
  operado: false,
  ponto: false,
};

export default function App() {
  const [valorTela, setValorTela] = useState(estados.valor_tela);

  const addDigito = (d) => {
    if (
      d === "+" ||
      d === "-" ||
      d === "/" ||
      d === "*" ||
      d === "(" ||
      d === ")" ||
      d === "(-"
    ) {
      if (estados.operado) {
        return;
      }
      estados.operado = true;
      estados.ponto = false;
    } else if (d === ".") {
      if (estados.ponto) {
        return;
      }
      estados.ponto = true;
      estados.operado = false;
    } else {
      estados.operado = false;
      estados.ponto = false;
    }
    estados.valor_tela += d;
    setValorTela(estados.valor_tela);
  };

  const limpar_tela = () => {
    estados = {
      valor_tela: "",
      operado: false,
      ponto: false,
    };

    setValorTela(estados.valor_tela);
  };

  const opera = (d) => {
    if (d == "C") {
      limpar_tela();
      return;
    }
    if (d == "BS") {
      estados.valor_tela = valorTela.substring(0, valorTela.length - 1);
      setValorTela(estados.valor_tela);
      return;
    }
    try {
      estados.valor_tela = eval(estados.valor_tela);
      estados.operado = true;
      setValorTela(estados.valor_tela);
    } catch {
      estados.valor_tela = "Erro";
      estados.operado = true;
      setValorTela(estados.valor_tela);
    }
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.botoes}>
        <Display valor={valorTela} />
        <View>
          <TouchableHighlight
            style={estilos.btn_deletar_image}
            onPress={() => {
              opera("BS");
            }}
          >
            <Image source={BtnDeletar} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={estilos.botoes}>
        <Btn
          label="C"
          limpar
          ao_clicar={() => {
            limpar_tela();
          }}
        ></Btn>
        <Btn
          label="("
          operacoes
          ao_clicar={() => {
            addDigito("(");
          }}
        ></Btn>
        <Btn
          label=")"
          operacoes
          ao_clicar={() => {
            addDigito(")");
          }}
        ></Btn>
        <Btn
          label="/"
          operacoes
          ao_clicar={() => {
            addDigito("/");
          }}
        ></Btn>
        <Btn
          label="7"
          ao_clicar={() => {
            addDigito("7");
          }}
        ></Btn>
        <Btn
          label="8"
          ao_clicar={() => {
            addDigito("8");
          }}
        ></Btn>
        <Btn
          label="9"
          ao_clicar={() => {
            addDigito("9");
          }}
        ></Btn>
        <Btn
          label="X"
          operacoes
          ao_clicar={() => {
            addDigito("*");
          }}
        ></Btn>
        <Btn
          label="4"
          ao_clicar={() => {
            addDigito("4");
          }}
        ></Btn>
        <Btn
          label="5"
          ao_clicar={() => {
            addDigito("5");
          }}
        ></Btn>
        <Btn
          label="6"
          ao_clicar={() => {
            addDigito("6");
          }}
        ></Btn>
        <Btn
          label="-"
          operacoes
          ao_clicar={() => {
            addDigito("-");
          }}
        ></Btn>
        <Btn
          label="1"
          ao_clicar={() => {
            addDigito("1");
          }}
        ></Btn>
        <Btn
          label="2"
          ao_clicar={() => {
            addDigito("2");
          }}
        ></Btn>
        <Btn
          label="3"
          ao_clicar={() => {
            addDigito("3");
          }}
        ></Btn>
        <Btn
          label="+"
          operacoes
          ao_clicar={() => {
            addDigito("+");
          }}
        ></Btn>
        <Btn
          label="+/-"
          operacoes
          ao_clicar={() => {
            addDigito("(-");
          }}
        ></Btn>
        <Btn
          label="0"
          ao_clicar={() => {
            addDigito("0");
          }}
        ></Btn>
        <Btn
          label="."
          ao_clicar={() => {
            addDigito(".");
          }}
        ></Btn>
        <Btn
          label="="
          igual
          ao_clicar={() => {
            opera("=");
          }}
        ></Btn>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },
  botoes: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btn_deletar_image: {
    marginTop: 240,
    margin: 10,
    marginRight: 25,
  },
});
