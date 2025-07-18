import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { ComicVine_config } from '@/services/api';

interface ComicProps{
    id: number;
    volume: any;
    name: string;
    image: any;
    api_detail_url: string;
    start_year: string;
    count_of_issues: string;
}

const ComicCard = ({id, volume, name, image, api_detail_url, count_of_issues, start_year}: ComicProps) => {

    const getGuid = (api: string) => {
      return api.split("/").filter(Boolean).pop()
    }


  return (
    <Link href={`/comic/${getGuid(api_detail_url)}`} asChild>
    <TouchableOpacity className='w-[30%]'>
      <Image 
      className='w-full h-52 rounded-lg' resizeMode='cover'
      source={{uri: image ? image?.super_url : "https://placehold.co/600x400/1a1a1a/ffffff.png"}} />

      <Text numberOfLines={2} className='font-bold text-white mt-2'>{name}</Text>
      
      <Text className='text-white text-sm'>Issues: {count_of_issues}</Text>
      <Text className='text-white gap-y-3'>{start_year}</Text>
    </TouchableOpacity>
    </Link>
  )
}

export default ComicCard