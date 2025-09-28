const form = document.getElementById("frm")
const username = document.getElementById("username")
const email = document.getElementById("mail")
const password = document.getElementById("password")
const message = document.getElementById("msg")
form.addEventListener("submit", preventDefault)

function preventDefault(e) {
    e.preventDefault()
        const value = username.value
        alert(`Hello ${value}`)
    console.log(password.value)
}