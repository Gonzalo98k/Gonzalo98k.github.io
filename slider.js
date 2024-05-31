
let imgSlider = document.querySelector(".imgSlider")

const src = ["/assets/logo.jpg"]

let value = -100
value1 = -100

setInterval(() => {
    imgSlider.style.transition = "0.5s"
    imgSlider.style.marginLeft = `${value}%`

    value = value + value1

    if (value == -500) {
    imgSlider.style.transition = "0.5s"
        value = 0
    }

    console.log(value);
}, 3000);
