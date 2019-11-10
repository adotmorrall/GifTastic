// Refer to 06-Ajax activities + Panoptop video

var cars = ['audi', 'porsche', 'challenger'];

function showCarButtons() {
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i]);
        // Create buttons to show text of cars in the #gif-buttons div
        var c = $('<button>');
        c.addClass('btn-click');
        c.text(cars[i]);
        $('#gif-buttons').append(c);
    }
}
showCarButtons();

$('#submit-btn').click(function (event) {
    event.preventDefault(); // Keeps page from refreshing
    var userInput = $('#gif-search').val().trim();
    if (userInput) {
        cars.push(userInput);
        $('#gif-search').val(''); // Getter
        $('#gif-buttons').empty(); // Keeps from showing duplicate btns
        showCarButtons();
    }
});

$(document).on('click', '.btn-click', function () {
    console.log('I work')
    var userCarInput = $(this).text();
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=ccxCr3q18LuZy8wDnC0dYPLWYBENh5Rz&limit=9&q=' + userCarInput;

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
    })
})


