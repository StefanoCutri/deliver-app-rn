import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description, featuredCategory}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard 
        id={123}
        imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg"
        title="YO! Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a short desc"
        dishes={[]}
        long={20}
        lat={0}
        />
                <RestaurantCard 
        id={123}
        imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg"
        title="YO! Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a short desc"
        dishes={[]}
        long={20}
        lat={0}
        />
                <RestaurantCard 
        id={123}
        imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg"
        title="YO! Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a short desc"
        dishes={[]}
        long={20}
        lat={0}
        />
                <RestaurantCard 
        id={123}
        imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg"
        title="YO! Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a short desc"
        dishes={[]}
        long={20}
        lat={0}
        />
                <RestaurantCard 
        id={123}
        imgUrl="https://assets.unileversolutions.com/recipes-v2/237341.jpg"
        title="YO! Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a short desc"
        dishes={[]}
        long={20}
        lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow