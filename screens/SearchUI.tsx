import ComicCard from "@/components/ComicCard";
import SearchBar from "@/components/searchBar";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchComics } from "@/services/api";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ActivityIndicator, FlatList, Image, View } from "react-native";

const SearchUI = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data: comics,
    loading: comicsLoading,
    error: comicsError,
    refetch,
    reset,
  } = useFetch(() => fetchComics({ query: searchQuery }), false);

  useEffect(() => {
    async function loadcomics() {
      if (searchQuery.trim()) {
        await refetch();
      } else {
        reset();
      }
    }

    const timeoutSearch = setTimeout(loadcomics, 500);

    return () => clearTimeout(timeoutSearch);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <FlatList
        data={comics}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        ListEmptyComponent={
          !comicsLoading && !comicsError ? (
            <View style={{ flex: 1, marginTop: 20 }}>
              <Text className="text-white text-center">
                {searchQuery.trim()
                  ? "We don't have that Comic Book"
                  : "Search for a Comic Book"}
              </Text>
            </View>
          ) : null
        }
        ListHeaderComponent={
          <>
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
              <Text className="px-5 py-5 w-max bg-blue-600 text-white rounded-lg">
                Manually Fetch Data
              </Text>
            </TouchableOpacity>
             */}
            <View className="my-5">
              <SearchBar
                placeholder="Search for a Comic Book"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />
            </View>

            {comicsLoading && (
              <ActivityIndicator
                size="large"
                color="#000ff"
                className="mt-10 self-center"
              />
            )}

            {comicsError && (
              <Text className="text-red-500 px-5 my-3">
                Error: {comicsError.message}
              </Text>
            )}

            {!comicsLoading &&
              !comicsError &&
              searchQuery.trim() &&
              comics?.length > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search Results for{" "}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
          </>
        }
        className="px-5"
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        renderItem={({ item }) => <ComicCard {...item} />}
      />
    </View>
  );
};

export default SearchUI;
