import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const [height, setHeight] = useState(0);
const [weight, setWeight] = useState(0);
const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
const [imc, setImc] = useState(0);
const [textButton, setTextButton] = useState("Calcular");


export default function Form(props) {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 86.300"
          keyboardType="numeric"
        />
        <Button title={textButton} onPress={() => imcCalc()} />
      </View>
      <ResultImc messageResultIMc={messageImc} resultImc={imc} />
    </View>
  );
}