import { KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import creatAccountstyle from './creatAccountstyle';
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import { MaterialIcons } from "@expo/vector-icons"; 
import { FontAwesome5 } from "@expo/vector-icons"; 
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons"; 
const CreatAccount = ({navigation}) => {
  return (
    <SafeAreaView style={creatAccountstyle.creatAccountsafeview}>
      <ScrollView style={creatAccountstyle.creatAccountinputview}>
        <KeyboardAvoidingView>
          <View>
            <Text style={creatAccountstyle.pagenametext}>Create Account</Text>
            <View style={creatAccountstyle.inputview}>
              <Feather name="user" size={24} color="black" />
              <TextInput
                style={creatAccountstyle.input}
                placeholder="Ritzy"
              />
            </View>
            <View style={creatAccountstyle.inputview}>
              <Feather name="user" size={24} color="black" />
              <TextInput
                style={creatAccountstyle.input}
                placeholder="Username"
              />
            </View>
            <View style={creatAccountstyle.inputview}>
              <MaterialCommunityIcons name="email" size={24} color="black" />
              <TextInput style={creatAccountstyle.input} placeholder="Email" />
            </View>
            <View style={creatAccountstyle.inputview}>
              <MaterialIcons name="call" size={24} color="black" />
              <TextInput
                keyboardType='numeric'
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
            <View style={creatAccountstyle.inputview}>
              <Entypo name="location-pin" size={24} color="black" />
              <TextInput
                style={creatAccountstyle.input}
                placeholder="Location"
              />
            </View>
            <View style={creatAccountstyle.sumbitview}>
              <Pressable>
                <Text style={creatAccountstyle.submittext}>Create Account</Text>
              </Pressable>
            </View>
                   <View style={{flexDirection: 'row', alignItems: 'center', marginTop:20}}>
                      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                      <View>
                        <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
                      </View>
                      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    </View>
          </View>
        </KeyboardAvoidingView>
        <View style={creatAccountstyle.socialview}>
          <View>
            <AntDesign name="google" size={24} color="black" />
          </View>
          <View>
            <AntDesign name="facebook-square" size={24} color="black" />
          </View>
          <View>
            <AntDesign name="apple1" size={24} color="black" />
          </View>
        </View>
        <View style={creatAccountstyle.noaccountview}>
          <Pressable>
            <Text style={creatAccountstyle.noaccounttext}>
              Already have an account?{" "}
              <Text onPress={() => navigation.replace("Login")} style={creatAccountstyle.signuptext}>Sign in</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatAccount

const styles = StyleSheet.create({})