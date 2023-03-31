import { FlatList, Pressable, StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import itemdatas from './itemdata';
import { Ionicons } from '@expo/vector-icons';
import itemstyle from './itemstyle';
import { useFonts } from "expo-font";
const Items = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../../assets/fonts/Roboto-Italic.ttf"),
  });
  return (
    <View>
      <Text style={{fontSize:18, fontWeight:700, marginLeft:15}}>Food</Text>
       <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={itemdatas}
        renderItem={({item}) =>(
          <Pressable style={itemstyle.itemview}>
          <Image style={itemstyle.itemimg} source={item.image}/>
            <View style={itemstyle.item}>
              <Text style={itemstyle.name}>{item.name}</Text>
              <Text style={itemstyle.name} numberOfLines={1}>{item.description.length < 10
                    ? `${item.description}`
              : `${item.description.substring(0, 14)}...`}</Text>
              <Text style={itemstyle.name}>${item.price}</Text>
              <Ionicons style={itemstyle.icon} name="heart-circle" size={30} color="green" />
            </View>
          </Pressable>
        ) }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Items

const styles = StyleSheet.create({})


