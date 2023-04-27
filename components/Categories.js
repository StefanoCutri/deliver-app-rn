import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(
      `
      *[_type == "category"]
      `
    )
    .then(data => {
      setCategories(data)
    })
  }, [])
  

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
      {
        categories.map((category) => (
          <CategoryCard 
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
          />
        ))
      }
    </ScrollView>
  );
};

export default Categories;
