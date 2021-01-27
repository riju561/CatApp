//Fetches random cat images
export const imgAPI = async (callback) => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=9&api_key=e4bfcae6-d168-4358-8ce3-7e16d1841713');
    const data = await response.json();
    let arr = [];
    for (let i = 0; i < 9; i++) {
        arr.push(data[i]['url'])
    }
    callback(arr);
}