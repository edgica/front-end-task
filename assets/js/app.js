$(function () {
    $.ajax({
        url:
            'https://api.github.com/search/repositories?q=map+language:javascript&sort=stars&order=desc',
        method: 'GET',
        dataType: 'json',
        success: function (result) {
            console.log(result);
            generateBlocks(result.items);
        }
    })
});

$('table').append('<tr class="tableHeader"><td>NAME</td><td>Language</td><td>Description</td><td>Url:</td></tr>');

function generateBlocks (array) {
    for (var i = 0; i < array.length; i++ ) {
        $('table').append('<tr><td>' + array[i].name + '</td><td>' + array[i].language + '</td><td>' + description + '</td><td><a href="homePage">' + homePage + '</a></td></tr>');

        var homePage = "";
        if (array[i].homepage) {
            homePage = array[i].homepage;
        }

        var description = "";
        if (array[i].description) {
            description = array[i].description;
        }

    }
}


