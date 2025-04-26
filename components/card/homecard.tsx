// CustomCard.tsx
import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

interface CustomCardProps {
  title: string;
  imageUrl: string;
  buttonText: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, imageUrl, buttonText }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300, 
    height: 200,
    borderRadius: 15,
    overflow: "hidden",

  },
  imageBackground: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E74C3C",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default CustomCard;
