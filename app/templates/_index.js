var cheerio = require('cheerio'),
    UrlResolver = require('url');

/****
* This method parses html string in input
* and returns an object or a list of objects 
* representing the entities extracted from the html. 
* It also receives in input the url of the page where the html comes from. 
* The url is useful to resolve relative urls embedded in the page using the UrlResolver 
*/
module.exports.parse = function(html, url) {
    var $, result;



    $ = cheerio.load(html);
    result = [];

    // here select the html elements and process them
    $('.item').each(function() {
        var el=$(this);
        result.push(el.text());
    })

    return result;




}

module.exports.getNextPages = function(html, url) {
    var $,
        next;


    $ = cheerio.load(html);

    // select the next url and resolve it
    next = $('a:contains(Next Page)').attr('href');
    next = UrlResolver.resolve(url, next);


    return [next];

}

