import React, { useLayoutEffect } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import Header from "./Header";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <Header />
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
