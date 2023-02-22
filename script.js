let imageEl = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let textEl = document.getElementById("qrText")
let btnEl = document.getElementById("qrBtn")

btnEl.addEventListener("click", function() {
    if(textEl.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textEl.value
        imageEl.classList.add("show-img")
    }else{
        textEl.classList.add("error")
        setTimeout(() => {
            textEl.classList.remove("error")
        }, 1000);
    }

})