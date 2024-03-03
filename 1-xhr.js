function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState !== 4) return;
        if (xhr.status === 200) {
            img.classList.add("shake-img")
            const {value:joke} = JSON.parse(xhr.responseText);
            content.textContent = joke;
            setTimeout(() => {
                img.classList.remove("shake-img");
            }, 1000);
        }
        else{
            console.log({
             status:xhr.status,
             Text: xhr.statusTextN
            });
        }
    }
};