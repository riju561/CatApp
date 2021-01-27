//Fetches random 9 cat facts 
export const factAPI = async (callback) => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=9'); 
    const data = await response.json();
    let a=[];
    for(let i=0;i<9;i++){
        a.push(data[i]['text']);
    }
    callback(a);
}