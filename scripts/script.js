<<<<<<< HEAD
let gallaryImages=document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidith =window.innerWidth;

if(gallaryImages){
    gallaryImages, forEach(function(image){
        image.onclick=function(){
            alert("it works")
        }

    });
}


document.getElementById('contact-form').submit();
    function messageValidate () {
        var customerName = document.getElementById("name").value;
        var customerEmail= document.getElementById("email").value;
        var customerMessage = document.getElementById("message").value;
        if (customerName == "" || customerEmail  == ""|| customerMessage  == ""){
        alert("Please enter your name, email and message.");
        return false;

        }
        else{
        alert ("Your message have been received we will get back to you!");
            }

function Appointment(firstName,lastName,service,style,date,time)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.service = service;
    this.style = style;
    this.date = date;
    this.time = time;
}

