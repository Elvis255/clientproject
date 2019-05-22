/* global $ */
var playlist;
var imgSrc;
var totalScore;
var youtubeLink;
$(".question").hide();
function displayResult(){
    if(totalScore >= 15){
        return $(".result").html("");
    }else{
        return $(".result").html("");
    }
}
function placement(){
    if (totalScore >= 6 && totalScore <= 10) {
        playlist = "Chill";
        imgSrc="";
        //youtubeLink= str.link("https://www.youtube.com/playlist?list=PL3tcXMQSY-kpOI48iTBIBtmcK3vPwDP4c")
    }else if(totalScore > 10 && totalScore <= 15){
        playlist = "Upbeat";
        imgSrc="";
        //youtubeLink= str.link("https://www.youtube.com/playlist?list=PL3tcXMQSY-koiPlf5Us_mbtM_nP5nmw-O")
    }else if(totalScore > 15 && totalScore <= 20){
        playlist = "Moody";
        imgSrc="";
       //youtubeLink= str.link("https://www.youtube.com/playlist?list=PL3tcXMQSY-krzvf24poGX8ecl1YxAoSQe")
    }else if(totalScore > 20 && totalScore <= 24){
        playlist = "Favorites";
        imgSrc="";
        //youtubeLink= str.link("https://www.youtube.com/playlist?list=PL3tcXMQSY-krzBjeRzisnmFAv6zb_8U0b")
}

function description(){
    if(playlist === "Chill"){
        return $(".result").append("<h4>You're Kanan! You never lose your cool, even in tough situations. You're very supportive and put your friends' needs above your own.</4>");
    }else if(playlist === "Upbeat"){
        return $(".result").append("<h4>You're Dia! You're very refined, polite, and a bit of a perfectionist.</h4>");
    }else if(playlist === "Moody"){
        return $(".result").append("<h4>You're Hanamaru! You're hardworking, an avid reader, and a bit out of the know when it comes to technology.</h4>");
    }else if(playlist === "Favorites"){
        return $(".result").append("<h4>You're Mari! You're very cheerful and you love making jokes!</h4>");
    }
}


$("button").click(function() {
        memberPlacement = "TBD";
        imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
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

$("#search-button").click(function(){
    
    var search = "https://api.giphy.com/v1/gifs/search?q=" + $("input").val() + "&rating=pg&api_key=RBkP7oANf3SFnCb2sGL5c7Sq3j4NBFFr";
  $.ajax({
      url: search,
      method: "GET",
      success: function(response) {
                var value = Math.floor(response.data.length * Math.random());
           $('.gallery').append("<img src='" + response.data[value].images.original.url + "'/>");
        console.log(value);
          
      }
  });

});