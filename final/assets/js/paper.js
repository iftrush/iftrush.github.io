loves = document.getElementsByClassName('love');
papers = document.getElementsByClassName('paper');



// like/unlike the same paper at once
for (let i = 0; i < loves.length; i++) {
    loves[i].addEventListener("click", () => {

        loves[i].querySelector("i").classList.toggle("fa-regular");
        loves[i].querySelector("i").classList.toggle("fa-solid");
        paperi = document.getElementsByClassName('paper' + i);
        for (let j = 1; j < paperi.length; j++) {
            paperi[j].querySelector("i").classList.toggle("fa-regular");
            paperi[j].querySelector("i").classList.toggle("fa-solid");
        }
    });
}


titles = document.getElementsByClassName('cat-title')

for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", () => {
        document.getElementsByClassName("container-stack")[i].classList.toggle("hidden");
        if (document.getElementsByClassName("container-stack")[i].classList.contains("hidden")) {
            titles[i].style.textDecoration = "none";
        } else {
            titles[i].style.textDecoration = "underline";
        }
    });  
}


