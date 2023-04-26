import React, { useLayoutEffect } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";

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
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
