import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

export default function saved() {
  return (
    <View className='flex-1 bg-primary px-10'>
          <View className='flex-1 justify-center items-center'>
            <Image source={icons.saved} className='size-10' tintColor="#Fff" />
            <Text>Profile</Text>
          </View>
        </View>
  )
}