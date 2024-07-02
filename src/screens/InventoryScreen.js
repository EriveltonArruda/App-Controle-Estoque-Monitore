import React from "react";
import { View, StyleSheet, Text } from "react-native";
import InventoryList from "../components/InventoryList";
import AddItemForm from "../components/AddItemForm";

const InventoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Adicionar itens</Text>
      <AddItemForm />
      <InventoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#262B35",
    color: "#fff",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
  },
});

export default InventoryScreen;
