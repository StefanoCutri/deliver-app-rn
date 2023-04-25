import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function HomeScreen() {
  return (
    <StyledView className="flex-1 items-center justify-start">
    <StyledText className="text-red-600">
      Try editing me! 🎉
    </StyledText>
  </StyledView>
  )
}