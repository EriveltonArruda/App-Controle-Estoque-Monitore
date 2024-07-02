import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import InventoryContext from "../context/InventoryContext";

const AddItemForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const { addItem } = useContext(InventoryContext);

  const handleAddItem = () => {
    addItem({
      id: Date.now(),
      name,
      quantity: parseInt(quantity, 10),
    });
    setName("");
    setQuantity("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Item"
        placeholderTextColor="white"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        placeholderTextColor="white"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Adicionar Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: "#fff",
  },
});

export default AddItemForm;
