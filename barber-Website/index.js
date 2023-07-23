var menubtn = document.getElementById("menuBtn");
var nav = document.getElementById("sideNav");
var btn = document.getElementById("menu");

nav.style.right = '-250px';

menubtn.onclick = ()=>{
    if(nav.style.right == '-250px'){
        nav.style.right='0'
        menubtn.style.transform = 'rotate(-180deg)';
        btn.src="./Barber_Shop_img/close.png";
    }
    else{
        nav.style.right = '-250px';
        menubtn.style.transform = 'rotate(180deg)';
        btn.src="./Barber_Shop_img/menu.png" 
    }
}
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});