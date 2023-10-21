const firebaseConfig = {
    apiKey: "AIzaSyAVe63IL6kIr9FhNeBK09dX-CWjyJyCeSQ",
    authDomain: "ttiot-181bf.firebaseapp.com",
    projectId: "ttiot-181bf",
    storageBucket: "ttiot-181bf.appspot.com",
    messagingSenderId: "557286712265",
    appId: "1:557286712265:web:b6c52ba14fa30af021fe18",
    measurementId: "G-XME3XNJTHB"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var nhietdo = document.getElementById('nhietdo');
var dbRef = firebase.database().ref().child('nhietdo');
var doam = document.getElementById('doam');
var dbRef2 = firebase.database().ref().child('doam');
dbRef.on('value', snap => nhietdo.innerText = snap.val()+ "   °C");
dbRef2.on('value', snap => doam.innerText = snap.val()+ "   %");

firebase.database().ref("/led").on("value", function(snap){
    var led = snap.val()
    document.getElementById("denId_01").src = (led == "1")?"./img/led_on.png":"./img/led_off.png";
});

firebase.database().ref("/quat").on("value", function(snap){
    var quat = snap.val()
    document.getElementById("quatgio").src = (quat == "1")?"img/quat-on.gif":"./img/quat_off (2).png";
});



const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toogle("sticky", this.window.scrollY > 60)
})
/*==========link menu=============== */
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toogle('bx-x');
    navbar.classList.toggle('open');
}


/*========== button led=======*/
var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");

btnOn.onclick = function(){
    document.getElementById("denId_01").src="./img/led_on.png"
    dbRef = firebase.database().ref().update({ "led": 1});
}

btnOff.onclick = function(){
    document.getElementById('denId_01').src = "./img/led_off.png"
    dbRef = firebase.database().ref().update({ "led": 0});
}
/*========== button quat gió=======*/
var btnOn = document.getElementById("btnOnId_02");
var btnOff = document.getElementById("btnOffId_02");

btnOn.onclick = function(){
    document.getElementById("quatgio").src="img/quat-on.gif.jpg"
    dbRef = firebase.database().ref().update({ "quat": 1});
}

btnOff.onclick = function(){
    document.getElementById('quatgio').src = "./img/quat_off (2).png"
    dbRef = firebase.database().ref().update({ "quat": 0});
}



