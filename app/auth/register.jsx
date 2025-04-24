import React from "react";
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Touchable,
  StyleSheet,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";

const Register = () => {

    const HandleSignin = () => {
        router.push("/auth/login")
    }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.welcome}>Welcome to Glamify!</Text>

        <View style={styles.form}>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>Your Name</Text>
          <TextInput
            style={styles.input}
            placeholder="input your first name"
            placeholderTextColor="#999"
            // value={email}
            // onChangeText={setEmail}
          />

          <Text style={{ fontSize: 12, marginBottom: 5 }}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="xxxxxx@gmail.com   "
            placeholderTextColor="#999"
          />

          <Text style={{ fontSize: 12, marginBottom: 5 }}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Input your password"
            placeholderTextColor="#999"
          />

          <Text style={{ fontSize: 12, marginBottom: 5 }}> Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Input confirm password"
            placeholderTextColor="#999"
          />

          <TouchableOpacity style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.or}>or sign up with</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.LoginGoogleButton}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <AntDesign name="google" size={24} color="color" />
              <Text style={styles.googlebutton}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>You don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.SignUp} onPress={HandleSignin}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f0e8",
  },
  welcome: {
    color: "#762727",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
  },
  form: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 20,
  },
  LoginButton: {
    backgroundColor: "#8b2331",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  LoginButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  or: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  LoginGoogleButton: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
  },
  googlebutton: {
    textAlign: "center",
    justifyContent: "center",
  },
  SignUp: {
    color: "#8b2331",
  },
});
