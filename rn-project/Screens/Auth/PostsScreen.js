import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const HorizontalLine = ({}) => {
  return <View style={styles.line}></View>;
};

export default function PostsScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ fontSize: 17, fontWeight: '500'}}>Публикации</Text>
        <TouchableOpacity onPress={handlePress} style={{marginLeft: 101, marginRight: 15}}>
          <Feather name="log-in" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <HorizontalLine />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 11,
    paddingTop: 11,
    fontSize: 17,
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
});
