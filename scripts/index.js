let ham_bar = document.getElementById('ham-bar');
let bar_h = document.getElementById('bar-h');
let bar_f = document.getElementById('bar-f');
let nav_menu = document.getElementById('nav');
let header = document.getElementById('header');
let togle_c = document.getElementById('togle-c');
let nav_items = document.getElementsByClassName('nav-list-item');

console.log(nav_items[0])

let isBarActive = true;

for (let item=0; item < nav_items.length; item++){
    nav_items[item].addEventListener('click', ()=>{
         setBarActiveStatus();
    });
}


document.addEventListener('scroll', (e)=>{
    togle_c.style.display = "none";
});


let setBarActiveStatus = ()=>{
    if (isBarActive == true) {
        bar_h.classList.add('active-menu-b-half');
        bar_f.classList.add('active-menu-b-full');
        nav_menu.style.display = "grid";
        nav_menu.classList.add('nav-fade-in');
        nav_menu.classList.remove('nav-fade-out');
        isBarActive = false;

    } else {
        bar_h.classList.remove('active-menu-b-half');
        bar_f.classList.remove('active-menu-b-full');
        nav_menu.classList.remove('nav-fade-in');
        nav_menu.classList.add('nav-fade-out');
        nav_menu.style.display = "none";

        isBarActive = true;
    }
}

ham_bar.addEventListener('click', setBarActiveStatus);