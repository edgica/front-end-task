/**
* Search result content wrapper
* @type {Element|HTMLDivElement}
*/
var searchContent = $(".result_content"),

	/**
	* GtHub options
	* @type {{apiUrl: string, q: string, language: string, sort: string, order:string}}
	*/
	gitOptions = {
		apiUrl: 'https://api.github.com/search/repositories?',
		q: 'map',
		language: 'javascript',
		sort: 'stars',
		order: 'desc'
	};

/**
* Parses gitHub response
* @param {object} response
* @param {array} response.items Response items
*/
function jsonGitApi(response) {
    if (response.items) {
        searchContent.innerHTML = "";
  		var template = $('#template').html();
			Mustache.parse(template);
			var rendered = Mustache.render(template, { items: response.items });
			searchContent.html(rendered);
    } else {
        showError();
    }
}

var gitResponse;


//Generating of user cards

$("#search_button").on("click", function(e) {
	var searchRequest = new XMLHttpRequest();
	var gitHubApiUrl = gitOptions.apiUrl
		+ "q=" + gitOptions.q 
		+ "+"
		+ "language:" + gitOptions.language
		+ "&sort="+ gitOptions.sort
		+ "&order=" + gitOptions.order
	searchRequest.open("GET", gitHubApiUrl);
	searchRequest.onreadystatechange = function () {
        if(searchRequest.readyState === XMLHttpRequest.DONE && searchRequest.status === 200) {
            gitResponse = JSON.parse(searchRequest.responseText);
            jsonGitApi(gitResponse);
        }
    };
	searchRequest.send();	
	e.preventDefault();
})

/**
* Shows error when request status is not `ok`
*/
function showError() {
    searchContent.innerHTML = 'Request error';
}
