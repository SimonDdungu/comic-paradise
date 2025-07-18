import SearchBar from "@/components/searchBar";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import useFetch from "@/hooks/useFetch";
import { fetchComics, fetchComicsDetails } from "@/services/api";
import ComicCard from "@/components/ComicCard";

const HomeUI = () => {
  const router = useRouter();

  const {
    data: comics,
    loading: comicsLoading,
    error: comicsError,
    refetch,
  } = useFetch(() => fetchComics({ query: "" }));


  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View>
          <Image
            source={images.backgroundImage}
            className="absolute top-5 z-0 w-full"
          />
          <Image
            source={images.logo}
            className="size-20 rounded-xl mt-20 mb-5 mx-auto "
          />
        </View>

        {/*
        <TouchableOpacity onPress={refetch}>
          <Text className="px-5 py-5 mb-5 w-max bg-blue-600 text-white rounded-lg">Manually Fetch Data</Text>
        </TouchableOpacity>
        */}

        {comicsLoading ? (
          <ActivityIndicator
            size="large"
            color="#000ff"
            className="mt-10 self-center"
          />
        ) : comicsError ? (
          <Text className="text-lg text-white mt-5 mb-3">
            Error: {comicsError?.message}
          </Text>
        ) : (
          <View>

            <>
              <Text className="text-lg text-white mt-5 mb-3 font-semibold">
                Comic Books
              </Text>

              <FlatList
                data={comics}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                className="mt-2 pb-32"
                scrollEnabled={false}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                renderItem={({ item }) => <ComicCard {...item} />}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeUI;
