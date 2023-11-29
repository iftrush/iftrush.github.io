cats = document.getElementsByClassName('cat');
let index = 0;

function slideCategory() {
    for (let i = 0; i < cats.length; i++) {
        if (!cats[i].classList.contains('hidden')) {
            index = i;
            break;
        }
    }
    cats[index].classList.add('hidden');
    var id = cats[index].id;
    document.getElementById('li-' + id).style.color = "#27374d";
    index++;
    index %= cats.length;
    cats[index].classList.remove('hidden');
    var id = cats[index].id;
    document.getElementById('li-' + id).style.color = "#069bf7";
}

document.getElementById("main-right").onclick = slideCategory;


setInterval(() => {
    cats[index].classList.add('hidden');
    var id = cats[index].id;
    document.getElementById('li-' + id).style.color = "#27374d";
    index++;
    index %= cats.length;
    cats[index].classList.remove('hidden');
    var id = cats[index].id;
    document.getElementById('li-' + id).style.color = "#069bf7";
}, 20000);





