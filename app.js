
//PARALLAX
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.6 + "px";
})
//PARALLAX END

// NAV

const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');


document.onclick = function (e) {
    if (e.target.id !== 'toggle' && e.target.id !== 'sidebar') {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}

toggle.onclick = function () {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}