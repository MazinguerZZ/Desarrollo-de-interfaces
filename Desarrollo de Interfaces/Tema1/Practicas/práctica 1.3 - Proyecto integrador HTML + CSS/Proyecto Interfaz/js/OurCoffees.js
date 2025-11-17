let cafes = document.querySelectorAll("img");

cafes.forEach(image => {
    image.addEventListener("click", () => {
        if(event.type == "click" ){
            image.className = "cambiarTamaño"
        }else{
            image.className = "default"
        }
    })
});