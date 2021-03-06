// Refer to 06-Ajax activities + Panoptop video

var athletes = ['lebron james', 'kobe bryant', 'michael jordan', 'odell beckham jr', 'simone biles', 'floyd mayweather', 'dwayne wade', 'kevin durant', 'tom brady', 'larry bird', 'penny hardaway', 'nolan ryan', 'evander holyfield', `shaquille o'neal`, 'peyton manning', 'steph curry', 'kyrie irving'];

function showAthleteButton() {
    for (var i = 0; i < athletes.length; i++) {
        // console.log(athletes[i]);
        // Create buttons to show text of athletes in the #gif-buttons div
        var a = $('<button>');
        a.addClass('btn-click');
        a.text(athletes[i]);
        $('#gif-buttons').prepend(a);
    }
}
showAthleteButton();

$('#submit-btn').click(function (event) {
    event.preventDefault(); // Keeps page from refreshing
    var userInput = $('#gif-search').val().trim();
    if (userInput) {
        athletes.push(userInput);
        $('#gif-search').val(''); // Getter
        $('#gif-buttons').empty(); // Keeps from showing duplicate btns
        showAthleteButton();
    }
});

$(document).on('click', '.btn-click', function () {
    console.log('I work')
    var userAthleteInput = $(this).text();
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=ccxCr3q18LuZy8wDnC0dYPLWYBENh5Rz&limit=10&q=' + userAthleteInput;


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        var results = response.data;
        console.log(results);

        // var still
        // console.log(still);
        // var animate
        // console.log(animate);

        for (var i = 0; i < results.length; i++) {
            console.log(results[i].images.fixed_height.url);

            // var addGif = $('<img>');
            var gifImage = results[i].images.fixed_height.url;
            var gifDiv = $('<img>').attr('src', gifImage);
            $('#gif-section').prepend(gifDiv)

            var rating = results[i].rating;
            console.log('Rating:' + results[i].rating);
            var showRating = $('<p>').text('Rating: ' + rating);
            $('#gif-section').prepend(showRating);

            /* Adding the above code messes up the layout of the gifs on the page.
            Do I need to make the <p> & <img> as a single div? */

        }

        // Figure out how to clear the div when the user clicks on a different button?
    })

})


