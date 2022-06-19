const input = document.querySelector("input");
const form = document.querySelector("form");
const inputContainer = document.querySelectorAll(".input_container");
console.log(inputContainer);
form.addEventListener("submit", function (event) {

    event.preventDefault();
    inputContainer.forEach(item => {
        // debugger
        console.log(item.querySelector("input"));
        const input = item.querySelector("input");
        if (!input.value) {
            item.classList.add("error")
        }
        else {
            item.classList.remove("error")
        }
        console.log(input.type);
        if (input.type === "email" && input.value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            item.classList.remove("error")
            item.querySelector(".error-email").classList.add("hide")
            item.querySelector(".error-empty").classList.add("show")
        } else if (input.type === "email") {
            item.classList.add("error")
            item.querySelector(".error-email").classList.add("show");
            debugger
            if (input.value) {
                item.querySelector(".error-empty").classList.add("hide")
            } else {
                item.querySelector(".error-empty").classList.remove("hide")
            }
        }
    })

});