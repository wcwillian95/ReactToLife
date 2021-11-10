import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

const ListItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.nome}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    paddingTop: 10,
    paddingBottom: 10
  },
  itemInfo: {
    marginLeft: 1
  },
  itemP1: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 1
  }
});

export default ListItem;
