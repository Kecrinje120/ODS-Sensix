function hamburger() {
    var equis = document.querySelector('.hamburger');
    var nav = document.querySelector('nav');
    equis.classList.toggle("transicion");
    nav.classList.toggle("transicion");

    var li = document.querySelector('ul li');
    li.classList.toggle("visible");
}
