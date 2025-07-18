import { icons } from '@/constants/icons'
import { useRouter } from 'expo-router';
import { Image, TextInput, View } from 'react-native'

interface searchBarProps {
  onPress?: () => void;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({onPress, placeholder, value, onChangeText}: searchBarProps) => {

  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.searchIcon} className='size-5'resizeMode='contain' tintColor="#ab8ff"/>
      <TextInput onPress={onPress} placeholder={placeholder} placeholderTextColor="#a8b5db" value={value} onChangeText={onChangeText} className='flex-1 ml-2 text-white'/>
    </View>
  )
}

export default SearchBar