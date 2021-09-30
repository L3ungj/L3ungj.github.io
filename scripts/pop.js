const normal_img_name = "ak.png";
const popped_img_name = "popak.png";

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
    revert();
}, false);

document.addEventListener('mousedown', event => {
    addClick();
}, false);

document.addEventListener('mouseup', (event) => {
    revert();
}, false);

function addClick() {
    // console.log(main_element.children);
    document.getElementById("image").setAttribute("src", "/assets/" + popped_img_name);
    document.getElementById("counter").innerHTML = parseInt(document.getElementById("counter").innerHTML) + 1
};

function revert()
{
    var img_element = document.getElementById("image");
    img_element.setAttribute("src", "/assets/" + normal_img_name);
};