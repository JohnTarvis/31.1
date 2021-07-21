const fNumber = 13;
const favoriteNumberURL = `http://numbersapi.com/${fNumber}?json`;

window.onload = init;

function init(){
    document.getElementById('fatn').innerHTML = fNumber;
    const promise1 = axios.get(favoriteNumberURL);
    const promise2 = axios.get(favoriteNumberURL);
    const promise3 = axios.get(favoriteNumberURL);
    const promise4 = axios.get(favoriteNumberURL);

    const fact1 = document.getElementById('fact1');
    const fact2 = document.getElementById('fact2');
    const fact3 = document.getElementById('fact3');
    const fact4 = document.getElementById('fact4');

    promise1.then(data=> {
        fact1.innerHTML = data.data.text;
        return promise2;
    }).then(data => {
        fact2.innerHTML = data.data.text;
        return promise3;
    }).then(data => {
        fact3.innerHTML = data.data.text;
        return promise4;
    }).then(data => {
        fact4.innerHTML = data.data.text;
    }).catch(err=>{
        console.log('error..',err);
    });
}



