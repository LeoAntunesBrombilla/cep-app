import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useHome } from "./useHome";

export const Home = () => {
  const [cepId, setCepId] = useState("");

  const { isLoading, error, data, refetch } = useHome({ cepId });

  const handleClick = () => {
    refetch();
  };

  if (error)
    return <Text>Não encontramos o seu cep, quer tentar novamente?</Text>;

  return (
    <View>
      <Text>Encontre seu cep</Text>
      <View
        style={{
          backgroundColor: "white",
          height: 50,
          width: 300,
          borderWidth: 2,
          borderColor: "black",
        }}
      >
        <TextInput onChangeText={(text) => setCepId(text)} />
      </View>

      <Button title="Buscar infos" onPress={handleClick} />
      {isLoading ? <></> : <Text>{data.cidade}</Text>}
    </View>
  );
};
