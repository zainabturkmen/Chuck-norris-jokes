// 

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const URL = "https://api.chucknorris.io/jokes/random";


btn.addEventListener("click", ()=> {
    
});

function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState !== 4) return;
    }
};
