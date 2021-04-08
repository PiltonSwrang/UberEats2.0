var open = document.querySelector('.hamburger')
var sidebar = document.querySelector('.sidebar')
var close = document.querySelector('.close')
var backdrop = document.querySelector('#backdrop')
var navbar = document.querySelector('.navbar')

open.addEventListener('click', () => {
    console.log('clicked')
    sidebar.classList.remove('hidden')
    document.body.style.overflow = "hidden"
    backdrop.style.display = "block"
})

close.addEventListener('click', closeSidebar)
backdrop.addEventListener('click', closeSidebar)

function closeSidebar() {
    sidebar.classList.add('hidden')
    document.body.style.overflow = "auto"
    backdrop.style.display = "none"
}

document.body.onscroll = function (e) {
    if (document.body.scrollTop > 0) {
        navbar.classList.add('bg-white','shadow')
    } else {
        navbar.classList.remove('bg-white', 'shadow')

    }
}