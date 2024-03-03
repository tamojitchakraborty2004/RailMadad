const toggleButton = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementsByClassName('navbar-links');

toggleButton.addEventListener('click', function() {
    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.toggle('active');
    }
});
const stars = document.querySelectorAll(".stars i");
// console.log(stars)
stars.forEach(( star , index1 ) => {
    star.addEventListener("click", () =>{
        // console.log(index1);
    stars.forEach((star, index2)=>{
        // console.log(index2);
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
    });
});

// var links = document.querySelectorAll('.nav-link');

// // Add click event listener to each link
// links.forEach(function(link) {
//   link.addEventListener('click', function(event) {
//     event.preventDefault();

//     // Remove 'active' class from all links
//     links.forEach(function (el) {
//       el.classList.remove('active');
//     });

//     // Add 'active' class to the clicked link
//     link.classList.add('active');
//   });
// });


document.getElementById('open-login-btn').addEventListener('click', function() {
	document.getElementById('login-popup').style.display = 'block';
});

document.getElementById('close-login-btn').addEventListener('click', function() {
	document.getElementById('login-popup').style.display = 'none';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var userid = document.getElementById('userid').value;
	var password = document.getElementById('password').value;
	// var captcha = document.getElementById('captcha').value;

	if (!userid || !password || !captcha) {
		alert('Please fill in all fields');
		return;
	}

	if (captcha !== grecaptcha.getResponse()) {
		alert('Invalid captcha');
		return;
	}

	// Perform login logic here

	document.getElementById('login-popup').style.display = 'none';
});

function generateCaptcha() {
    const captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';

    for (let i = 0; i < 5; i++) {
        captcha += captchaChars.charAt(Math.floor(Math.random() * captchaChars.length));
    }

    return captcha;
}

// Validate the entered captcha
function validateCaptcha() {
    const captcha = document.getElementById('captcha').innerText;
    const userInput = document.getElementById('captchaInput').value;

    if (userInput === captcha) {
        alert('Captcha is correct! Proceed with login.');
    } else {
        alert('Captcha is incorrect. Please try again.');
        generateNewCaptcha();
    }
}

// Generate a new captcha and update the display
function generateNewCaptcha() {
    const newCaptcha = generateCaptcha();
    document.getElementById('captcha').innerText = newCaptcha;
}

// Initialize the captcha on page load
window.onload = function() {
    generateNewCaptcha();
}
document.getElementById('open-signup-btn').addEventListener('click', function() {
	document.getElementById('signup-popup').style.display = 'block';
});

document.getElementById('close-signup-btn').addEventListener('click', function() {
	document.getElementById('signup-popup').style.display = 'none';
});
document.getElementById('close-login-btn').addEventListener('click', function() {
	document.getElementById('login-popup').style.display = 'none';
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var name = document.getElementById('name').value;
	var signpassword = document.getElementById('signpassword').value;
	var copassword = document.getElementById('copassword').value;

	if (!name || !signpassword || !copassword) {
		alert('Please fill in all fields');
		return;
	}

	if (signpassword !== copassword) {
		alert('Password does not match');
		return;
	}
    
	document.getElementById('signup-popup').style.display = 'none';
});
function showFields() {
    var select = document.getElementById("selectOption");
    var additionalFields = document.getElementById("additionalFields");

    if (select.value === "showFieldsOption") {
        additionalFields.style.display = "block";
    } else {
        additionalFields.style.display = "none";
    }
    var select = document.getElementById("selectO");
    var divyang = document.getElementById("divyang");

    if( select.value == "showField"){
        divyang.style.display ="block";
    }
    else{
        divyang.style.display ="none"
    }
    
}
function showField() {
    var select = document.getElementById("select1");
    var luggage = document.getElementById("luggage");

    if (select.value === "lug") {
        luggage.style.display = "block";
    } else {
        luggage.style.display = "none";
    }
    var goods = document.getElementById("goods");

    if( select.value =="good"){
        goods.style.display="block";
    }
    else{
        goods.style.display="none";
    }

}
function show(){
    var select = document.getElementById("select2");
    var train = document.getElementById("train");
    if( select.value == "trai"){
        train.style.display ="block";
    }
    else{
        train.style.display ="none"
    }
    var stoppage = document.getElementById("stoppage");
    if( select.value == "stopp"){
        stoppage.style.display ="block";
    }
    else{
        stoppage.style.display ="none"
    }
    var passenger = document.getElementById("passenger");
    if( select.value == "passenge"){
        passenger.style.display ="block";
    }
    else{
        passenger.style.display ="none"
    }
}
function showf(){
    var select = document.getElementById("select3");
    var trai= document.getElementById("trai");
    if(select.value == "tra"){
        trai.style.display ="block"
    }
    else{
        trai.style.display ="none"
    }
    var stat= document.getElementById("stat");
    if(select.value == "stati"){
        stat.style.display ="block"
    }
    else{
        stat.style.display ="none"
    }
}
