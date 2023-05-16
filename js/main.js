
function search(){
    fetch("https://thecatapi.com/")
    .then(data=>data.json())
    .then(json=>{
        document.getElementById("content").src=json[0].url
    })
}

window3.onload = () => {
    search();
}

gerar.addEventListener("click", () => search());