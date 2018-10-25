$(document).ready(function(){

    var isLoggedIn = false


    $(".loginButton").click(function(){
        var username = $("#userLogin").val();
        var userpassword = $("#passwordLogin").val();

        if( username == 'johan@medie.se' && userpassword == 'hej'){
            $(".columnRight").empty();
            
            $(".card").css("visibility", "visible")
            $(".logoutButton").show();
            isLoggedIn = true
            $(".wrongLogin").hide();
            $(".loginButton").hide();
            $("#userLogin").hide();
            $("#passwordLogin").hide();
        }
        else {
            $(".wrongLogin").prepend("Har du glömt ditt lösenord?");
        }
        

    });

    $(".logoutButton").click(function(){
        window.location.href = "index.html";

    });

    $(".logoutButton").hide();

    var todaysDate = new Date();
    $(".todaysDate").text(todaysDate.toDateString());



})