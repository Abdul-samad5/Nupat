import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import creatAccountstyle from "./creatAccountstyle";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={creatAccountstyle.createsafeview}>
      <ScrollView style={creatAccountstyle.createinputview}>
        {/*  KeyboardAvoidingView is to stop the keyboard from covering the items*/}
        <KeyboardAvoidingView>
          <View>
            <Text style={creatAccountstyle.pagetext}>Sign In</Text>
            <View style={creatAccountstyle.inputview}>
              <MaterialIcons name="call" size={24} color="black" />
              <TextInput
                style={creatAccountstyle.input}
                placeholder="Phone Number"
              />
            </View>
            <View style={creatAccountstyle.inputview}>
              <FontAwesome5 name="lock" size={24} color="black" />
              <TextInput
                secureTextEntry={true}
                style={creatAccountstyle.input}
                placeholder="Password"
              />
            </View>
            <View style={creatAccountstyle.sumbitview}>
              <Pressable onPress={() => navigation.navigate("Verification")}>
                <Text style={creatAccountstyle.submittext}>Create Account</Text>
              </Pressable>
            </View>
            <Text style={{ color: "red", left:270, marginTop:10 }}>Forgot password?</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop:50}}>
              <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
              <View>
                <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={creatAccountstyle.noaccountview}>
          {/* <Pressable>
            <Text style={{ color: "red" }}>Forgot password?</Text>
          </Pressable> */}
        </View>
        <View style={creatAccountstyle.socialview}>
          <View style={creatAccountstyle.social}>
            <AntDesign name="google" size={24} color="black" />
          </View>
          <View style={creatAccountstyle.social}>
            <AntDesign name="facebook-square" size={24} color="black" />
          </View>
          <View style={creatAccountstyle.social}>
            <AntDesign name="apple1" size={24} color="black" />
          </View>
        </View>
        
      </ScrollView>
      <View style={creatAccountstyle.noview}>
          <Pressable>
            <Text style={creatAccountstyle.noaccounttext}>
              Not yet registered?{" "}
              <Text onPress={() => navigation.navigate("CreatAccount")} style={creatAccountstyle.signuptext}>Sign up</Text>
            </Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
