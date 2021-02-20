let input = document.querySelector("#input");
let searchBtn =document.querySelector("#search");
let apiKey = '4341c1f0-8595-4b89-b612-47e3d1bf4614';

let notFound = document.querySelector("#not_found")

searchBtn.addEventListener('click',function(e){
    e.preventDefault();

    // get input data

    let word =input.value;

    // call apit get data

    if(word == ''){
        alert('word is required');
        return;      
    }

    getData(word);
})

async function getData(word){
    // ajax call
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);

    const data = await response.json();
    // if empty result
    if(!data.length){
        return;
    }
}