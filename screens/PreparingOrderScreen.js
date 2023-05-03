import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const gif = require("../assets/delivery.gif");
const PreparingOrderScreen = () => {

const navigation = useNavigation();

useEffect(() => {

    setTimeout(() => {
        navigation.navigate("Delivery")
    }, 4000);

}, [])


  if (!gif) return null;
  return (
    <SafeAreaView className="flex-1 bg-[#fcfcff] justify-center items-center">
      <Animatable.Image
        source={require("../assets/delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate color="black" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
