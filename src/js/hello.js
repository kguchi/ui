$(function() {
    $("input:button").click(function() {
        let hour = new Data().getHours();
        let greeting, color;

        if (hour >= 4 && hour < 10) {
            greeting = "おはようございます！";
            color = "#0068B7";
        } else if (hour >= 12 && hour < 18) {
            greeting = "こんにちは！";
            color = "#F39800";
        } else {
            greeting = "こんばんは！";
            color = "#920783";
        } 
        $("#message").html(greeting).css("background-color", color);
    });
});