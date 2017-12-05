var request = require('request');
var cheerio = require('cheerio');
var total = 0;

request('https://news.ycombinator.com', function (error, response, html) {
	if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('span.score').each(function(i, element) {
        	var splitstring = $(this).text();
        	splitstring = splitstring.replace(' points', '');
        	var eleint = Number(splitstring);
        	total += eleint;
        });
    console.log(total);
	}
});