
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
        }



    





// function validateForm() {
//     var name =  document.getElementById('name').value;
//     if (name == "") {
//         document.querySelector('.status').innerHTML = "Name cannot be empty";
//         return false;
//     }
//     var email =  document.getElementById('email').value;
//     if (email == "") {
//         document.querySelector('.status').innerHTML = "Email cannot be empty";
//         return false;
//     } 
//     var subject =  document.getElementById('subject').value;
//     if (subject == "") {
//         document.querySelector('.status').innerHTML = "Subject cannot be empty";
//         return false;
//     }
//     var message =  document.getElementById('message').value;
//     if (message == "") {
//         document.querySelector('.status').innerHTML = "Message cannot be empty";
//         return false;
//     }
//     document.querySelector('.status').innerHTML = "Sending...";
//   }




