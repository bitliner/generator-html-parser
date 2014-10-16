# generator-html-parser 

A generator for [Yeoman](http://yeoman.io).

It generates the basic structure of an html parser in node.js.

Useful if you are doing scraping with node.js. 


## Getting Started



### How to install it

To install generator-html-parser from npm, run:

```
$ npm install -g generator-html-parser
```


### How to use it

1. `mkdir facebook-html-parser && cd $_`
2. `yo html-parser`

That's it!


### How to customize it to parse any html string you need

The main file is `<site-name>-html-parser.js`.

It contains two methods

1. `parse(html,url)`: it receives as input the html (string) to parse and an url (string), useful if you need to resolve some relative url with the node module *Url* (already imported)
2. `getNextPages(html,url)`:  to get the urls of next pages to surf. Usually useful when you are scraping a list of pages. Still, it takes as input the html (string) to parse, and the url (string) to resolve eventually urls extracted from the html.

### Test

The generated code contains code for testing as well. 
Have a look at the folder `test/`

### Details of implementation

It is based on [cheerio](https://www.npmjs.org/package/cheerio) to parse the html.

Cheerio is like jQuery, but faster.



```
$ = cheerio.load(html);

$('.item').each(function() {
    var el=$(this);
	result.push(el.text());
})

``` 


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
