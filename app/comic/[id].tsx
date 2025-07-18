import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { fetchComicsDetails } from "@/services/api";
import useFetch from "@/hooks/useFetch";
import { RenderHTMLContent } from "@/components/renderHtml";
import { icons } from "@/constants/icons";

interface ComicDescriptionProps {
  label: string;
  value: any;
}

const ComicDescription = ({ label, value }: ComicDescriptionProps) => {
  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-LIGHT-200 font-normal text-xl mb-5">{label}</Text>
      <RenderHTMLContent html={value} />
    </View>
  );
};

const Details = () => {
  const { id } = useLocalSearchParams();

  const {
    data: comic,
    loading: comicsLoading,
    error: comicsError,
    refetch,
  } = useFetch(() => fetchComicsDetails({ comicId: id as string }));


  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            className="w-full h-[550px]"
            resizeMode="stretch"
            source={{ uri: comic?.image?.super_url }}
          />
          <TouchableOpacity
            onPress={router.back}
            className="absolute ml-3 top-14 py-3 px-5 bg-blue-800/90 rounded-full flex-row self-start z-10"
          >
            <Image
              source={icons.arrow}
              className="size-5 mr-1 mt-0.5 rotate-180"
              tintColor="#FFF"
            />
            <Text className="text-white font-semibold text-base">Go back</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity onPress={refetch}>
          <Text className="px-5 py-5 mb-5 w-max bg-blue-600 text-white rounded-lg">
            Manually Fetch Data
          </Text>
        </TouchableOpacity> */}

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-3xl">{comic?.name}</Text>

          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-LIGHT-200 text-sm">{comic?.start_year}</Text>
            <Text className="text-LIGHT-200 font-bold">•</Text>
            <Text className="text-LIGHT-200 text-sm">
              Issues: {comic?.count_of_issues}
            </Text>
          </View>

          {/* <View className='flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2'>

          </View> */}

          <ComicDescription
            label={"Comic Description"}
            value={comic?.description}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
