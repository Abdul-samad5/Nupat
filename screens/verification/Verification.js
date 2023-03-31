import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native';
import verify from './verificationstyle'

const Verification = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Verification code",
    });
  }, [navigation]);
  //verification screen
  return (
    <SafeAreaView style={verify.verificationsafeview}>
      {/* <ScrollView> */}
      <View style={verify.verificationviews}>
        <Text style={verify.codetext}>
        Enter the OTP sent to +234567820122
        </Text>
        <View style={verify.inputview_content}>
          <View style={verify.inputview}>
            <View>
              <TextInput style={verify.input} value="1" />
            </View>
            <View>
              <TextInput style={verify.input} value="1" />
            </View>
            <View>
              <TextInput style={verify.input} value="1" />
            </View>
            <View>
              <TextInput style={verify.input} value="1" />
            </View>
          </View>
          <Pressable style={{ alignSelf: "center", marginTop: 10 }}>
            <Text style={verify.codetext2}>
              Didin't get the OTP code? Resend
            </Text>
          </Pressable>
        </View>
        <View style={verify.nums}>
          <TouchableOpacity><Text style={verify.num}>1</Text></TouchableOpacity>
          <TouchableOpacity><Text style={verify.num}>2</Text></TouchableOpacity>
          <TouchableOpacity><Text style={verify.num}>3</Text></TouchableOpacity>
        </View>
        <View style={verify.nums}>
          <TouchableOpacity><Text style={verify.num}>4</Text></TouchableOpacity>
          <TouchableOpacity><Text style={verify.num}>5</Text></TouchableOpacity>
          <TouchableOpacity><Text style={verify.num}>6</Text></TouchableOpacity>
        </View>
        <View style={verify.nums}>
          <TouchableOpacity><Text style={verify.num}>7</Text></TouchableOpacity>
          <TouchableOpacity><Text style={verify.num}>8</Text></TouchableOpacity>
          <TouchableOpacity><Text style={verify.num}>9</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={verify.nums}>
          <Text style={verify.num}>0</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView>
          <View style={verify.submitbtn}>
            <Pressable onPress={() => navigation.replace("Home")}>
              <Text style={verify.codetextsubmit}>Verify</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Verification

const styles = StyleSheet.create({})