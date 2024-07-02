import React from "react";
import { View, Button, StyleSheet, Image, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/img/Monitorelogo.png")} />
      </View>
      <Text style={styles.text}>Bem Vindo</Text>
      <Button
        title="Acessar Estoque"
        onPress={() => navigation.navigate("Inventory")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262B35",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: "#fff",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
