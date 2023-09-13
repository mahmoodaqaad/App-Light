//  =========================================munubar active header =========================================

document.querySelector(".iconMenu").onclick = () => {
    document.querySelector(".navbar").classList.toggle("active")
}

// ==========================header n=backrtouund =====================================
let header = document.querySelector("header")
window.onscroll = () => {

    if (window.scrollY >= 90) {
        header.classList.add("white")
    }
    else {
        header.classList.remove("white")

    }
}

//==========================  mesage ==========================

let next = document.querySelector(".testimonials .container .right")
let pru = document.querySelector(".testimonials  .container .left")
let bosx = document.querySelector(".testimonials  .container .boxs")

let boxshow = 0;
let messages = document.getElementsByClassName("messages")
let arrymsg = Array.from(messages)
checked()
next.onclick = () => {
    boxshow++
    checked()
}
pru.onclick = () => {
    boxshow--
    checked()
}

// checked()

function checked() {
    arrymsg.forEach(element => {
        element.classList.remove("active")
    });
    messages[boxshow].classList.add("active")



    if (boxshow == 0) {
        console.log("pue")

        pru.classList.add("des")
    }
    else {
        console.log("no pue")
        pru.classList.remove("des")
    }

    // =============next =============


    if (boxshow == 2) {
        console.log("next")
        next.classList.add("des")
    }
    else {
        console.log("no next")

        next.classList.remove("des")
    }



}



// effect 



ScrollReveal({
    // reset: true,//عشان يعيد كل مرة
    distance: '80px',//مسافة البدء
    duration: 1200,//مدة التشغيل
    delay: 80//زمن التشغيل
});
ScrollReveal().reveal('.landing .info,.contact .inputs', { origin: 'left' });
ScrollReveal().reveal('.phoneImage ,.contact .address', { origin: 'right' });
ScrollReveal().reveal(' .button ,  .boxs .box:not(.testimonials .container .box', { origin: 'bottom' });
