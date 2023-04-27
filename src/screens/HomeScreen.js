import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";
import client from "../../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);


  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <Header />

      <ScrollView>
        {/* Categories */}
        <Categories />
        {/* Featured*/}
        <FeaturedRow
          id={1}
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          id={2}
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        {/* Offers near you */}
        <FeaturedRow
          id={3}
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id={4}
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
