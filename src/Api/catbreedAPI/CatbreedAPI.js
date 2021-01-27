//Fetches list of breeds and infromation on them
export const breedAPI = async (callback) => {
    const response = await fetch('https://api.thecatapi.com/v1/breeds?api_key=e4bfcae6-d168-4358-8ce3-7e16d1841713');
    const data = await response.json();
    let a = [];
    let x = 0;
    for (let i in data) {
        if (data[i]['image']) {
            a.push([data[i]['name'], data[i]['image']['url'], x, data[i]['description'], data[i]['origin'], data[i]['temperament'], data[i]['weight']['metric'], data[i]['wikipedia_url']])
        }
        else {
            a.push([data[i]['name'], null, x, data[i]['description'], data[i]['origin'], data[i]['temperament'], data[i]['weight']['metric'], data[i]['wikipedia_url']])
        }
        x++;
    }
    callback(a);
}