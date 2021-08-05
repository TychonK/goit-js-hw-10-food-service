const themeSwitch = document.querySelector("#theme-switch-toggle");

const body = document.querySelector("body");

//localStorage.clear()

const themeChange = function() {
    if (themeSwitch.checked) {
        localStorage.clear()
        localStorage.setItem("theme", "dark-theme")
        body.classList.remove("light-theme")
        body.classList.add(localStorage.getItem("theme"))
        
    } else {
        localStorage.clear()
        localStorage.setItem("theme", "light-theme")
        body.classList.remove("dark-theme")
        body.classList.add(localStorage.getItem("theme"))
    }
}

if (localStorage.getItem("theme") === "dark-theme") {
    themeSwitch.checked = true;
    body.classList.add("dark-theme")
}

themeSwitch.addEventListener("click", themeChange)


const source = document.querySelector('#item-template').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template(menuData);