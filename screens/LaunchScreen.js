import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {} from "react-native-heroicons/solid"
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { useLayoutEffect } from 'react';
export default function LaunchScreen({navigation}) {
  
 useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Text onPress={()=>navigation.navigate("Home")}>Skip</Text>
    ),
  });
}, [navigation]);
  return (
    <View style={styles.container}>
      <Text onPress={()=> navigation.navigate("OnBoardingScreen")} style={styles.text}>9ja foods</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight: 700,
    fontSize: 33,
    color: '#037F00'
  },
  icon:{
    borderStyle:'solid',
    backgroundColor:'green',
    borderRadius: 50,
    width:50,
    height: 50,
    textAlign: 'center'
  },
  icons:{
    position: 'absolute',
    top:13,
    right:10,
  }
});
