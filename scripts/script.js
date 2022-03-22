function Appointment(firstName,lastName,service,style,date,time)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.service = service;
    this.style = style;
    this.date = date;
    this.time = time;
}

$(document).ready(function(){
    $("form#appointmentForm").submit(function(event){
        event.preventDefault();
        var firstName = $("input#firstName").val();
        var lastName = $("input#lastName").val();
        var service = $("input#service").val();
        var style = $("input#style").val();
        var date = $("input#date").val();
        var time = $("input#time").val();

        var newAppointment = new Appointment(firstName,lastName,service,style,date,time);

    });
});