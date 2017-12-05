
//Jeff Joyce
var request = require('request');
var cheerio = require('cheerio');


request('http://xmfan.com/guide.php', function (error, response, html) {
	if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('td [width = "140"]').each(function(i, element) {
         	console.log($(this).text());
        });
	}
});