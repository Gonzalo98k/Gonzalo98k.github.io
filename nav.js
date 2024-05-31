

let burgerbtn = document.querySelector(".burgerbtn")
let nav = document.querySelector(".nav")
let home = document.querySelector(".home")
let aboutUs = document.querySelector(".aboutUs")
let contacts = document.querySelector(".contacts")

let linksContainer = document.querySelector(".linksContainer")
let contador = 0


const active = ()=>{
    linksContainer.style.display = "flex"
    linksContainer.style.flexDirection = 'column'

    home.style.display = "block"
    aboutUs.style.display = "block"
    contacts.style.display = "block"
    nav.style.height = "150px"
    nav.style.width = "100%"
    aboutUs.style.marginTop = "15px"
    contacts.style.marginTop = "15px"
    contador++
}

const passive = ()=>{
    linksContainer.style.display = "flex"
    linksContainer.style.flexDirection = 'row'
    home.style.display = ""
    aboutUs.style.display = ""
    contacts.style.display = ""
    nav.style.height = "60px"
    nav.style.width = "100%"
    contador--
}

burgerbtn.addEventListener("click", ()=>{

    if (contador == 0) {
        active()
    }else{
        passive()
    }
})
