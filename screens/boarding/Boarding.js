import { Alert, Image, Text, View } from "react-native";
import React from "react";

import Onboarding from "react-native-onboarding-swiper";
import onboardingstyle from "./images/onboardingstyle";


const Boarding = ({ Done }) => (
  // calling onboarding from it's screen

  <Onboarding
    // naviget when skip
    onSkip={() => {
      Alert.alert("Warning", "don't skip, please next");
    }}
    titleStyles={{ color: "black" }}
    subTitleStyles={{ color: "black", marginBottom: 300 }}
    containerStyles={{
      height: "60%",
      width: "100%",
      paddingTop: 10,
    }}
    imageContainerStyles={{
      height: "65%",
      width: "100%",
    }}
    bottomBarHeight={50}
    showPagination={true}
    bottomBarColor="#037F00"
    DoneButtonComponent={Done}
    pages={[
      {
        backgroundColor: "#999",
        image: (
          <Image
            style={onboardingstyle.onboardimg}
            source={require("./images/img.png")}
          />
        ),
        title: "Accra Ghana",
        subtitle: "Shop on the way",
      },
      {
        backgroundColor: "#999",
        image: (
          <Image
            style={onboardingstyle.onboardimg}
            source={require("./images/img2.jpg")}
          />
        ),
        title: "Place Your Order",
        subtitle: "Feel the test of it quality",
      },
      {
        backgroundColor: "#999",
        image: (
          <Image
            style={onboardingstyle.onboardimg}
            source={require("./images/img3.jpg")}
          />
        ),
        title: "Get Delivery",
        subtitle: "Beautiful, isn't it?",
      },
    ]}
  />
);

export default Boarding;
