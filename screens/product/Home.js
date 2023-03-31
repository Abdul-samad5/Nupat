import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProductScreen from "./ProductScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Profile from "./profile/Profile";
import Cart from "./cart/Cart";
import WhishList from "./wishlist/WhishList";
const Tab = createMaterialBottomTabNavigator();
const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => (
        <View>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
      ),
      headerLeft: () => (
        <View>
          <EvilIcons name="navicon" size={24} color="black" />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="black"
      barStyle={{ backgroundColor: "white", color: "black" }}
      tabBarIcon={{ focused: "green", color: "red" }}
    >
      <Tab.Screen
        name="Home"
        component={ProductScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-account"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="wishlist"
        component={WhishList}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-outline" size={24} color="black" />
          ),
        }}
      />
       <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color="black"
            />
          ),
        }}
      />
     
      
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
