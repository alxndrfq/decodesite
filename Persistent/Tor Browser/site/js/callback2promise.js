// This function returns the contributors of the first MDN search result using the provided searchTerm
var ENDPOINT = 'https://developer.mozilla.org/en-US/search.json?q=';

    function getContributors(searchTerm, callback) {
        $.getJSON(ENDPOINT + encodeURIComponent(searchTerm), function(searchResults) {
            if (searchResults.count > 0) {
                var result = searchResults.documents[0];
                var url = result.url;
                $.get(url, function(pageContent) {
                    var $pageContent = $(pageContent); // transform the HTML text to a DOM structure for searching
                
                
        var $profiles = $pageContent.find('.contributors-sub').find('a[href*="/profiles/"]');

        var contributors = $.map($profiles, function(el) {return $(el).text(); });

        callback(null, contributors);
        });
    }

            else {
                callback(new Error('The search did not return any result'));
                   }
                });
            }

// Search for the Promises article and find its contributors

    getContributors('Promises', function(error, contributors) {
        if (error) {
            alert("An error occurred:\n\n" + (error.message || error));  }
        else {    alert("The contributors to the Promises page are: " + contributors.join(', '));  }});