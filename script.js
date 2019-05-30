/* global $ */
var playlist;
var youtubeLink;
var totalScore;
$(".question").hide();

function displayResult(){
    if(totalScore >= 6){
        return $(".result").html("<h2>Your playlist is " + playlist + "!</h2>");
    }else{
        return $(".result").html("<h2>Uh oh. You didn't answer every question. Go back and try again.</h2>");
    }
}

function placement(){
    if (totalScore > 5 && totalScore <= 10) {
        playlist = "Chill";
        //youtubeLink= str.link("https://www.youtube.com/playlist?list=PL3tcXMQSY-kpOI48iTBIBtmcK3vPwDP4c")
    }else if(totalScore > 10 && totalScore <= 15){
        playlist = "Upbeat";
        //youtubeLink= str.link("https://www.youtube.com/playlist?list=PL3tcXMQSY-koiPlf5Us_mbtM_nP5nmw-O")
    }else if(totalScore > 15 && totalScore <= 20){
        playlist = "Moody";
       //youtubeLink= str.link("https://www.youtube.com/playlist?list=PL3tcXMQSY-krzvf24poGX8ecl1YxAoSQe")
    }else if(totalScore > 20 && totalScore <= 24){
        playlist = "Curators' Favorites";
        //youtubeLink= str.link("https://www.youtube.com/playlist?list=PL3tcXMQSY-krzBjeRzisnmFAv6zb_8U0b")
    }
}

function description(){
    if(playlist === "Chill"){
        return $(".result").append("<h4>Perfect for when you want to relax!</h4> <br><iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PL3tcXMQSY-kpOI48iTBIBtmcK3vPwDP4c' frameborder='0' allow='accelerometer'; autoplay='true'; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    }else if(playlist === "Upbeat"){
        return $(".result").append("<h4>Someone's happy today!</h4> <br><iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PL3tcXMQSY-koiPlf5Us_mbtM_nP5nmw-O' frameborder='0' allow='accelerometer; autoplay='true'; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    }else if(playlist === "Moody"){
        return $(".result").append("<h4>I guess you're feeling some type of way today.</h4><br><iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PL3tcXMQSY-krzvf24poGX8ecl1YxAoSQe' frameborder='0' allow='accelerometer; autoplay='true'; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    }else if(playlist === "Favorites"){
        return $(".result").append("<h4>Time to discover some new music.</h4> <br><iframe width='560' height='315' src='https://www.youtube.com/embed/videoseries?list=PL3tcXMQSY-krzBjeRzisnmFAv6zb_8U0b' frameborder='0' allow='accelerometer; autoplay='true'; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    }
}

$("button").click(function() {
        playlist = "TBD";
        var q1Result = Number($("input[name='question1']:checked").val());
        $("#where").text(q1Result);
        var q2Result = Number($("input[name='question2']:checked").val());
        $("#aspect").text(q2Result);
        var q3Result = Number($("input[name='question3']:checked").val());
        $("#style").text(q3Result);
        var q4Result = Number($("input[name='question4']:checked").val());
        $("#drink").text(q4Result);
        var q5Result = Number($("input[name='question5']:checked").val());
        $("#why").text(q5Result);
        var q6Result = Number($("input[name='question6']:checked").val());
        $("#season").text(q6Result);
        totalScore = q1Result + q2Result + q3Result + q4Result + q5Result + q6Result;
        placement();
        displayResult();
        description();
});

$("#search-button").click(function(){
    var search = "https://api.giphy.com/v1/gifs/search?q=" + $("input").val() + "&rating=pg&api_key=RBkP7oANf3SFnCb2sGL5c7Sq3j4NBFFr";
  $.ajax({
      url: search,
      method: "GET",
      success: function(response) {
                var value = Math.floor(response.data.length * Math.random());
           $('.gallery').append("<img src='" + response.data[value].images.original.url + "'/>");
        console.log(value);
      },
      });
});