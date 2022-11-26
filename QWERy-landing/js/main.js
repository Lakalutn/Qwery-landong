let offset = 1461;

const nextBtn = document.querySelector(".nextBtn")
const prevBtn = document.querySelector(".prevBtn")



nextBtn.addEventListener("click", function (){
    const track = document.querySelector(".track")
    track.style.left = -offset + "px"
    offset += 1461
    if(offset > 4382){
        offset = 0
    }
});

prevBtn.addEventListener("click", function (){
    const track = document.querySelector(".track")
    offset += 1461
    track.style.left = offset + "px"
});