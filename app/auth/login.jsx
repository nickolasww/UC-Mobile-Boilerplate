import { StatusBar } from 'expo-status-bar'
import { Text, Image, TextInput,  TouchableOpacity, View, SafeAreaView, Touchable, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import {router } from "expo-router"
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handlelogin  = () => { 
    console.log("Login with: ", email , password)
  }

  const handleGoogleLogin = () => { 
    console.log("Login with Google")
  }

  const handleForgetPassword = () => { 
    console.log("navigate to forgot password ")
  }

  const handleSignUp = () => {
  router.push("/auth/register")
  }

  return (
    <View style={styles.container}>
    <SafeAreaView>
      <Text style={styles.welcome}>Welcome Back!</Text>
    
    <View style={styles.form}>
      <Text  style={{fontSize: 12, marginBottom: 5,}}>Email</Text>
      <TextInput style={styles.input}
      placeholder='Nickolas@gmail.com'
      placeholderTextColor="#999"
      keyboardType='email-address'
      autoCapitalize='none'
      // value={email}
      // onChangeText={setEmail}
      />

      <Text style={{fontSize:12, marginBottom:5,}}>Password</Text>
      <View>
        <TextInput style={styles.input}
        placeholder='Input Your Password'
        placeholderTextColor="#999"
        /> 
        <TouchableOpacity style={styles.LoginButton}> 
          <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity> 
          <Text style={styles.forgetPassword}>Forget Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.LoginGoogleButton}> 
          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10}}> 
          <AntDesign name="google" size={24} color="color" />
          <Text style={styles.googlebutton}>Continue with Google</Text>
          </View> 
        </TouchableOpacity>

        <View style={{flexDirection: "row", justifyContent: "center"}}>
          <Text>You don't have an account? </Text>
          <TouchableOpacity> 
            <Text style={styles.SignUp} onPress={handleSignUp}>Sign up</Text>
          </TouchableOpacity>
        </View>


      </View> 
    </View>
    </SafeAreaView>
    </View> 
  )
}

export default Login

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "#f5f0e8",
  },
  welcome:{ 
    color: '#762727', 
    fontSize: 28, 
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
  },
  form: { 
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    height: 50,
    borderColor: '#ccc',
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
  forgetPassword: { 
    color: "#8b2331",
    textAlign: "center",
    marginTop:20,
    marginBottom:20,
    fontWeight: "bold",
  }, 
  LoginGoogleButton:{ 
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
})