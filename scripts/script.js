
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




