import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg" title="Testing"/>
      <CategoryCard imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg" title="Testing"/>
      <CategoryCard imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg" title="Testing"/>
      <CategoryCard imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg" title="Testing"/>
      <CategoryCard imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg" title="Testing"/>
      <CategoryCard imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg" title="Testing"/>
      <CategoryCard imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg" title="Testing"/>
      <CategoryCard imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg" title="Testing"/>
    </ScrollView>
  );
};

export default Categories;
