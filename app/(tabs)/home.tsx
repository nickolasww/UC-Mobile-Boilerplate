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
import { Link } from "expo-router";
import Header from "../../components/home/header";
import Main from "../../components/home/main";

const Home = () => {
  return (
    <View>
      <View style={styles.Header}>
        <Header />
      </View>
      <Main />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Header: {
    marginBottom: 30,
  },
});
