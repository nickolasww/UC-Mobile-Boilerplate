import React from "react";
import { StyleSheet, Text, View, Image, TextInput,  FlatList} from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Header.png")}
        style={styles.Image}
        resizeMode="cover"
      />
      <View style={styles.inputContainer}> 
      <TextInput
        style={styles.input}
        placeholder="Search for a place to go..."
        placeholderTextColor="#999"
      />
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "100%",
        height: 60,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingHorizontal: 70,
    },
    inputContainer:{ 
        position: "absolute",
        bottom: -20,
        left: 20,
        right: 20,
        borderRadius: 5,
    },
    Image:{ 
        width: "100%",
    }
    });
