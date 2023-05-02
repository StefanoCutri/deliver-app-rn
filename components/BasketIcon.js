import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Currency from "react-currency-formatter";
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigaton = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)

  return (
    <View className="absolute bottom-10 w-full z-50">
        <TouchableOpacity 
         onPress={() => navigaton.navigate("Basket")}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-lg text-white font-extrabold bg-[#01A296] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
            <Currency quantity={basketTotal} currency='USD'/>
        </Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon