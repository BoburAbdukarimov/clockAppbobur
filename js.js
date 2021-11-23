function clock() {
    let soat = document.querySelector(".soatt");
    let minute = document.querySelector(".minutes");
    let secondes = document.querySelector(".secondes");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = "AM";
    if(h>12){
        h= h-12;
        var am = "Am"
    }

    h= (h < 0) ? "0" + h:h
    m= (m < 0) ? "0" + m:m
    s= (s < 0) ? "0" + s:s

    soat.innerHTML =h;
    minute.innerHTML =m;
    secondes.innerHTML =s;
}
var interval = setInterval(clock, 1000)