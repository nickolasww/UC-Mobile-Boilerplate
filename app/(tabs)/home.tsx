import { Text, Image, TextInput,  TouchableOpacity, View, SafeAreaView, Touchable, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import {router } from "expo-router"
import { useState } from 'react';
import {Link} from "expo-router"
import Header from '../../components/home/header';

const Home = () => {
  return (
    <View> 
    <Header/>
  </View>
  )
}

export default Home
