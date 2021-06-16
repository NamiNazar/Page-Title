let instrument = "";
let YourPracticeHour = "";
let kindOfmusic = "";
let YourPracticeHourWeekends = "";

$("button").click(function(){
    instrument = $(".instrument").val();
    YourPracticeHour = $(".YourPracticeHour").val();
     kindOfmusic = $(".kindOfmusic").val();
    YourPracticeHourWeekends = $(".YourPracticeHourWeekends").val();
$("p").text("I always practice my " + instrument + " for about " + YourPracticeHour + ". I usually practice " + kindOfmusic + " music, and on weekends I practice for about" + YourPracticeHourWeekends + ". I try to watch an episode of movie after. " );
});




