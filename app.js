const jokes = document.querySelector('.jokes');
const addJoke = document.querySelector('#addJokes');
const addNewJokeText = document.querySelector('#newJoke');

jokes.addEventListener('click', () =>{
    addNewJoke();
})

const addNewJoke = async () => {
   const newJoketext = await getDadJoker();
   addNewJokeText.innerText = newJoketext;

//    const div = document.createElement('DIV');
//    div.classList.add("card");
//    const h3 = document.createElement('H3');
//    h3.classList.add("card-content");
//    h3.append(newJoketext);
//    div.append(h3)
//    addJoke.append(div);
}

const getDadJoker = async () => {
    try {
        const config = {headers: { Accept:'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (error) {
        console.log("ERRROORRR", error);
    }   
}
