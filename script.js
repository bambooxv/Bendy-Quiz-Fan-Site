$("button").click(function(){
  $(".result").empty();
});




$("button").click(function() {
	var race = $(".race").val();
	var sacrifice = $(".sacrifice").val();
    
    
	if (race === "" && sacrifice !== "") {
       $('.result').append('<img class="picture" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daacf276-cd84-4178-ad67-d9559a8edee9/dbpwzmd-c240edaa-7825-450b-a73f-520ee2fa5c4f.png/v1/fill/w_1600,h_995,q_80,strp/choose_your_path__bendy_and_the_ink_machine_ch3__by_fluffy_ravens_dbpwzmd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05OTUiLCJwYXRoIjoiXC9mXC9kYWFjZjI3Ni1jZDg0LTQxNzgtYWQ2Ny1kOTU1OWE4ZWRlZTlcL2RicHd6bWQtYzI0MGVkYWEtNzgyNS00NTBiLWE3M2YtNTIwZWUyZmE1YzRmLnBuZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Jd2_FX1eXw-iTCRzcZuj5XPGoZUpvb8inqBhQAXpm3w"> <p> Answer the First Question </p>');
    }
	else if (race !== "" && sacrifice === "") {
         $('.result').append('<img class="picture" src="https://64.media.tumblr.com/788c6bc15a12330d56c8776a4ca1dfee/tumblr_p0x3ym2Xd51tevvemo1_500.jpg"> <p> Answer the Second Question </p>');
    }
    else if (race === "" && sacrifice === "") {
         $('.result').append('<img class="picture" src="https://i.pinimg.com/originals/b7/8b/4e/b78b4e518b982939435a3a3c855beec5.png"> <p> Answer all the Questions </p>');
    }
    else if ((race === "demon" || race === "Demon" || race === "a Demon" || race === "A Demon" || race === "A demon" || race === "a demon") && (sacrifice <= 0)) {
         $('.result').append('<img class="picture" src="https://i.pinimg.com/originals/5a/00/d5/5a00d5c6619ca5966ab71ebec9c82ba0.jpg"> <p> You are Ink Bendy </p>');
    }
    else if ((race === "demon" || race === "Demon" || race === "a Demon" || race === "A Demon" || race === "A demon" || race === "a demon") && (sacrifice > 0)) {
         $('.result').append('<img class="picture" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f93dce98-b3c7-4cbe-9b5a-aefd4a5a0ea7/dd0975y-ba37f7f2-ba3e-4bdf-941e-27d6b286ee95.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjkzZGNlOTgtYjNjNy00Y2JlLTliNWEtYWVmZDRhNWEwZWE3XC9kZDA5NzV5LWJhMzdmN2YyLWJhM2UtNGJkZi05NDFlLTI3ZDZiMjg2ZWU5NS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.94tV_kXhaim-Vun0Bd39aqP6TUusqtvcip6HkGYsbLU"> <p> You are Sammy Lawerence </p>');
    }
    else if ((race === "angel" || race === "Angel" || race === "an Angel" || race === "an angel" || race === "An Angel" || race === "An angel") && (sacrifice <= 0)) {
         $('.result').append('<img class="picture" src="https://i.pinimg.com/originals/77/37/1f/77371f20bdd9230f818e12c131f2f20c.png"> <p> You are Alice Angel </p>');
    }
   else if ((race === "angel" || race === "Angel" || race === "an Angel" || race === "an angel" || race === "An Angel" || race === "An angel") && (sacrifice > 0)) {
         $('.result').append('<img class="picture" src="https://cdnb.artstation.com/p/assets/images/images/012/011/449/large/justine-derouaisne-lesboris03.jpg?1532555515"> <p> You are Boris the Wolf </p>');
    }
   else {
         $('.result').append('<img class="picture" src="https://pm1.narvii.com/6884/58adbfaff875d2ac6b391cf6a5190ceec40e40a2r1-1500-1500v2_hq.jpg"> <p> Unexpected Response, Retake the Quiz Correctly </p>');
   }
});

function clearInput() {
    $("input").val("");
}

$("button").click(function() {
    clearInput();
});

var counter = 0 ;
$("button").click(function(){
    counter = counter + 1 ;
    $(".count").text("The quiz was completed " + counter + " time(s)");
});


