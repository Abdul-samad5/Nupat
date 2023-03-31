import { FlatList, Pressable, Image,StyleSheet, Text, View } from "react-native";
import React from "react";
import resturantdata from "./resturantdata";
import resturantstyle from './resturantstyle';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Resturants = () => {
  return (
    <View style={resturantstyle.resturantviewtop}>
      <Text style={resturantstyle.view}>Categories</Text>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={resturantdata}
          renderItem={({ item }) => (
            <View style={resturantstyle.rinsturantview}>
              <Image
                style={resturantstyle.rinsturaantimg}
                source={item.image}
              />
             <Text style={resturantstyle.view}>{item.name}</Text>
				  <View style={resturantstyle.rinsturanameview}>
					  
                <Text style={resturantstyle.rinsturaantname}>
                {/* <MaterialCommunityIcons name="home-account" size={24} color="black"/>#{item.price} */}
                <Entypo name="triangle-right" size={24} color="black" />{item.range}{" "}<FontAwesome style={resturantstyle.resturatname} name="bus" size={24} color="black" />{" "}{item.del}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Resturants;

const styles = StyleSheet.create({});
