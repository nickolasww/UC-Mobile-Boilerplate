import React from 'react'
import { StyleSheet, View, Image, Text, useColorScheme} from 'react-native'
import {Link} from "expo-router";
import {Colors} from "../constants/color"

const AboutPage = () => {
    const colorSchema = useColorScheme()
    const theme = Colors[colorSchema] ?? Colors.light

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}> 
        <Text style={[styles.title, {color: theme.text}]}> This is About Page</Text>
        <Link href="/" style={styles.link}> Go back </Link>
    </View> 
  )
}

export default AboutPage

const styles = StyleSheet.create({  
    container:{ 
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
})