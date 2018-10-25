$(document).ready(function(){

    sessionStorage.mittNamn = "Janne Kalas";

    //Namn till DIV
    $("button").click(function(){
        $("p").text(sessionStorage.mittNamn);
    })




})