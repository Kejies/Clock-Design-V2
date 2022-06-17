setInterval(() => {

    let jam = document.getElementById('jam');
    let menit = document.getElementById("menit");
    let detik = document.getElementById('detik');
    let sm = document.getElementById('sm');
    let jm = document.getElementById('jm');
    let mn = document.getElementById('mn');
    let dt = document.getElementById('dt');
    let dt2 = document.getElementById('dt2');


    let j = new Date().getHours();
    let m = new Date().getMinutes();
    let d = new Date().getSeconds();

    let am = j >= 12 ? "PM" : "AM";

    if (j > 12 && am == "AM") {
        j = j - 24;
    }

    j = (j < 10) ? "0" + j : j
    m = (m < 10) ? "0" + m : m
    d = (d < 10) ? "0" + d : d

    jam.innerHTML = j  + " :";
    menit.innerHTML = m + " :";
    detik.innerHTML = d;
    sm.innerHTML = am;

    jm.style.strokeDashoffset = 511 - (511 * j) / 24;
    mn.style.strokeDashoffset = 566 - (566 * m) / 60;
    // 60 menit
    dt.style.strokeDashoffset = 635 - (635 * d) / 60;
    dt2.style.strokeDashoffset = 565 - (565 * d) / 60;
})