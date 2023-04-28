import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {params: {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  }} = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <ScrollView>
      <View className="relative mt-64">
       <Image  resizeMode={'cover'}
       style={{width: "100%", height: 220}}
        className="w-full h-56 bg-gray-300 p-4"
        source={{
          uri: urlFor(imgUrl).url()
        }}
       />
       <TouchableOpacity className="absolute top-1 left-5 p-2 bg-gray-100 rounded-full">
        <ArrowLeftIcon size={20} color="#00CCBB"/>
       </TouchableOpacity>
      </View>
        <Text className="absolute top-1 left-5 p-2 bg-gray-100 rounded-full text-">{title}</Text>
    </ScrollView>
  )
}

export default RestaurantScreen