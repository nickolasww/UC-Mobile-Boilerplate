import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Link} from "expo-router";

const Homepage = () => {
  return (
    <View style={styles.container}> 
        <Text style={styles.title}>This is Homepage</Text>
        <Link href="/" style={styles.link}>Go back</Link>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({  
    link: {
        color: "#007BFF",
        textDecorationLine: "underline",
    },
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
})