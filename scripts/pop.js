const main_element = document.getElementsByClassName("main");
const normal_img_name = "ak.png"
const popped_img_name = "popak.png"

function addClick() {
    main_element.lastChild.setAttribute("src", "/assets/" + popped_img_name);
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    console.log(`Key pressed ${name} \r\n Key code value: ${code}`)
    addClick()
}, false);

document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    console.log(`Key pressed ${name} \r\n Key code value: ${code}`)
    main_element.lastChild.setAttribute("src", "/assets/" + normal_img_name);
}, false);