



const BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAA8N4AEAAAAACD2zSabdhBqoYaOa2uvJVYzkoFw%3DSRfYr0YrokXkwJC95Q5HXKSOm0TNdFWd8ErAAvF48Rabt6Ibll" // X api authenticator token

async function searchTweets(keyword) {
    const url = new URL("https://api.x.com/2/tweets/search/recent") //api url
    url.searchParams.append("query",`${keyword} -is:retweet lang:en`) // query with key word , only english
    url.searchParams.append("max_results", '10')
    url.searchParams.append("tweet.fields", "public_metrics,created_at")

    const response = await fetch(url,{ //call api
        headers:{
            "Authorization": `Bearer ${BEARER_TOKEN}` //give your token
        }
   });

    

   if(!response.ok) {   //Error catching
      throw new Error(`Error:${response.status}`)
    }

   const data = await response.json()
   return data.data || []; 
}



(async () => {


    const keyWord1 = await searchTweets("Nasa")
    const keyWord2 = await searchTweets("SpaceX")

    console.log("Nasa sample:", keyWord1[0])
    console.log("SpaceX sample:", keyWord2[0])
})();
    



