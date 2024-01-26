function change_logo() {
    console.log("kjsefjkkjsd");
    var logo1 = document.getElementById('dropdown-options-container_-34_option-16');
    let img = new Image();
    img.src =
        'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    logo1.appendChild(img);
    res.innerHTML = "Image Element Added.";
    console.log("kjsefjkkjsd");
}

var logo_button = document.getElementById("label-for-id_-53");
console.log(logo_button);
logo_button.onclick=change_logo;
console.log("TEST");