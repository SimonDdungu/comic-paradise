export const ComicVine_config= {
    base_url: process.env.EXPO_PUBLIC_COMIC_VINE_URL,
    PUBLIC_API_KEY: process.env.EXPO_PUBLIC_COMIC_VINE_KEY,
    headers: {
        accept: "application/json",
         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    }
}

export const fetchComics = async({query}: {query: string}) => {
    const api = query ? `/search/?format=json&query=${encodeURIComponent(query)}&resources=volume&api_key=` : "/volumes/?format=json&api_key=";


    const endpoint: string = ComicVine_config.base_url + api + ComicVine_config.PUBLIC_API_KEY;

    const res = await fetch(endpoint, {
        method: "GET",
        headers: ComicVine_config.headers,
    })
 
    if(!res.ok){
        console.log("actual error: ", res.status)
        console.log("This is the failed endpoint: ",endpoint)
        // @ts-ignore
        throw new Error("Failed to fetch comics: ", res.statusText)
    }

    const data = await res.json();


    return data.results
}

export const fetchComicsDetails = async({comicId}: {comicId: string}) => {
    try {
        const api = `/volume/${comicId}?format=json&api_key=`;
        const endpoint = ComicVine_config.base_url + api + ComicVine_config.PUBLIC_API_KEY;


        const res = await fetch(endpoint, {
            method: "GET",
            headers: ComicVine_config.headers
        })

        if(!res.ok){
            console.log("Failed to fetch comic details")
            //@ts-ignore
            throw new Error("Error: ", res.statusText)
        }

        const data = await res.json()

        return data.results

    } catch (error) {
        console.log("Fetching Comic Details failed")
        throw error
    }
}