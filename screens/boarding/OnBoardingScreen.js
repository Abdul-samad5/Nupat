import React, { useLayoutEffect } from 'react'
import { View, Text, Image, StatusBar, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import Swiper from 'react-native-swiper'
import { ChevronRightIcon } from "react-native-heroicons/solid";
export default function OnBoardingScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={()=>navigation.navigate("Home")}>Skip</Text>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content"/>
    <View style={styles.imgBackground}></View>
    <Swiper
      style={styles.wrapper}
      dot={
        <View
          style={{
            backgroundColor: 'gray',
            width: 15,
            height: 15,
            borderRadius: 7,
            marginLeft: 7,
            marginBottom:40,
            marginRight: 7
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: 'green',
            width: 15,
            height: 15,
            borderRadius: 7,
            marginLeft: 7,
            marginRight: 7,
            marginBottom: 40,
          }}
        />
      }
      paginationStyle={{
        bottom: 70
      }}
      loop={false}
    >
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require('./images/IMG4.png')}
          resizeMode="cover"
        />
        <Text style={styles.text}>Give Your Location</Text>
        <Text style={styles.para}>Help us find the best of Nigerian Restaurants close to you by giving us access to your location.</Text>
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require('./images/IMG5.png')}
          resizeMode="cover"
        />
        <Text style={styles.text}>Place your Order</Text>
        <Text style={styles.para}>Find your desired Nigerian meal and place your orders.</Text>
      </View>
      <View style={styles.slide}>
        <Image style={styles.image} source={require('./images/IMG6.png')} />
        <Text style={styles.text}>Get Delivery</Text>
        <Text style={styles.para}>Get your food delivered and enjoy your meal with friends and family</Text>
      </View>
    </Swiper>
    <TouchableOpacity onPress={()=> navigation.navigate("CreatAccount")} style={styles.icon}><ChevronRightIcon style={styles.icons} color='white' size={30}/></TouchableOpacity>
  </View>
)
}

const styles = StyleSheet.create({
text:{
fontSize: 14,
color: '#037F00'
},
wrapper: {
// backgroundColor: '#f00'
},

slide: {
flex: 1,
backgroundColor: 'transparent'
},
container: {
flex: 1
},

imgBackground: {
  width: 500,
  height:600,
backgroundColor: 'white',
position: 'absolute'
},

image: {
width: 350,
height: 350,
marginLeft:2,
marginRight:3
}, icon:{
borderStyle:'solid',
marginTop: 2,
backgroundColor:'green',
borderRadius: 50,
width:60,
height: 60,
position: 'absolute',
left: 170,
bottom: 10,
},
icons:{
position: 'absolute',
top:13,
right:15,
},
text:{
  fontSize: 24,
  fontWeight:700,
  color:'#333333',
  marginTop: 45,
  marginLeft: 125,
},
para:{
  fontSize: 15,
  fontWeight:500,
  color:'#333333',
  marginTop: 35,
  marginLeft: 70,
  marginRight:35,
}
});