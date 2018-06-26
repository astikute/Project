// Gallery pop-up
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// Form validation
$(document).ready(function(){
    $('#submitBtn').click(function(){
        var message1 = $("<p></p>").text("Please fill out the required fields(*)!").addClass("text-danger");
        var message2 = $("<p></p>").text("Please agree with terms and conditions!").addClass("text-danger");
        var message3 = $("<p></p>").text("Passwords are not the same!").addClass("text-danger");
        var message4 = $("<p></p>").text("Registration is complited!").addClass("text-success");
        var message5 = $("<p></p>").text("Password are not valid.").addClass("text-danger");
        var isValid = true;
        if ($('p').length) {
            $('p').remove();
        }
        $('input[type=text]').each(function() {
            if ($(this).val() == "") {
                isValid = false;
            }
        });
        if (!isValid) {
            $('form').prepend(message1);
        } else if ($('#country').val() == "Country*") {
            $('form').prepend(message1);
            isValid = false;
        }
        if ($('#pw1').val() != $('#pw2').val()) {
            $('form').prepend(message3);
            isValid = false;
        } else if ($('#pw1').val().length < 8) {
            $('form').prepend(message5);
            isValid = false;
        } 
        if (!$('#checkbox').is(':checked')) {
            $('form').prepend(message2);
            isValid = false;
        }
        if (isValid) {
            $('form').prepend(message4);
        }
    })
})

//Chat
$('#sendBtn').click(function(){

    if ($('#username').val() && $('#message').val()){
        var username = $('#username').val();
        $('#username').val("");
        var message = $('#message').val();
        $('#message').val("");
        var previousMsg = $('#chatArea').html();
        var msgTime = new Date();
        var min = msgTime.getMinutes();
        var month = msgTime.getMonth();
        month++
        min = min + "";
        month = month + "";
        if (min.length == 1){
            min = "0" + min;
        }
        if (month.length == 1){
            month = "0" + month;
        }
        var date = msgTime.getDate() + "." + month + "." + msgTime.getFullYear() + " " + msgTime.getHours() + ":" + min;
        $('#chatArea').html(previousMsg+'<p id="userArea"><strong>'+username+'</strong>'+" "+date+'<br>'+message+'</p>');
    }
})