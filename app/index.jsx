import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import {Link} from "expo-router";
import Logo from "../assets/icon.png";

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.Image}/>
      <Text style={styles.title}>Welcome to the Homepage!</Text>
      <Text style={{ marginTop: 10}}>P Coba</Text>

      <View style={styles.card}> 
        <Text>This is card</Text>
      </View>

      <Link href="/Homepage" style={styles.link}>Go to HomePage</Link>
      <Link href="/About" style={styles.link}>Go to About Page</Link>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  Image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  card: { 
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    marginTop: 20,
  },
  link: {
    marginTop: 20,
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});
